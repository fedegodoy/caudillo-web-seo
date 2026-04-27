# CONTEXT.md — Proyecto Caudillo Bar
## Contexto Maestro para Agentes de IA (Claude Code / Gemini en Antigravity)

> Este archivo debe leerse **completo** antes de ejecutar cualquier tarea del proyecto.
> Fue generado en Claude.ai como síntesis de la conversación inicial y el plan de trabajo maestro.

---

## ⛔ REGLAS INAMOVIBLES — LEER ANTES DE EJECUTAR CUALQUIER TAREA

Estas reglas son **no negociables**. Fueron violadas en sesiones anteriores y generaron retrabajo. Cualquier agente (Claude o Gemini) que ejecute tareas en este proyecto debe respetarlas sin excepción.

### EL NEGOCIO TIENE DOS EJES CON EL MISMO PESO
Caudillo Bar es **bar Y restaurante en simultáneo**. No es un restaurante que tiene barra. No es un bar que sirve comida. Los dos frentes se posicionan en paralelo. Cualquier copy, keyword research, diseño o estructura que solo cubra uno de los dos ejes está incompleto.

### EL SITEMAP TIENE 9 PÁGINAS — NO SE REDUCE SIN AUTORIZACIÓN DE FEDE
Las siguientes 9 páginas son **obligatorias** desde el inicio del diseño (Fase 3). No se pueden fusionar, simplificar ni posponer sin que Fede lo apruebe explícitamente:

| URL | Keyword objetivo | Por qué es inamovible |
|---|---|---|
| `/` | "bar Saavedra" / "bodegón Saavedra" | Home: entrada a los 5 frentes |
| `/menu` | "menú Caudillo" / "carta tragos Saavedra" | Menú completo en HTML — NUNCA PDF/imagen |
| `/restaurante` | "restaurante Saavedra" / "almuerzo Saavedra" | Keyword transaccional propia — no puede compartir página con el menú |
| `/eventos` | "alquiler salón Saavedra" / "terraza eventos" | Océano azul — cero competencia directa |
| `/delivery` | "delivery Saavedra" / "pedir comida Saavedra" | Tiene Schema `OrderAction` propio + keywords de delivery |
| `/el-bar` | "bar de autor Saavedra" | Construye autoridad de entidad para GEO/AEO |
| `/galeria` | (señal de frescura) | Fotos crawleables — señal de actividad para IA |
| `/contacto` | "reservas Saavedra" | Conversión final + NAP canónico |
| `/blog` | long-tail por servicio | Motor SEO de largo plazo — sin esto no hay crecimiento orgánico |

**Si un agente propone un sitemap de menos de 9 páginas, la respuesta es NO.** El diseño debe contemplar todas las páginas desde el wireframe del Home (nav, footer, CTAs).

### EL KEYWORD RESEARCH CUBRE LOS 5 FRENTES
No solo "bodegón" o "restaurante". Los 5 ejes del negocio necesitan cobertura de keywords:
1. Bar / Coctelería / Vermut
2. Restaurante / Cocina criolla / Almuerzo
3. Delivery (Rappi/PedidosYa)
4. Eventos / Terraza
5. Música en vivo

### EL TONO ES PORTEÑO DIRECTO Y CÁLIDO — NO AGRESIVO
- **SÍ:** Directo, coloquial, auténtico, anfitrión. Como alguien que te invita a su casa.
- **NO:** Frases que juzgan al usuario ("almorzar un sándwich de parado no es almorzar"), frases que empujan ("dejate de vueltas"), defensivas sobre precio ("gratis no es, pero lo vale").
- El formato BLUF (dato primero) aplica para GEO/AEO, pero eso no significa brutalidad — se puede ser directo y cálido al mismo tiempo.

### ARCHIVOS TÉCNICOS SIEMPRE EN ESPAÑOL
El `llms.txt` y cualquier documento de posicionamiento de entidad deben estar en español. El negocio es argentino, el público objetivo es argentino.

