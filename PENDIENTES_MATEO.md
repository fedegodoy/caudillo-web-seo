# PENDIENTES MATEO — Caudillo Bar
> Cosas para resolver con Mateo antes de avanzar con la web.
> Actualizar este archivo cada vez que se identifique un nuevo pendiente.

---

## 🔴 Urgentes

### WhatsApp del bar
- **Estado:** Vacío en toda la web (8 links apuntan a `https://wa.me/` sin número)
- **Acción:** Mateo lo pasa mañana (30 de Marzo 2026) — habilitaron un número para el bar
- **Impacto:** Sin esto no funcionan los botones de reserva, el Schema `ReserveAction`, ni el CTA flotante

---

## 🟠 Importantes

### Fotos del local
- **Estado:** Fede las tiene pero necesita descargarlas y renombrarlas
- **Acción:** Sentarse a preparar las fotos con nombres descriptivos (ej: `terraza-pet-friendly-caudillo-bar-saavedra.avif`)
- **Especificaciones técnicas:**
  - Formato final: AVIF (preferido) o WebP — NO subir JPG/PNG sin comprimir
  - Para GBP: relación 4:3, mínimo 1200×900px
  - Conservar coordenadas GPS (geotagging EXIF) de Saavedra
  - Alt text con fórmula: "mejor [plato] en Saavedra, Buenos Aires"
- **Fotos necesarias:**
  - [ ] Interior del local
  - [ ] Terraza / patio (la joya del bar)
  - [ ] Barra
  - [ ] Platos destacados (plano detalle): Azurduy, Dorrego, Pastel de Papas, Bife de Chorizo, Osobuco, Mollejas
  - [ ] Tragos: Ferroviario, Pico y Pala, Negroni
  - [ ] Vinos (botellas destacadas)
  - [ ] Ambiente nocturno / música en vivo
  - [ ] Equipo / Mateo
- **Nota:** Mientras tanto podemos usar bloques placeholder con el tamaño en píxeles sugerido para ir armando el layout y ver cómo conviene preparar las fotos

### Instagram — sección en la Home
- **Handle confirmado:** [@caudillobar](https://www.instagram.com/caudillobar/)
- **Acción futuro (Fase 4.3+):** agregar una sección en la home que muestre las últimas publicaciones e incentive a seguir la cuenta
- **Requiere:** evaluar cómo hacer el embed (API de Instagram o embed nativo) sin afectar performance

---

## 🟡 Media prioridad

### PedidosYa
- **Estado:** DESCARTADO por ahora
- **Solo Rappi:** https://www.rappi.com.ar/restaurantes/259123-caudillo-bar
- **Acción:** Actualizar el link de Rappi en toda la web (actualmente apunta a `https://www.rappi.com.ar/` genérico o `#`)
- **Si en el futuro se activa PedidosYa:** agregarlo a la página de delivery y al Schema `OrderAction`

### Descripción de items sin descripción
- **Cremoso de Cabutia:** ¿Qué lleva exactamente? (en el JSON tiene descripción vacía)
- **Papa Rota a las Tres Cocciones:** ¿Cuáles son las tres cocciones? (en el JSON tiene descripción vacía)

---

## 🟢 Para más adelante (Fases 5–7)

### Google Business Profile (Fase 5)
- [ ] Reclamar o crear el perfil con cuenta oficial del negocio
- [ ] Mateo va a intentar poner a Fede como admin del GBP. Si no puede, pasa su mail (30 de Marzo 2026)
- [ ] Completar TODOS los atributos: patio, pet-friendly, música en vivo, delivery, Wi-Fi, etc.

### Google Reviews (Fase 5)
- [ ] Calificación real para el Schema `aggregateRating` (actualmente el widget dice 4.8 pero es placeholder)
- [ ] Estrategia de Review Velocity: QR en recibos + seguimiento por WhatsApp

### Tour Virtual 360º (Fase 5)
- [ ] Para GBP — aumenta el tiempo de permanencia en el perfil

---

*Última actualización: 29 de Marzo 2026 — Fase 4.2*
