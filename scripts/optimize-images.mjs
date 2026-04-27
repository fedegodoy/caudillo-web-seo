/**
 * Optimizador de imágenes y videos para Caudillo Bar
 *
 * USO:
 *   npm run fotos
 *
 * Estructura:
 *   fotos-raw/
 *     hero/     → public/images/hero/     (2560×1440)
 *     menu/     → public/images/menu/     (800×600)
 *     galeria/  → public/images/galeria/  (1200×900)  + videos → public/videos/
 *
 * Imágenes: JPG/PNG/HEIC/WEBP → AVIF optimizado con nombre SEO
 * Videos:   MP4/MOV → MP4 H.264 optimizado con nombre SEO
 */

import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { spawnSync } from "child_process";

const CARPETAS = {
  hero:    { width: 2560, height: 1440, fit: "cover" },
  menu:    { width: 800,  height: 600,  fit: "cover" },
  galeria: { width: 1200, height: 900,  fit: "cover" },
};

const CALIDAD_AVIF = 60;

// Detectar ffmpeg: PATH del sistema, Homebrew, o bundled con Stremio
function detectarFfmpeg() {
  const candidatos = [
    "ffmpeg",
    "/opt/homebrew/bin/ffmpeg",
    "/usr/local/bin/ffmpeg",
    "/Applications/Stremio.app/Contents/MacOS/ffmpeg",
  ];
  for (const bin of candidatos) {
    const r = spawnSync(bin, ["-version"], { stdio: "pipe" });
    if (r.status === 0) return bin;
  }
  return null;
}

const FFMPEG = detectarFfmpeg();
const DIR_INPUT    = "fotos-raw";
const DIR_OUTPUT   = "public/images";
const DIR_VIDEOS   = "public/videos";
const SUFIJO       = "caudillo-bar-saavedra";

// Nombre de archivo (o parte de él) → slug SEO final
const MAPA_NOMBRES = {
  // Hero — nombres con dimensiones en el archivo
  "comiendo_milanesa":    "comiendo-milanesa-plato",
  "milanesa_plato":       "milanesa-plato",
  "empanada":             "empanada",
  "delivery":             "delivery-a-domicilio",
  "evento":               "evento-privado",
  "terraza":              "terraza-pet-friendly",
  "fachada":              "fachada-caudillo-bar",
  "exterior":             "terraza-pet-friendly",
  "cel_instagram":        "instagram",

  // Galería — ambiente y espacios
  "interior":         "interior-salon",
  "barra":            "barra",
  "salon":            "salon",
  "vereda":           "vereda",
  "bidones":          "bidones-soda",
  "mesas vacias":     "mesas-salon",
  "mesas-vacias":     "mesas-salon",
  "imagen bar":       "ambiente-salon",
  "imagen-bar":       "ambiente-salon",
  "nocturno":         "ambiente-nocturno",
  "noche":            "ambiente-nocturno",

  // Galería — gente y vida social
  "gente resto":      "gente-salon",
  "gente-resto":      "gente-salon",
  "gente terraza":    "gente-terraza",
  "gente-terraza":    "gente-terraza",
  "gente vereda":     "gente-vereda",
  "gente-vereda":     "gente-vereda",
  "tertulia":         "evento-tertulia",
  "terulia":          "evento-tertulia",

  // Galería — detalles del bar
  "metegol":          "metegol",
  "mural":            "mural-candido-lopez",
  "candido":          "mural-candido-lopez",
  "irene":            "equipo-irene",
  "equipo":           "equipo",

  // Sándwiches
  "azurduy":          "sandwich-azurduy",
  "dorrego":          "sandwich-dorrego",
  "artigas":          "sandwich-artigas",
  "restaurador":      "sandwich-restaurador",

  // Platos
  "pastel-de-papas-osobuco": "pastel-de-papas-con-osobuco",
  "pastel":           "pastel-de-papas",
  "canelones":        "canelones",
  "milanesa":         "milanesa",
  "noquis":           "noquis",
  "ñoquis":           "noquis",
  "osobuco":          "osobuco",
  "risotto":          "risotto",

  // Entradas
  "provoleta":        "provoleta",
  "mollejas":         "mollejas",

  // Tragos
  "ferroviario":      "trago-ferroviario",
  "pico":             "trago-pico-y-pala",
  "negroni":          "trago-negroni",

  // Reels — videos
  "charla":           "reel-noche-de-charla",
  "tango":            "reel-noche-de-tango",
  "tertulia":         "reel-noche-de-tertulia",
  "llegamos":         "reel-llegamos",
  "noches verano":    "reel-noches-de-verano",
  "noches-verano":    "reel-noches-de-verano",
  "verano":           "reel-noches-de-verano",
};