### FUENTE DE VERDAD PARA PRECIOS Y DESCRIPCIONES DEL MENÚ
El archivo **`/CAUDILLO BAR/Base_Datos_Menu_Caudillo.md`** es la única fuente canónica de precios, nombres y descripciones de platos, bebidas y vinos. Cualquier duda sobre el menú se resuelve con ese archivo — **no desde capturas de pantalla, no desde memoria, no desde otros documentos**. Si el archivo no existe o está desactualizado, consultar con Mateo antes de escribir precios o descripciones.

### DOCUMENTACIÓN AL FINALIZAR CADA SESIÓN
Actualizar `RESUMEN_EJECUTIVO_PROGRESO.md` al terminar cualquier sesión significativa. Documentar decisiones tomadas y cambios realizados para que el próximo agente (sea Claude o Gemini) tenga contexto completo.

### PENDIENTES OPERATIVOS → PENDIENTES_MATEO.md
Cada vez que se identifique un pendiente operativo (fotos, datos del negocio, confirmaciones de Mateo, accesos a cuentas, etc.), **agregarlo al archivo `PENDIENTES_MATEO.md`** en la raíz del proyecto. Este archivo centraliza todo lo que Fede necesita resolver con Mateo. No dejar pendientes sueltos en conversaciones o documentos individuales — todo va a ese archivo.

### DISEÑO PERSONALIZADO VS ESTRUCTURA SEO
De cara a futuras refactorizaciones estéticas: la web utiliza **Vanilla CSS modular**. Se puede rediseñar visualmente (colores, fuentes, efectos, layouts) con total libertad, pero **NO se deben alterar las IDs (`id="..."`), los encabezados (`<h1>`, `<h2>`) ni los Schemas JSON-LD** sin una revisión estratégica. Estos elementos son los "anclajes" que garantizan el posicionamiento en Google e IA.

---

## 1. QUIÉN SOY (El Freelancer)

Me llamo **Fede**. Trabajo de manera independiente haciendo piezas gráficas y videos para negocios, y estoy en proceso de incorporar el **desarrollo web con IA** como servicio. Este proyecto es mi primer caso real de web + SEO desde cero, y tiene dos objetivos simultáneos:

1. Entregarle a un amigo/cliente una web que realmente posicione y genere clientes.
2. Documentar y dominar el proceso para replicarlo con otros clientes (el mismo amigo tiene un **estudio de grabación y salas de ensayo** que sería el próximo proyecto).

**Stack de trabajo:**
- **Antigravity** como entorno principal de desarrollo
- **Claude** (Claude.ai + Claude Code) para desarrollo y razonamiento técnico
- **Gemini** para investigación, NotebookLM y acceso a Google Drive
- **Vercel** para deploy

---

## 2. EL CLIENTE: CAUDILLO BAR

| Campo | Dato |
|---|---|
| Nombre del negocio | Caudillo Bar |
| Dominio | caudillobar.com.ar |
| Ubicación | Saavedra, CABA — zona límite con Núñez / Coghlan |
| Estado actual | Abierto hace pocos meses (diciembre ~2024) |
| Presencia web | Ninguna (dominio registrado, sin web activa) |
| Google Maps | No aparece / perfil no configurado |
| Redes sociales | Tiene algo, pero no mucho desarrollo |
| Dueño de referencia | Mateo (amigo de Fede, a cargo de comunicación) |

### Identidad del negocio

Caudillo Bar es **bar y restaurante con peso similar en ambos ejes**. No es un bar que sirve algo de comer, ni un restaurante que tiene barra: las dos patas tienen el mismo protagonismo y deben posicionarse en paralelo.

### Servicios a posicionar (los 5 frentes)

