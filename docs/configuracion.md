---
id: configuracion
title: Configuración y Entorno
sidebar_position: 2
---

# Configuración y Entorno

## Variables de entorno

Copiar `.env.example` → `.env`:

```env
EXPO_PUBLIC_API_BASE=https://api.visitbogota.co/es/api/v2
EXPO_PUBLIC_FILES_BASE=https://files.visitbogota.co
EXPO_PUBLIC_SITE_BASE=https://visitbogota.co
```

Accesibles en el cliente con el prefijo `EXPO_PUBLIC_`. Se consumen directamente en `src/api/imperdibles.js`.

## Archivos de configuración raíz

| Archivo | Propósito |
|---|---|
| `app.json` | Configuración Expo: nombre, íconos, plugins, permisos |
| `babel.config.js` | Preset `babel-preset-expo` + plugin `react-native-worklets` (requerido por Reanimated 4) |
| `tsconfig.json` | TypeScript con config mínima; verificar con `npx tsc --noEmit` |
| `eas.json` | Perfiles de build para EAS Build (preview, production) |
| `.env` | Variables de entorno locales — **no commitear** |

## Splash screen e íconos

| Asset | Ruta | Detalle |
|---|---|---|
| Splash | `./assets/splash.png` | Fondo `#35498e` |
| Ícono app | `./assets/icon.png` | — |
| Adaptive icon Android | `./assets/adaptive-icon.png` | Fondo `#35498e` |

:::tip 🎬 Video sugerido — Setup del entorno de desarrollo

**Qué grabar:** Clonar el repositorio, copiar `.env.example` a `.env`, ejecutar `npm install`, correr `npm start` y levantar la app en un emulador o dispositivo físico por primera vez.

**Duración sugerida:** 5-7 min  
**Herramienta recomendada:** Grabación de pantalla del computador (OBS / QuickTime)

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## Flujo de bootstrap

1. `app/index.js` arranca y lee el idioma guardado en `AsyncStorage`
2. Despacha `fetchAllWords()` para cargar strings de UI desde la API
3. Redirige a `/(tabs)` una vez inicializado el state de idioma
