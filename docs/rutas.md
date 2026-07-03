---
id: rutas
title: Rutas (Expo Router)
sidebar_position: 4
---

# Estructura de Rutas (Expo Router)

Expo Router usa el sistema de archivos como fuente de verdad para la navegación.

## Tab bar — 5 tabs visibles

| Tab | Archivo | Descripción |
|---|---|---|
| Inicio | `(tabs)/index.js` | Pantalla principal con contenido destacado |
| Descubre | `(tabs)/descubre.js` | Enlace externo al portal web |
| Audioguías | `(tabs)/audioguias/index.js` | Listado de audioguías |
| Hoteles | `(tabs)/hoteles/index.js` | Listado de hoteles |
| Restaurantes | `(tabs)/restaurantes/index.js` | Listado de restaurantes |

## Pantallas de detalle (`href: null`)

Registradas en el tab layout pero sin tab visible — se acceden por navegación programática:

| Ruta | Descripción |
|---|---|
| `atractivos/[id]` | Detalle de atractivo turístico |
| `audioguias/[id]` | Detalle de audioguía con reproductor |
| `blog/[id]` | Artículo de blog |
| `events/[id]` | Detalle de evento |
| `hoteles/[id]` | Detalle de hotel |
| `planes/[id]` | Detalle de plan/oferta |
| `rutas/[id]` | Detalle de ruta/itinerario |
| `restaurantes/[id]` | Detalle de restaurante |
| `search` | Búsqueda global |
| `info/` | Información general |
| `modelos/` | Modelos/plantillas |
| `politics/` | Políticas de la app |

:::tip 🎬 Video sugerido — Navegación y estructura de pantallas

**Qué grabar:** Recorrer los 5 tabs del tab bar, navegar al detalle de un atractivo y de un evento (pantallas con `href: null`), mostrar el drawer lateral y el buscador global.

**Duración sugerida:** 2-3 min  
**Herramienta recomendada:** Grabación de pantalla del dispositivo

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## Layouts clave

### `app/_layout.js` — Root Layout
- Carga fuentes MuseoSans (100, 500, 700, 900)
- Solicita permisos de ubicación (`expo-location`)
- Suscribe a actualizaciones OTA (`expo-updates`)
- Renderiza `UpdateBanner`, `MiniPlayer`, `OfflineBanner`

### `app/(tabs)/_layout.js` — Tab Bar
Tab bar completamente personalizado con animaciones. Renderiza también `Header` y `GlobalDrawer`.