| Servicio | Descripción | Notas estratégicas |
|---|---|---|
| **Bar / Barra clásica porteña** | Vermut, Fernet, Campari, Negroni + dos de la casa: Ferroviario y Pico y Pala. Cervezas en lata/porrón (sin artesanal tirada). **El diferencial real es la carta de vinos boutique** (Atamisque, Catena Zapata, Wapisa, Durigutti, El Porvenir). | Frente nocturno principal |
| **Restaurante** | Almuerzo y cena — menú ejecutivo propio al mediodía (opciones y precios diferentes al menú de noche) | Frente con dos subfuentes distintas |
| **Delivery** | Solo Rappi (confirmar si PedidosYa está activo) | Requiere página/sección propia y Schema `OrderAction` |
| **Alquiler de terraza / espacio para eventos** | Terraza disponible para eventos privados | Alta rentabilidad, keyword de nicho con poca competencia |
| **Música en vivo / entretenimiento** | Indie/rock, eventos especiales | Señal de frescura para GBP + atributo semántico clave |

### Atributos semánticos completos (para Schema, GBP, copy y llms.txt)

- Bar de barra clásica porteña — vermut, fernet, clásicos
- Vinos de bodegas boutique argentinas (diferencial real del bar)
- Dos tragos de la casa: Ferroviario y Pico y Pala
- Restaurante (almuerzo y cena) — menú ejecutivo propio al mediodía
- Cocina criolla: sándwiches de autor y platos de la casa
- ~~Cerveza artesanal~~ → Solo cervezas en lata/porrón (Andes, Corona) — NO hay artesanal tirada
- ~~Street food / hamburguesas~~ → No hay hamburguesas en la carta actual
- Patio / terraza al aire libre pet-friendly
- Música en vivo (indie/rock)
- Delivery disponible (Rappi / PedidosYa)
- Alquiler de espacio para eventos privados
- Ambiente joven, relajado, sofisticado casual
- Ubicación: Saavedra, CABA — zona norte, límite Núñez/Coghlan

### Implicancias estratégicas de esta combinación

**Para el sitemap:** cada servicio necesita su propia URL para posicionar de forma independiente. "Restaurante en Saavedra" y "Bar en Saavedra" son búsquedas distintas con públicos distintos — no pueden compartir página.

**Para GBP:** la categoría principal debe elegirse con criterio (ver Fase 1.2). Las categorías secundarias cubrirán los demás frentes. El servicio de "Alquiler de salón para eventos" tiene muy poca competencia en la zona — es una oportunidad de nicho clara.

**Para el Schema:** además del `ReserveAction`, se necesita `OrderAction` (delivery) y un tipo específico para eventos (`EventVenue` o atributo `amenityFeature`).

**Para el Blog:** los 5 servicios generan temas de contenido distintos, lo que multiplica las posibilidades de posicionamiento orgánico long-tail.

**Relación con el cliente:** Fede ya genera contenido gráfico y video para el bar. La web se arranca como un "regalo" / proyecto piloto, con intención de formalizarlo. Mateo deberá ceder acceso a su cuenta de Google para configurar Google Business Profile en una etapa posterior.

---

## 3. OBJETIVO DEL PROYECTO

Construir la web de Caudillo Bar **desde cero y pensada para posicionar**, no solo como vitrina. Los tres frentes de visibilidad son:

1. **Google Search** (SEO orgánico tradicional)
2. **Google Maps** (Local SEO + Google Business Profile)
3. **Buscadores de IA** (GEO/AEO — ChatGPT, Perplexity, Gemini SGE)

El foco no es solo que la web quede linda. Es que **desde el minuto cero** el código, la estructura, el contenido y los datos estructurados estén construidos para que la web sea indexada, recomendada y convertidora.

---

## 4. ESTADO ACTUAL DEL PROYECTO

