---
id: itinerario
title: "Feature: Itinerario"
sidebar_position: 9
---

# Feature: Itinerario

**Directorio:** `src/features/itinerary/`

Feature completa para que el usuario planifique, guarde, descargue y comparta itinerarios de visita.

:::tip 🎬 Video sugerido — Flujo completo del itinerario

**Qué grabar:** Guardar un atractivo como favorito → abrir la pantalla de itinerario → agregar un evento y una ruta → completar el formulario de descarga (nombre, email, teléfono) → generar y compartir el PDF.

**Duración sugerida:** 3-4 min  
**Herramienta recomendada:** Grabación de pantalla del dispositivo

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## Hooks

### `useFavorites.js`

Gestión de favoritos con persistencia en `AsyncStorage`.

```js
const { favorites, toggle, isFav, clear, loaded } = useFavorites()
```

| Retorno | Tipo | Descripción |
|---|---|---|
| `favorites` | `array` | Items guardados |
| `toggle(item)` | `function` | Agrega o quita un item |
| `isFav(id)` | `boolean` | ¿Está guardado? |
| `clear()` | `function` | Borra todos los favoritos |
| `loaded` | `boolean` | ¿Cargó desde AsyncStorage? |

### `useItineraryData.js`
Fetch y gestión de los datos del itinerario activo.

### `useGeneratePDF.js`
Genera un PDF del itinerario usando `expo-print` y lo comparte con `expo-sharing`.

---

## Componentes

| Componente | Descripción |
|---|---|
| `DownloadSheet.js` | Formulario (nombre, email, teléfono) antes de descargar. Incluye validación. |
| `ItineraryAttractionCard.js` | Card de atractivo dentro del itinerario |
| `ItineraryEventCard.js` | Card de evento dentro del itinerario |
| `ItineraryRouteCard.js` | Card de ruta dentro del itinerario |
| `ItinerarySkeleton.js` | Skeleton de carga |
| `EmptyState.js` | UI de estado vacío cuando no hay items |
| `SectionHeader.js` | Encabezado de sección con badge de conteo |

---

## Utilidades

### `mappers.js`

| Función | Descripción |
|---|---|
| `formatDateES(dateStr)` | Fecha en formato largo en español |
| `formatDateShort(dateStr)` | Fecha en formato corto |
| `mapPlace(item)` | Transforma respuesta API de atractivo al modelo del itinerario |
| `mapEvent(item)` | Transforma respuesta API de evento |
| `mapRoute(item)` | Transforma respuesta API de ruta |
| `buildAutoMessage({...})` | Genera mensaje compartible con resumen del itinerario |

### `pdfService.js`
Genera HTML del itinerario y lo convierte a PDF con `expo-print`. Produce un archivo listo para compartir.

### `homeFormAdapter.js`
Codifica los parámetros del formulario para los endpoints del itinerario en el servidor.
