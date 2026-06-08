# Pax CP — UI/UX Pro Max (marketplace de Claude Code)

Marketplace de plugins de Claude Code de Pax CP. Contiene el plugin **`ui-ux-pro-max`**, que agrupa 7 skills de diseño UI/UX.

## Skills incluidas en el plugin

| Skill | Para qué |
|---|---|
| `ui-ux-pro-max` | Base de datos de diseño: 50+ estilos, 161 paletas, 57 pares de fuentes, 99 guías UX, 25 charts, 10+ stacks |
| `ckm:design` | Logos, iconos, CIP/mockups, banners, fotos sociales |
| `ckm:brand` | Identidad de marca, voz, guías de estilo |
| `ckm:design-system` | Tokens de diseño, specs de componentes |
| `ckm:slides` | Presentaciones HTML con Chart.js |
| `ckm:ui-styling` | shadcn/ui + Tailwind, componentes accesibles |
| `ckm:banner-design` | Banners para redes/ads/web/print |

## Cómo lo instala tu equipo

1. Agregar el marketplace (desde el repo git donde subas esta carpeta):
   ```
   /plugin marketplace add <owner>/<repo>
   ```
2. Instalar el plugin:
   ```
   /plugin install ui-ux-pro-max@paxcp-design-tools
   ```

## Requisitos para generar imágenes (Nano Banana)

La generación de imágenes (logos, iconos, mockups) usa **Google Nano Banana** (Gemini). Cada miembro necesita:

- `pip install google-genai`
- Variable de entorno `GEMINI_API_KEY` (obtenida en Google AI Studio):
  ```powershell
  setx GEMINI_API_KEY "tu-api-key"
  ```

El resto de las skills (razonamiento, copy, código, tokens) las ejecuta Claude y no requieren API key extra.

## Estructura

```
.claude-plugin/marketplace.json     ← manifiesto del marketplace
plugins/ui-ux-pro-max/
  .claude-plugin/plugin.json        ← manifiesto del plugin
  skills/                           ← las 7 skills
```

Skills originales: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT).