### Fase 0 — Investigación: ✅ COMPLETADA
Se generaron 4 cuadernos en NotebookLM con informes de Gemini cubriendo los ejes:
- SEO 2025–2026 (fundamentos y factores de ranking)
- GEO / AEO (optimización para buscadores con IA)
- Web para bares y restaurantes (UX / conversión)
- Local SEO y Google Business Profile
- Performance Web y Core Web Vitals (integrado en los SOPs técnicos)

Estos cuadernos generaron 8 documentos de referencia técnica que ya están incorporados al plan maestro:
- `Blueprint de Arquitectura y Especificaciones Técnicas`
- `Guía Definitiva de Patrones de Diseño de Alta Conversión`
- `Informe Maestro de Optimización, Autoridad y Ranking Local 2026`
- `Manual de Posicionamiento Cero-Clic`
- `Manual Maestro GEO / Arquitectura IA`
- `SOP Técnico: Arquitectura, CWV y Schema 2026`
- `SOP UX/UI: Arquitectura de Decisión y CRO Gastronómico`
- `SOP Optimización SEO Local y GBP 2026`

### Fase actual: **FASE 1 — ESTRATEGIA**
El plan maestro completo está documentado en `plan_maestro_caudillo_bar.docx` (generado en Claude.ai).

---

## 5. PLAN DE TRABAJO — RESUMEN DE FASES
| Fase | Nombre | Estado |
|---|---|---|
| 0 | Investigación (NotebookLM) | ✅ Completada |
| 1 | Estrategia y Definición | ✅ Completada |
| 2 | Contenido y Copywriting SEO/GEO | ✅ Completada |
| 3 | Diseño UX/UI | ✅ Completada |
| 4 | Desarrollo Técnico | ✅ Completada (V1 — 2026-04-27) |
| 5 | Google Business Profile y Local SEO | ⏳ Pendiente (Mateo) |
| 6 | Lanzamiento | ✅ Deployada a producción vía Vercel |
| 7 | Monitoreo y Contenido Continuo | ⏳ Pendiente |

### Estado V1 Final (2026-04-27)
Web 100% funcional, deployada. Cambios principales aplicados en revisión con Fede:
- Tipografía Lora bold en todos los títulos hero (reemplaza Bebas Neue)
- Tabs sticky con JS (workaround por overflow-x: hidden en body)
- Íconos x4 PNGs reales con mix-blend-mode (sustituyen emojis)
- Galería pre-footer arreglada (grid-template-rows explícito)
- Mapa home compactado (aspect-ratio 16/5)
- Reseñas con line-clamp y caja contenedora dentro del container
- FAQ contacto con caja contenedora propia, accordion arreglado
- Eventos: sección "Para qué sirve" eliminada (causaba espacio vacío por GSAP reveal)
- WhatsApp mobile: ícono SVG verde sin número visible


---

## 6. FASE 1 — DETALLE DE TAREAS (ESTADO ACTUAL)

La Fase 1 consiste en cuatro bloques. Su función es generar el insumo estratégico que alimentará el diseño y el desarrollo.

### 1.1 Análisis de Competencia Local
- Buscar "bar Saavedra" y "tragos de autor Saavedra" en Google Maps
- Analizar las webs de los primeros 5 resultados del Local Pack
- Registrar: páginas que tienen, secciones, velocidad, tipo de menú, palabras clave usadas en H1 y meta titles
- Identificar carencias de la competencia (esas son las oportunidades de Caudillo)

### 1.2 Keyword Research

Cada servicio tiene su propio universo de búsquedas. Investigar por separado:

**Bar / Coctelería**
- "bar Saavedra", "bar Núñez", "bar Coghlan"
- "tragos de autor Saavedra", "coctelería de autor CABA norte"
- "bar con patio Saavedra", "bar pet-friendly Saavedra"
- "cerveza artesanal Saavedra"

**Restaurante**
- "restaurante Saavedra", "almuerzo Saavedra", "donde comer Saavedra"
- "restaurante con barra Saavedra", "bar restaurante zona norte CABA"