function slugificar(nombre) {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function resolverNombreSEO(nombreArchivo) {
  const slug = slugificar(basename(nombreArchivo, extname(nombreArchivo)));
  // Primero buscar claves de varias palabras (más específicas)
  const clavesOrdenadas = Object.entries(MAPA_NOMBRES).sort(
    ([a], [b]) => b.length - a.length
  );
  for (const [clave, valor] of clavesOrdenadas) {
    if (slug.includes(slugificar(clave))) {
      return `${valor}-${SUFIJO}`;
    }
  }
  return `${slug}-${SUFIJO}`;
}

async function procesarImagen(inputPath, outputDir, config, nombreSEO) {
  await mkdir(outputDir, { recursive: true });
  const outputAvif = join(outputDir, `${nombreSEO}.avif`);

  await sharp(inputPath)
    .resize({ width: config.width, height: config.height, fit: config.fit, position: "center", withoutEnlargement: true })
    .avif({ quality: CALIDAD_AVIF, effort: 6 })
    .toFile(outputAvif);

  const { size } = await stat(outputAvif);
  return (size / 1024).toFixed(1) + "KB";
}

async function procesarVideo(inputPath, outputDir, nombreSEO) {
  await mkdir(outputDir, { recursive: true });
  const outputMp4 = join(outputDir, `${nombreSEO}.mp4`);

  if (!FFMPEG) throw new Error("ffmpeg no encontrado. Instalá con: brew install ffmpeg");

  // H.264 baseline, escala a máx 1080p, audio AAC, sin metadatos
  const result = spawnSync(FFMPEG, [
    "-y",
    "-i", inputPath,
    "-vf", "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease",
    "-c:v", "libx264",
    "-profile:v", "baseline",
    "-level", "3.1",
    "-crf", "28",
    "-preset", "slow",
    "-movflags", "+faststart",
    "-c:a", "aac",
    "-b:a", "128k",
    "-map_metadata", "-1",
    outputMp4,
  ], { stdio: "pipe" });

  if (result.status !== 0) {
    throw new Error(result.stderr?.toString().split("\n").slice(-5).join(" ") || "ffmpeg error");
  }

  const { size } = await stat(outputMp4);
  return (size / 1024 / 1024).toFixed(1) + "MB";
}

async function procesarCarpeta(carpetaNombre) {
  const config = CARPETAS[carpetaNombre];
  const inputDir = join(DIR_INPUT, carpetaNombre);
  const outputDirImg = join(DIR_OUTPUT, carpetaNombre);
  const outputDirVid = DIR_VIDEOS;

  let archivos;
  try {
    archivos = await readdir(inputDir);
  } catch {
    console.log(`  ⚠️  ${inputDir}/ no encontrada — saltando`);
    return;
  }

  const imagenes = archivos.filter((f) => /\.(jpe?g|png|webp|heic|heif|tiff?|bmp)$/i.test(f));
  const videos   = archivos.filter((f) => /\.(mp4|mov|avi|mkv)$/i.test(f));

  if (imagenes.length === 0 && videos.length === 0) {
    console.log(`  ℹ️  Sin archivos en ${inputDir}/`);
    return;
  }

  if (imagenes.length > 0) {
    console.log(`\n📂 ${carpetaNombre}/  (${config.width}×${config.height}px — ${imagenes.length} fotos)\n`);
    const usados = new Map(); // slug → contador
    for (const archivo of imagenes) {
      let nombreSEO = resolverNombreSEO(archivo);
      const count = (usados.get(nombreSEO) ?? 0) + 1;
      usados.set(nombreSEO, count);
      if (count > 1) nombreSEO = `${nombreSEO}-${count}`;
      process.stdout.write(`   ${archivo.padEnd(35)} → ${nombreSEO}.avif`);
      try {
        const size = await procesarImagen(join(inputDir, archivo), outputDirImg, config, nombreSEO);
        console.log(`  [${size}]`);
      } catch (err) {
        console.log(`  ERROR: ${err.message}`);
      }
    }
  }

  if (videos.length > 0) {
    console.log(`\n🎬 ${carpetaNombre}/videos  (→ ${outputDirVid}/ — ${videos.length} reels)\n`);
    for (const archivo of videos) {
      const nombreSEO = resolverNombreSEO(archivo);
      process.stdout.write(`   ${archivo.padEnd(35)} → ${nombreSEO}.mp4`);
      try {
        const size = await procesarVideo(join(inputDir, archivo), outputDirVid, nombreSEO);
        console.log(`  [${size}]`);
      } catch (err) {
        console.log(`  ERROR: ${err.message}`);
      }
    }
  }
}

async function main() {
  console.log("\n  Caudillo Bar — Optimizador de imágenes y videos\n");
  for (const carpeta of Object.keys(CARPETAS)) {
    await procesarCarpeta(carpeta);
  }
  console.log("\n✅ Listo.");
  console.log("   Imágenes → public/images/galeria/");
  console.log("   Videos   → public/videos/");
  console.log("   Si algún nombre quedó raro, editá MAPA_NOMBRES en scripts/optimize-images.mjs\n");
}

main().catch(console.error);
