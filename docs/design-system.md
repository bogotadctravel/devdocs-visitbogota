---
id: design-system
title: Sistema de Diseño
sidebar_position: 11
---

# Sistema de Diseño

## Colores

| Token | Valor hex | Uso |
|---|---|---|
| Primary blue | `#35498e` | CTAs, estados activos, íconos |
| Navy dark | `#314059` | Header top-bar |
| Accent blue | `#3f89de` | Links, hover states |
| Gold | `#FAC533` | Badges, botón play, highlights |
| Background | `#f8f9fc` | Fondo de pantallas |
| Dark text | `#1a1a2e` | Texto principal |
| Muted | `#aaa` | Texto secundario, placeholders |
| Chip active bg | `#eef1fb` | Fondo de filtros activos |

:::caution Nombre engañoso en código
`Colors.orange` exporta el azul primario `#35498e`. El nombre no debe cambiarse ya que está referenciado en toda la app.
:::

## Tipografía

Familia **MuseoSans** (cargada con `expo-font`):

| Peso | Font name | Uso |
|---|---|---|
| 900 | `MuseoSans_900` | Hero titles, headers grandes |
| 700 | `MuseoSans_700` | Headings, títulos de cards |
| 500 | `MuseoSans_500` | Cuerpo de texto |
| 100 | `MuseoSans_100` | Labels, captions, metadata |

## Sombra de cards

```js
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.09,
shadowRadius: 10,
elevation: 5,
borderRadius: 20,
```

## Overlay de imágenes

```js
// LinearGradient siempre de transparente a negro
colors={["transparent", "rgba(0,0,0,0.72)"]}
```

## Layout estándar

| Patrón | Valor |
|---|---|
| Screen padding horizontal | `18` |
| Cards full-width | `windowWidth - 36` |
| Grid 2 columnas | `(windowWidth - 40 - GAP) / 2` |
| Cards lista horizontal | `windowWidth * 0.68` |
| Bottom padding (MiniPlayer clearance) | `100` |

## Animación de press

```js
// Al presionar — escala hacia abajo
Animated.spring(scale, {
  toValue: 0.97,
  useNativeDriver: true,
}).start()

// Al soltar — vuelve a escala 1
Animated.spring(scale, {
  toValue: 1,
  useNativeDriver: true,
}).start()
```

## Patrón de gradiente de fondo (planifica)

```js
// Usado en secciones destacadas
background: linear-gradient(180deg, #254681 0%, #3f89de 100%)
```