**Delivery**
- "delivery Saavedra", "hamburguesas a domicilio Saavedra"
- "pedir comida Saavedra Rappi PedidosYa"

**Eventos / Terraza**
- "alquiler de salón Saavedra", "espacio para eventos privados CABA norte"
- "terraza para cumpleaños Saavedra", "lugar para eventos Núñez Coghlan"
- ⭐ **Nicho de alta oportunidad** — poca competencia local, intención de compra alta

**Música en vivo**
- "bar con música en vivo Saavedra", "bares con bandas en vivo CABA norte"
- "bar indie Saavedra", "after-office con música Saavedra"

**Long-tail general**
- "dónde tomar algo con amigos en Saavedra"
- "bar con patio pet-friendly zona norte CABA"
- "lugar para salir de noche Saavedra Núñez"

**Herramientas:** Google Keyword Planner, Ubersuggest, Answer the Public

### 1.3 Propuesta de Valor y Posicionamiento de Entidad
- Definir los 3–5 atributos semánticos clave (pet-friendly, patio, música en vivo, tragos de autor, etc.)
- Estos atributos se usarán en: Schema Markup, GBP, copy de la web y archivo `llms.txt`
- Definir el público objetivo y el "momento de visita" ideal
- Definir el tono de marca para el copywriting

### 1.4 Arquitectura de la Información (Sitemap)

Cada servicio necesita su propia URL para posicionar de forma independiente. No colapsar servicios distintos en una sola página.

**Páginas principales:**
- `/` — Inicio (Home) — resumen de todos los frentes + CTAs principales
- `/menu` — Menú completo (jump-links: Tragos / Cervezas / Comidas)
- `/restaurante` — Almuerzo y cena — posiciona "restaurante Saavedra"
- `/eventos` — Alquiler de terraza / espacio para eventos privados — posiciona "salón para eventos Saavedra"
- `/delivery` — Delivery: cómo pedir, plataformas, zona de cobertura
- `/el-bar` — El Bar / Nosotros — historia, identidad, equipo
- `/galeria` — Galería / Fotos — ambiente, platos, eventos
- `/contacto` — Reservas, WhatsApp, mapa, horarios
- `/blog` — Blog (motor de SEO de largo plazo, un post por servicio/tema)

**Nota sobre `/restaurante` y `/eventos`:** estas dos páginas son las de mayor oportunidad de posicionamiento rápido porque la competencia local en esos términos es baja. Priorizarlas en el plan de contenido.

---

## 7. DECISIONES TÉCNICAS YA TOMADAS

Estas decisiones vienen de la investigación y el plan maestro. **No se discuten, se implementan:**

### Stack
- **Framework:** Astro (preferido) o Next.js con SSR/ISR
- **Deploy:** Vercel
- **Imágenes:** AVIF (obligatorio) o WebP. JPG/PNG sin comprimir = prohibido
- **Optimización de imágenes:** Sharp en el pipeline CI/CD
- **CSS crítico:** Critters o Penthouse para inlining above-the-fold

### SEO Técnico
- HTML semántico con un único `<h1>` por página
- Jerarquía de encabezados sin saltar niveles (H1 → H2 → H3)
- ARIA Landmarks: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
- Canonical tags en todas las URLs
- sitemap.xml generado automáticamente
- robots.txt con permisos explícitos para: `Googlebot`, `GPTBot`, `PerplexityBot`, `Google-Extended`, `ClaudeBot`
- Archivo `llms.txt` en el directorio raíz (nuevo estándar para crawlers de IA)

### Schema Markup (JSON-LD)
- Tipo base: `Bar` + `Restaurant` (doble tipado — el negocio es los dos)
- Campos obligatorios: `@id`, `geo` (5 decimales exactos), `openingHoursSpecification`, `servesCuisine`, `hasMenu`
- `potentialAction`: **dos acciones**
  - `ReserveAction` → reserva de mesa (WhatsApp o formulario)
  - `OrderAction` → delivery (link a Rappi / PedidosYa)
