---
id: permisos
title: Permisos
sidebar_position: 14
---

# Permisos de la Aplicación

## Android (`app.json` → `android.permissions`)

| Permiso | Motivo |
|---|---|
| `ACCESS_FINE_LOCATION` | Ubicación precisa GPS |
| `ACCESS_COARSE_LOCATION` | Ubicación aproximada de red |
| `FOREGROUND_SERVICE` | Reproducción de audio en foreground |
| `RECORD_AUDIO` | Requerido por expo-audio |
| `MODIFY_AUDIO_SETTINGS` | Requerido por expo-audio |

## iOS (`Info.plist` / permisos Expo)

| Permiso | Mensaje mostrado al usuario |
|---|---|
| Ubicación (siempre) | "Permite a Visit Bogotá usar tu ubicación para mostrarte atractivos turísticos cercanos..." |
| Ubicación (en uso) | Mismo mensaje |
| Micrófono | "Allow Visit Bogotá to access your microphone." |

## Solicitud de permisos en código

```js
// Ubicación — se solicita en app/_layout.js al iniciar
import * as Location from 'expo-location'

const { status } = await Location.requestForegroundPermissionsAsync()
if (status === 'granted') {
  const loc = await Location.getCurrentPositionAsync({})
  dispatch(setLocation(loc.coords))
}
```

---

*Generado 2026-06-28 · Visit Bogotá v4.0.1 · React Native 0.83.6 + Expo 55*
