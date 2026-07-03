---
id: dependencias
title: Dependencias Clave
sidebar_position: 12
---

# Dependencias Clave

## Core

| Paquete | Versión | Uso |
|---|---|---|
| `react` | 19.2.0 | — |
| `react-native` | 0.83.6 | Framework móvil |
| `expo` | ~55.0.26 | SDK principal |
| `expo-router` | ~55.0.16 | Navegación file-based |

## Estado y Datos

| Paquete | Versión | Uso |
|---|---|---|
| `@reduxjs/toolkit` | ^2.11.2 | State management |
| `react-redux` | 9.2.0 | Binding Redux-React |
| `@react-native-async-storage/async-storage` | 2.2.0 | Persistencia local |

## Media

| Paquete | Versión | Uso |
|---|---|---|
| `expo-audio` | ~55.0.14 | Reproducción de audio |
| `expo-video` | ~55.0.17 | Reproducción de video |
| `expo-print` | ~55.0.15 | Generación de PDF |
| `expo-sharing` | ~55.0.20 | Compartir archivos |
| `expo-file-system` | ~55.0.22 | Descarga de archivos |

## Animaciones y UI

| Paquete | Versión | Uso |
|---|---|---|
| `react-native-reanimated` | 4.2.1 | Animaciones avanzadas |
| `react-native-worklets` | 0.7.4 | Plugin requerido por Reanimated 4 |
| `moti` | ^0.26.0 | Animaciones declarativas sobre Reanimated |
| `react-native-reanimated-carousel` | ^4.0.2 | Carousels |
| `react-native-gesture-handler` | ~2.30.0 | Gestos táctiles |
| `expo-linear-gradient` | ~55.0.14 | Gradientes |
| `react-native-svg` | 15.15.3 | SVG |

## Navegación y Plataforma

| Paquete | Versión | Uso |
|---|---|---|
| `expo-location` | ~55.1.10 | GPS del usuario |
| `expo-updates` | ~55.0.24 | Actualizaciones OTA |
| `expo-web-browser` | ~55.0.16 | Abrir URLs externas |
| `react-native-webview` | 13.16.0 | Web embebido |
| `react-native-render-html` | ^6.3.4 | Renderizar HTML en nativo |

## Formularios e Inputs

| Paquete | Versión | Uso |
|---|---|---|
| `@react-native-community/slider` | 5.1.2 | Slider de audio |
| `@react-native-community/datetimepicker` | 8.6.0 | Selector de fecha |

## i18n

| Paquete | Versión | Uso |
|---|---|---|
| `i18n-js` | ^4.3.2 | Internacionalización |

## Dev

| Paquete | Versión | Uso |
|---|---|---|
| `typescript` | ~5.9.2 | Type checking |
| `@babel/core` | ^7.24.0 | Transpilación |
| `expo-dev-client` | ~55.0.35 | Build de desarrollo con módulos nativos |

:::note Regla de dependencias
No agregar paquetes nuevos sin discutirlo primero. Resolver con las dependencias existentes siempre que sea posible.
:::
