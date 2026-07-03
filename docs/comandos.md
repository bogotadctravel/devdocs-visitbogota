---
id: comandos
title: Comandos de Desarrollo
sidebar_position: 13
---

# Comandos de Desarrollo

## Desarrollo local

```bash
# Iniciar servidor Metro (Expo dev server)
npm start

# Correr en Android (requiere dispositivo o emulador)
npm run android

# Correr en iOS (requiere Mac + Xcode + simulador)
npm run ios

# Correr en navegador web
npm run web
```

## Verificación de tipos

```bash
# TypeScript — sin emitir archivos
npx tsc --noEmit
```

## EAS Build

```bash
# Build de preview (APK para Android)
eas build --platform android --profile preview

# Build de producción
eas build --platform all --profile production

# Actualización OTA (sin nuevo build)
eas update --branch production --message "Fix: descripción"
```

:::note
No hay scripts de lint ni test configurados en este proyecto.
:::

## Limpieza

```bash
# Limpiar caché de Metro
npx expo start --clear

# Limpiar node_modules y reinstalar
rm -rf node_modules && npm install
```
