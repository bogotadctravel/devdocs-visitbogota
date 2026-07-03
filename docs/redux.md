---
id: redux
title: Estado Global (Redux)
sidebar_position: 5
---

# Estado Global (Redux Toolkit)

## Store — `src/store/index.js`

```js
configureStore({
  reducer: {
    filters,      // FiltersSlice
    language,     // languageReducer
    events,       // EventsSlice
    hotels,       // HotelsSlice
    restaurants,  // RestaurantsSlice
    planes,       // PlanesSlice
    location,     // LocationSlice
    user,         // UserReducer
    rutas,        // RutasSlice
  }
})
```

## Slices

### `FiltersSlice` — Filtros de atracciones

| Campo | Tipo | Descripción |
|---|---|---|
| `places` | `[]` | Lista de lugares/atracciones |
| `para` | `[]` | Filtros "para quién" |
| `subproductos` | `[]` | Filtros de subtipo de producto |
| `localidades` | `[]` | Filtros por localidad |

### `EventsSlice`

| Campo | Tipo | Descripción |
|---|---|---|
| `eventsList` | `[]` | Lista de eventos |
| `blogsList` | `[]` | Lista de posts de blog |
| `filters` | `[]` | Opciones de filtro activas |
| `filterType` | `string` | Tipo de filtro seleccionado |

### `HotelsSlice` / `RestaurantsSlice` / `PlanesSlice`

Estructura común:

| Campo | Tipo | Descripción |
|---|---|---|
| `*List` | `[]` | Lista principal de items |
| `filters` | `[]` | Opciones de filtro |
| `filterType` | `string` | Tipo de filtro activo |

### `RutasSlice`

| Campo | Tipo | Descripción |
|---|---|---|
| `rutasList` | `[]` | Lista de rutas e itinerarios |

### `LocationSlice`

| Campo | Tipo | Descripción |
|---|---|---|
| `location` | `null \| {coords}` | Ubicación GPS del usuario |

### `UserReducer`

| Campo | Tipo | Descripción |
|---|---|---|
| `user` | `null \| {email, name}` | Usuario autenticado |
| `save_places` | `[]` | Lugares guardados/favoritos |

### `languageReducer`

| Campo | Tipo | Descripción |
|---|---|---|
| `language` | `"es" \| "en" \| "fr" \| "pt"` | Idioma activo |
| `words` | `{}` | Strings de UI desde la API |
| `isInitialized` | `boolean` | ¿Ya cargó el idioma? |

---

## Acciones Thunk — `src/store/actions.js`

| Acción | Parámetros | Descripción |
|---|---|---|
| `fetchData()` | — | Carga lugares, para, subproductos, localidades |
| `fetchPlacesWithFilters()` | `ID, para, subproduct, localidad` | Atracciones filtradas |
| `fetchAllEvents()` | `agenda, zone, category, startdate, enddate` | Eventos con filtros de fecha |
| `fetchAllRutas()` | — | Rutas e itinerarios |
| `fetchAllBlogs()` | — | Posts de blog |
| `fetchAllHoteles()` | — | Hoteles |
| `fetchAllRestaurants()` | `zone` | Restaurantes por zona |
| `fetchAllPLanes()` | — | Planes/ofertas |
| `fetchAllFilters()` | `filters, filterType` | Carga dinámica de filtros |
| `fetchAllWords()` | — | Strings de UI para todos los idiomas |
| `setLanguage()` | `lang` | Cambia idioma activo |
| `setLocation()` | `coords` | Guarda ubicación del usuario |
| `setUser()` | `user` | Guarda usuario autenticado |
| `logOutUser()` | — | Cierra sesión |

## Selectores — `src/store/selectors.js`

Todos memoizados con `createSelector`:

```js
selectPlacesData          // FiltersSlice.places
selectParaData            // FiltersSlice.para
selectSubprodData         // FiltersSlice.subproductos
selectLocalidadesData     // FiltersSlice.localidades
selectEventsData          // EventsSlice.eventsList
selectBlogsData           // EventsSlice.blogsList
selectEventsFilterData    // EventsSlice.filters
selectRutassData          // RutasSlice.rutasList
selectHotelsData          // HotelsSlice.hotelsList
selectHotelsFilterData    // HotelsSlice.filters
selectRestaurantsData     // RestaurantsSlice.restaurantsList
selectPlanesData          // PlanesSlice.planesList
selectActualLanguage      // languageReducer.language
selectWordsLang           // languageReducer.words
selectActualLocation      // LocationSlice.location
selectActualUser          // UserReducer.user
```