- Jerarquía de menú: `Menu → MenuSection → MenuItem`
- Para la página de eventos: atributo `amenityFeature` con "Salón para eventos" + `EventVenue` donde aplique
- Validación: Google Rich Results Test antes del lanzamiento

### Core Web Vitals — Umbrales (P75, CrUX)
| Métrica | Objetivo |
|---|---|
| LCP | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |
| FCP | ≤ 1.8s |
| TTFB | ≤ 800ms |

### Performance — Reglas críticas
- Imagen LCP: `fetchpriority="high"` + `loading="eager"` — NUNCA `loading="lazy"`
- Todas las imágenes debajo del fold: `loading="lazy"`
- `font-display: swap` en todas las fuentes web
- `defer` en todos los scripts no críticos
- Partytown para scripts de terceros (analytics, píxeles) → Web Workers
- Speculation Rules API para pre-renderizar `/menu`, `/restaurante`, `/eventos` y `/contacto`
- Touch targets mínimo 44×44px (idealmente 48×48px)
- Lighthouse CI integrado en el pipeline (bloquear PRs que bajen el score de 90)

### Menú — Regla de oro
**PROHIBIDO** publicar el menú como imagen JPG, PNG o PDF.
El menú debe ser **100% HTML semántico** (`<ul>/<li>` o `<table>`), con jump-links por categoría y respaldado por Schema `MenuItem`.

---

## 8. PRINCIPIOS DE CONTENIDO (GEO/AEO)

Estas reglas aplican a **todo el copy de la web**, no solo al menú:

### Formato BLUF (Bottom Line Up Front)
Las IAs (Perplexity, ChatGPT) evalúan la relevancia de una fuente en los primeros caracteres de cada sección.

- ✅ **Correcto:** "Caudillo Bar (Saavedra, CABA) es bar y restaurante de cocina criolla en Crámer 3180. Tiene terraza al aire libre pet-friendly, vinos de bodegas boutique (Atamisque, Catena Zapata, Durigutti) y menú ejecutivo de lunes a viernes al mediodía."
- ❌ **Incorrecto:** "Si estás buscando un lugar increíble para relajarte después de un duro día de trabajo..." → la IA lo descarta como fluff.

### Encabezados ultra-específicos
No: `<h2>Nuestra Carta</h2>`
Sí: `<h2>Vinos de Bodegas Boutique en Caudillo Bar, Saavedra</h2>`

### Descripciones con datos duros
No: "deliciosas hamburguesas"
Sí: "medallón de 120g de carne de pastura, pan brioche de fermentación lenta, queso cheddar fundido"

### Precios sin símbolo ni comas
No: `$6.500`
Sí: `6500`
(Reduce el "dolor de pago" — estudios Cornell / Universidad)

### FAQ estructurada
10 preguntas de alta intención con respuestas directas de ≤60 palabras. Alimenta Ask Maps y AI Overviews.

---

## 9. REGLAS CRÍTICAS DE GBP (PARA LA FASE 5)

- Nombre en GBP = nombre legal exacto. **Sin keywords añadidas.** (keyword stuffing = suspensión inmediata)
- NAP (Name, Address, Phone) idéntico en: GBP + web + Instagram + Facebook + TripAdvisor
- Horarios especiales configurados para **todos los feriados del año** — incluir horarios diferenciados de almuerzo si el mediodía es en días específicos
- Fotos: mínimo 25, formato 4:3 (1200×900px), con geotagging EXIF de Saavedra, nombre de archivo descriptivo
- Review Velocity: objetivo de 20+ reseñas recientes. Meta de calificación: **4.5 a 4.9** (un 5.0 perfecto puede ser penalizado como inauténtico)
- Atributos: completar **todos** los disponibles — especialmente: patio al aire libre, música en vivo, pet-friendly, opciones veganas, delivery, Wi-Fi, reservas, alquiler de espacio para eventos
- URL en GBP con parámetro UTM: `caudillobar.com.ar/?utm_source=google&utm_medium=organic&utm_campaign=gmb_listing`

