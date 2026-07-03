---
id: componentes
title: Componentes UI
sidebar_position: 8
---

# Componentes UI

**Directorio:** `src/components/`

:::tip 🎬 Video sugerido — Showcase de componentes en la app

**Qué grabar:** Mostrar en el dispositivo los componentes globales en acción: abrir el `GlobalDrawer`, disparar el `MiniPlayer` reproduciendo una audioguía, activar el `OfflineBanner` desconectando el WiFi, y mostrar el `UpdateBanner` si hay una actualización OTA disponible.

**Duración sugerida:** 3-4 min  
**Herramienta recomendada:** Grabación de pantalla del dispositivo

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## Layout y Navegación

### `Header.js`
Header global. Muestra logo, botón de drawer y botón de regreso. Renderizado desde `(tabs)/_layout.js`.

### `GlobalDrawer.js`
Drawer lateral de navegación. Controlado por `DrawerContext`. Contiene links principales y selector de idioma.

### `MiniPlayer.js`
Reproductor flotante de audio en la parte inferior. Aparece cuando `nowPlaying !== null`. Incluye opción de descarga del archivo.

### `UpdateBanner.js`
Aparece cuando hay una actualización OTA disponible (`expo-updates`). Muestra un botón para recargar.

### `OfflineBanner.js`
Banner cuando el dispositivo pierde conectividad.

---

## Carga y Skeleton

### `Skeleton.js`
Placeholder animado (opacidad 0.35 → 0.9 en loop). **Usar siempre durante fetch de datos.**

```jsx
<Skeleton width={200} height={20} borderRadius={8} />
<Skeleton width="100%" height={160} borderRadius={16} />
```

### `SkeletonCard.js`
Variante de `Skeleton` con forma de card completa.

### `PreloaderComponent.js`
Spinner de carga genérico para transiciones de pantalla.

---

## Imágenes

### `LazyImage.js`
Imagen con fade-in (opacidad 0 → 1 en 280 ms). **Obligatorio para todas las imágenes remotas.**

```jsx
<LazyImage
  source={{ uri: `${IMG_BASE}${item.image}` }}
  style={{ width: '100%', height: 220 }}
  resizeMode="cover"
/>
```

---

## Cards de contenido

| Componente | Uso |
|---|---|
| `CardAtractivo.js` | Atractivo turístico — horizontal o vertical con overlay de gradiente |
| `CardAtractivoBig.js` | Hero card de atractivo (ancho completo) |
| `CardAudioguide.js` | Card de audioguía con indicador de duración |
| `CardBlog.js` | Card de post de blog |
| `CardEventos.js` | Card de evento compacta |
| `CardEventosBig.js` | Card de evento grande para carousels |
| `CardRuta.js` | Card de ruta/itinerario |
| `CardInfo.js` | Card de información general |
| `EventCard.js` | Variante adicional de card de evento |

---

## Reproductores

### `AudioPlayer.js`
Controles completos: play/pause, skip, barra de progreso con slider, lista de tracks. Consume `useAudioContext()`.

### `VideoPlayer.js`
Reproductor de video basado en `expo-video`.

---

## Utilidades

| Componente | Descripción |
|---|---|
| `ComoLlegar.js` | CTA para abrir Google Maps / Apple Maps |
| `ReadMoreText.js` | Texto colapsable con "Leer más / Leer menos" |
| `Accordion.js` | Acordeón colapsable — contenido tipo FAQ |
| `CustomCheckbox.js` | Checkbox con estilos del design system |
| `Switch.js` | Toggle switch personalizado |
| `HorizontalFlatListWithRows.js` | Lista horizontal con soporte de múltiples filas |
| `ErrorBoundary.js` | React Error Boundary — evita crashes de pantalla |
| `IconSvg.js` | Renderizador de íconos SVG (`react-native-svg`) |
