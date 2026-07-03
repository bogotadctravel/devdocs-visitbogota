---
id: arquitectura
title: Arquitectura General
sidebar_position: 3
---

# Arquitectura General

## Estructura de directorios

```
app-visitbogota/
├── app/                    # Pantallas y layouts (Expo Router)
│   ├── _layout.js          # Root layout (providers + banners)
│   ├── index.js            # Bootstrap / carga inicial
│   ├── login.js            # Pantalla de login
│   ├── +not-found.js       # Pantalla 404
│   └── (tabs)/             # Navegación por tabs
│       ├── _layout.js      # Tab bar personalizado animado
│       ├── index.js        # Home
│       ├── atractivos/     # Atracciones turísticas
│       ├── audioguias/     # Audioguías
│       ├── blog/           # Blog
│       ├── events/         # Eventos
│       ├── hoteles/        # Hoteles
│       ├── planes/         # Planes y ofertas
│       ├── restaurantes/   # Restaurantes
│       ├── rutas/          # Rutas e itinerarios
│       ├── info/           # Información general
│       ├── modelos/        # Modelos/templates
│       ├── politics/       # Políticas
│       └── search.js       # Búsqueda global
├── src/
│   ├── api/
│   │   └── imperdibles.js  # Todas las llamadas a la API
│   ├── components/         # Componentes reutilizables UI
│   ├── constants/          # Colores, dimensiones
│   ├── context/
│   │   ├── AudioContext.js # Motor de audio (expo-audio v55)
│   │   └── DrawerContext.js# Estado del drawer lateral
│   ├── features/
│   │   └── itinerary/      # Feature completa de itinerario
│   ├── store/              # Redux store + slices + thunks
│   └── utils/
│       └── openLink.js     # Abrir URLs / tel / email
├── locales/                # Traducciones JSON (es, en, fr, pt)
└── assets/                 # Imágenes, fuentes, íconos estáticos
```

## Flujo de datos

```
Pantalla → dispatch(thunkAction) → API (fetchBogotaDrplV2)
                                 ↓
                          Redux slice actualiza state
                                 ↓
Pantalla ← useSelector(selector) ← Redux store
```

## Árbol de providers (`app/_layout.js`)

```jsx
<ErrorBoundary>
  <SafeAreaProvider>
    <Provider store={store}>        {/* Redux */}
      <AudioProvider>              {/* expo-audio engine */}
        <DrawerProvider>           {/* drawer lateral */}
          <Stack>
            <UpdateBanner />       {/* OTA updates */}
            <MiniPlayer />         {/* reproductor flotante */}
            <OfflineBanner />      {/* sin conexión */}
          </Stack>
        </DrawerProvider>
      </AudioProvider>
    </Provider>
  </SafeAreaProvider>
</ErrorBoundary>
```

:::note
`MiniPlayer` aparece sobre cualquier pantalla cuando hay audio activo. Requiere `paddingBottom: 100` en todas las listas/scroll para no quedar cubierto.
:::