**Categorías sugeridas para GBP** (decidir en Fase 1 con Keyword Research):
- Principal: `Bar de cócteles` o `Bar restaurante` (según volumen de búsqueda confirmado)
- Secundarias: `Restaurante`, `Cervecería`, `Lugar para eventos`, `Servicio de entrega de comida`

**Delivery en GBP:** activar el atributo "Entrega a domicilio" y linkear las plataformas (Rappi / PedidosYa) en la sección de servicios del perfil.

---

## 10. HERRAMIENTAS DEL PROYECTO

| Herramienta | Para qué |
|---|---|
| NotebookLM (Gemini) | Cuadernos de investigación — Fase 0 completada |
| Google Keyword Planner | Keyword research |
| Ubersuggest / Answer the Public | Long-tail y competencia |
| Google Search Console | Monitoreo de indexación y posiciones |
| Google Analytics 4 | Análisis de tráfico (con UTM desde GBP) |
| PageSpeed Insights / Lighthouse | Testing de performance |
| Google Rich Results Test | Validación de Schema Markup |
| Colour Contrast Analyser | Verificación de contraste WCAG (mínimo 4.5:1) |
| Local Falcon / Local Viking | Geo-grid tracking de ranking en Maps |
| Whitespark / BrightLocal | Auditoría NAP y citaciones |
| Vercel | Deploy y hosting |
| Antigravity + Claude Code | Desarrollo de la web |

---

## 11. LO QUE NO SE HACE (PROHIBICIONES DURAS)

Estas prácticas activan penalizaciones, suspensiones o invisibilidad directa:

- ❌ Menú como imagen JPG, PNG o PDF
- ❌ `loading="lazy"` en la imagen LCP
- ❌ Saltar niveles de encabezados (H2 → H4)
- ❌ Más de un `<h1>` por página
- ❌ Keyword stuffing en el nombre de GBP
- ❌ NAP inconsistente entre plataformas
- ❌ Bloquear GPTBot, PerplexityBot o ClaudeBot en robots.txt
- ❌ Frameworks monolíticos con hidratación innecesaria
- ❌ Imágenes sin atributos `width` y `height` explícitos
- ❌ Más de 30 días sin actividad en GBP (tasa de decaimiento algorítmica)
- ❌ Reseñas desde la misma IP (detección de spam de Google)

---

## 12. PRÓXIMO PROYECTO (CONTEXTO FUTURO)

Una vez terminado Caudillo Bar, el mismo proceso se replicará para:
- **Estudio de grabación y salas de ensayo** — también de Mateo y socios
- Mismo enfoque: web desde cero + SEO + GBP + GEO

Este archivo `CONTEXT.md` se adaptará para ese proyecto con los datos del nuevo cliente.

## 13. REGLAS DE PERSISTENCIA Y DOCUMENTACIÓN
- **Ubicación de Documentos:** Todos los documentos estratégicos, informes e investigaciones deben guardarse en el directorio `/DOCS_ESTRATEGIA` del proyecto.
- **Nomenclatura:** Los archivos deben prefijarse con la fase correspondiente (ej: `FASE1_1_nombre.md`).
- **Resumen de Progreso:** Al finalizar cada sesión de trabajo significativa, se debe actualizar el archivo `RESUMEN_EJECUTIVO_PROGRESO.md` para asegurar la continuidad entre diferentes agentes/sesiones.
- **Consistencia:** No fragmentar la información en archivos temporales; consolidar siempre en la estructura del proyecto.

---
*Generado en Claude.ai — Proyecto Caudillo Bar Web + SEO | Freelance: Fede | Marzo 2026*
*Para usar con Claude Code o Gemini dentro de Antigravity*
