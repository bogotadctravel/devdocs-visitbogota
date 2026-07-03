---
id: api
title: Capa API
sidebar_position: 6
---

# Capa API

**Archivo principal:** `src/api/imperdibles.js`

## URLs base

| Constante | URL |
|---|---|
| `EXPO_PUBLIC_SITE_BASE` | `https://visitbogota.co` |
| `EXPO_PUBLIC_API_BASE` | `https://api.visitbogota.co/es/api/v2` |
| `IMG_BASE` | `https://files.visitbogota.co` |

## Funciones de fetch

### `fetchBogotaDrplV2(endpoint, language, queryParams)` — Principal

```js
// Ejemplo de uso
const data = await fetchBogotaDrplV2('/atractivos', 'es', { localidad: 5 })
// → GET https://api.visitbogota.co/es/api/v2/atractivos?localidad=5&_format=json&langcode=es
```

### `fetchBogotaDrplV3(endpoint, language, queryParams)`
Variante que apunta a `/es/api/v3`.

### `fetchBogota(endpoint)` — Legado
Fetch al endpoint `/ce` de visitbogota.co.

### `fetchBogotaDrpl(endpoint)` — Legado
Fetch a la API v1.

### `fetchBogotaGetFolder(endpoint)`
Fetch genérico a `EXPO_PUBLIC_SITE_BASE`.

### `postData(url, data)`
POST a `files.visitbogota.co`. Envía `data` como JSON.

## Utilidades de formato

| Función | Firma | Descripción |
|---|---|---|
| `number_format` | `(n, dec, decPt, thousandSep)` | Formato numérico estilo PHP |
| `truncateString` | `(str, maxLength)` | Trunca con "..." |
| `convertTime` | `(minutes)` | Minutos → `MM:SS` |
| `formattedTime` | `(seconds)` | Segundos → `MM:SS` |

## Constante de imágenes

```js
export const IMG_BASE = "https://files.visitbogota.co"

// Uso en componentes:
<LazyImage source={{ uri: `${IMG_BASE}${item.image}` }} />
```

:::caution
Siempre usar `LazyImage` para imágenes remotas, nunca `<Image>` directo. Ver [Componentes UI](/componentes).
:::
