# PENDIENTES MATEO — Caudillo Bar
> Cosas para resolver con Mateo antes de avanzar con la web.
> Actualizar este archivo cada vez que se identifique un nuevo pendiente.

---

## 🔴 Urgentes

### WhatsApp del bar
- **Estado:** Vacío en toda la web (8 links apuntan a `https://wa.me/` sin número)
- **Acción:** Mateo lo pasa el 30 de Marzo 2026 — habilitaron un número para el bar
- **Impacto:** Sin esto no funcionan los botones de reserva, el Schema `ReserveAction`, ni el CTA flotante
- **Cuando llegue:** buscar `https://wa.me/` en todo el proyecto y reemplazar con `https://wa.me/549XXXXXXXXXX` (ej: `5491112345678`)

---

## 🟠 Importantes

### Google Business Profile (acceso)
- **Estado:** Mateo gestiona el 30/03 — va a intentar agregar a Fede como admin. Si no puede, pasa su mail
- **Impacto:** Sin esto no se puede arrancar Fase 5 (GBP + Local SEO)

### Fotos del local
- **Estado:** Fede las tiene pero necesita descargarlas y renombrarlas
- **Acción:** Sentarse a preparar las fotos con nombres descriptivos (ej: `terraza-pet-friendly-caudillo-bar-saavedra.avif`)
- **Especificaciones técnicas:**
  - Formato final: AVIF (preferido) o WebP — NO subir JPG/PNG sin comprimir
  - Para GBP: relación 4:3, mínimo 1200×900px
  - Conservar coordenadas GPS (geotagging EXIF) de Saavedra
  - Alt text con fórmula: "mejor [plato] en Saavedra, Buenos Aires"
- **Fotos necesarias:**
  - [ ] Interior del local (mencionar el mural de Cándido López — dato de reseñas)
  - [ ] Terraza / patio (mencionada en reseñas como "la joya del barrio")
  - [ ] Barra
  - [ ] Platos: Azurduy, Dorrego, Pastel de Papas con osobuco, Bife de Chorizo, Mollejas, empanadas
  - [ ] Tragos: Ferroviario, Pico y Pala, Negroni
  - [ ] Vinos (botellas destacadas)
  - [ ] Ambiente nocturno / música en vivo
  - [ ] Metegol (mencionado en reseñas — dato de personalidad)
  - [ ] Equipo / Irene y el resto del staff

---

## 🟡 Media prioridad

### PedidosYa
- **Estado:** DESCARTADO por ahora — solo Rappi
- **Link Rappi activo:** https://www.rappi.com.ar/restaurantes/259123-caudillo-bar

### Descripción de items sin descripción
- **Cremoso de Cabutia:** ¿Qué lleva exactamente?
- **Papa Rota a las Tres Cocciones:** ¿Cuáles son las tres cocciones?

### Instagram — sección en la Home
- **Handle confirmado:** [@caudillobar](https://www.instagram.com/caudillobar/)
- **Para más adelante (Fase 4.4):** sección con últimas publicaciones — evaluar API vs embed nativo

---

## 🟢 Datos ya disponibles (NO requieren a Mateo)

### Reseñas reales de Google ✅
- **Archivo:** `CAUDILLO BAR/Reseñas de Caudillo.md`
- **Calificación real:** 4.7 / 5 (165 opiniones) — reemplazar el 4.8 placeholder de la web
- **Link directo para dejar reseña:** disponible en ese archivo
- **Acción pendiente:** actualizar el Schema `aggregateRating` y la sección de reseñas de la Home con datos reales y citas reales de clientes

### Dirección confirmada
- **Av. Crámer 3198** — ya corregida en todos los archivos fuente el 29/03/2026

---

*Última actualización: 29 de Marzo 2026 — Fase 4.3*
