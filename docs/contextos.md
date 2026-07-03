---
id: contextos
title: Contextos React
sidebar_position: 7
---

# Contextos React

## AudioContext — `src/context/AudioContext.js`

Motor de reproducción basado en `expo-audio` v55. Usa `createAudioPlayer` en un `useRef` y un `setInterval` de 500ms para leer `nowPlayingRef.current`, evitando closures obsoletos.

**Provider:** `<AudioProvider>` — en el root layout  
**Hook:** `useAudioContext()`

### Estado expuesto

| Campo | Tipo | Descripción |
|---|---|---|
| `nowPlaying` | `object \| null` | Track activo: `{ title, subtitle, image, audios[], activeIndex }` |
| `status.isPlaying` | `boolean` | ¿Reproduciendo? |
| `status.position` | `number` | Posición en segundos |
| `status.duration` | `number` | Duración total en segundos |

### Métodos

| Método | Parámetros | Descripción |
|---|---|---|
| `loadAndPlay(audios, index, meta)` | `array, número, metadata` | Carga lista y reproduce desde índice |
| `changeTrack(index)` | `número` | Salta a otro track de la lista |
| `pause()` | — | Pausa |
| `resume()` | — | Reanuda |
| `seek(val)` | `segundos` | Salta a posición específica |
| `skipBack()` | — | Retrocede 10 s |
| `skipForward()` | — | Avanza 10 s |
| `stop()` | — | Detiene y limpia state |

### Ejemplo de uso

```js
const { nowPlaying, status, loadAndPlay, pause, resume } = useAudioContext()

// Reproducir una audioguía
loadAndPlay(guia.audios, 0, {
  title: guia.title,
  subtitle: guia.subtitle,
  image: `${IMG_BASE}${guia.image}`,
})
```

---

## DrawerContext — `src/context/DrawerContext.js`

Estado simple para abrir/cerrar el drawer lateral de navegación.

**Provider:** `<DrawerProvider>` — en el root layout  
**Hook:** `useDrawer()`

| Campo / Método | Tipo | Descripción |
|---|---|---|
| `isOpen` | `boolean` | Estado actual del drawer |
| `openDrawer()` | `function` | Abre el drawer |
| `closeDrawer()` | `function` | Cierra el drawer |
