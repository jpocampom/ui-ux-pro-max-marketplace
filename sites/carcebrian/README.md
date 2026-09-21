# Carlota Cebrián · Método CAR — landing

Landing estática (HTML + CSS + JS, sin build) en **español, inglés e italiano** para vender la dirección estética de Carlota Cebrián: Método CAR (Estilizar · Reamueblar · Diseñar) y proyectos integrales a medida (Renacer). Incluye cuestionario previo con recomendación de servicio y Calendly embebido con las respuestas prellenadas.

## Estructura

```
sites/carcebrian/
  index.html   ← marcado y sprite SVG de iconos
  styles.css   ← tokens de color/tipografía del deck 2026, layout responsive
  i18n.js      ← todos los textos en es / en / it (misma estructura de claves)
  app.js       ← render de secciones, precios dinámicos, quiz, Calendly, idioma
  assets/      ← imágenes extraídas de la presentación "Dirección Estética CAR 2026"
```

## Antes de publicar (bloque `CONFIG` en `app.js`)

| Clave | Qué poner |
|---|---|
| `calendlyUrl` | URL real del evento de Calendly (hoy es un placeholder). |
| `socials` | Instagram y TikTok ya apuntan a `@car.cebrian`; el tercer canal está oculto (`url: null`) hasta confirmar plataforma y URL. |
| `email` | `info.carcebrian@gmail.com` (del deck). |

Prefill de Calendly: el quiz envía `a1…a5` con las etiquetas **en español** del formulario actual de Calendly (punto de la vivienda, estancias, necesidad, nivel de ayuda, inversión). Si cambia el orden o el texto de las preguntas en Calendly, ajustar `CALENDLY_LABELS` en `app.js`.

## Precios (solo "desde")

| Servicio | En la web |
|---|---|
| Estilizar | desde 350 € |
| Reamueblar | desde 1.125 € (Estilizar incluido) |
| Diseñar | desde 1.950 € (Estilizar incluido) |
| Renacer / proyectos integrales | Presupuesto a medida, según necesidad específica y lugar de residencia |

En toda la página: primera sesión gratis, coste mínimo si se avanza 350 €, precio final según las necesidades del proyecto. No se muestran tramos por estancias ni plazos. Editar en `PRICING` (`app.js`).

## Flujo de conversión

Cuestionario (5 preguntas) → recomendación de servicio con su "desde" → se abre automáticamente el calendario de Calendly embebido con las respuestas prellenadas y la página se desplaza a la reserva. También se puede abrir Calendly sin hacer el cuestionario ("Ver disponibilidad").

## Idiomas

Selector ES/EN/IT en la cabecera. Orden de detección: `?lang=` → `localStorage` → idioma del navegador → `es`. Cada idioma es una URL compartible (`?lang=it`).

## Despliegue

Carpeta estática: sirve tal cual en Vercel, Netlify, GitHub Pages o cualquier hosting. Sin dependencias ni paso de build. Fuentes vía Google Fonts; Calendly se carga solo cuando el usuario pulsa "Ver disponibilidad" o termina el cuestionario.

## Comprobación local

```
cd sites/carcebrian && python3 -m http.server 8765
# http://127.0.0.1:8765/index.html?lang=es
```
