---
id: intro
title: Resumen del Proyecto
sidebar_position: 1
---

# Visit Bogotá — App Oficial de Turismo

**Visit Bogotá** es la aplicación móvil oficial de turismo de Bogotá D.C. Permite a visitantes y locales explorar atracciones turísticas, eventos, rutas, planes, hoteles, restaurantes y audioguías de la ciudad.

## Ficha técnica

| Campo | Valor |
|---|---|
| Nombre en tiendas | Visit Bogotá |
| Versión | 4.0.1 (build 181 Android / build 2 iOS) |
| Bundle ID iOS | `com.servinf.idtturismo` |
| Package Android | `com.servinf.test.bogotadctravel` |
| Scheme de deep link | `com.idt.bogota-app` |
| EAS Project ID | _(interno — ver `eas.json`)_ |
| Stack | React Native 0.83.6 + Expo 55 + Expo Router |
| Orientación | Portrait (solo vertical) |

:::tip 🎬 Video sugerido — Recorrido general de la app

**Qué grabar:** Abrir la app en un dispositivo real, mostrar las 5 tabs (Inicio, Descubre, Audioguías, Hoteles, Restaurantes), entrar al detalle de un atractivo, reproducir una audioguía y abrir el itinerario.

**Duración sugerida:** 3-5 min  
**Herramienta recomendada:** Grabación de pantalla del dispositivo (iOS/Android nativo)

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o un embed de Loom cuando esté disponible._
:::

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework móvil | React Native 0.83.6 |
| SDK | Expo 55 |
| Navegación | Expo Router (file-based) |
| Estado global | Redux Toolkit 2.x |
| Audio | expo-audio v55 |
| Fuentes | MuseoSans (100/500/700/900) |
| i18n | i18n-js + locales JSON |
| Animaciones | Reanimated 4.2.1 + Moti |
| Build/Deploy | EAS Build |
