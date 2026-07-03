---
id: web-tipos-de-contenido
sidebar_position: 4
---

# Tipos de contenido y custom fields

## 5.1 Reglas editoriales comunes

- Todos los tipos de contenido inventariados están activos.
- La estructura se basa en campos fijos.
- Todos crean una nueva revisión por defecto.
- No hay un flujo de moderación formal; la publicación depende de los permisos del usuario.
- Se debe registrar un mensaje de revisión claro en cada cambio relevante para conservar trazabilidad.
- Los contenidos traducibles se administran en español e inglés.
- Los recursos se gestionan mediante la Biblioteca de medios.

> El inventario no incluye cardinalidad, configuración de widgets, formatters, restricciones de extensiones ni vocabulario destino de cada referencia. Esos datos se completan exportando la configuración de Drupal con `drush cex` y revisando los archivos `.yml` de cada campo.

## 5.2 Tipos de medio

| Tipo de medio | Propósito |
|---|---|
| Documento | Documentos administrados y reutilizables. |
| Imagen | Imágenes editoriales, portadas, galerías, banners e iconografía. |
| Audio | Audioguías y reseñas de audio. |
| Video local | Archivos de video alojados y administrados por Drupal. |
| Archivo descargable | Recursos destinados a descarga por el usuario. |

## 5.3 Vocabularios de taxonomía activos

- Categoria viajero
- Categorías Gastronómicas
- Categoría Stop Over
- Categorías turísticas
- Duración
- Etiquetas
- Idiomas servicio establecimientos
- Localidades
- Rango de precios hoteles
- Rangos de precios
- Recomendaciones
- Secciones Banners
- Servicios de Accesibilidad
- Servicios hoteles
- Subcategorías de Venue
- Subcategorías turísticas
- Tipo de Venue
- Tipos de Alojamiento
- Tipos de evento
- Tipos de evento MICE
- Tipos de habitación
- Tipos de montaje para venues
- Tipos de Proveedor MICE
- Zonas de la ciudad
- Zonas Gastronómicas

Las referencias más recurrentes relacionan contenidos con categorías y subcategorías turísticas, recomendaciones, localidades, zonas, servicios de accesibilidad, idiomas, tipos de alojamiento, clasificaciones gastronómicas y entidades MICE.

:::tip 🎬 Video sugerido — Flujo de creación de contenido en Drupal

**Qué grabar:** Desde el panel de administración: crear un nodo de tipo **Atractivo**, completar campos obligatorios (título, cuerpo, imagen, coordenadas, categoría), agregar traducción al inglés, guardar una revisión con mensaje descriptivo y publicar. Mostrar también cómo se ve en el portal público.

**Duración sugerida:** 5-7 min  
**Herramienta recomendada:** Grabación de pantalla del computador (OBS / QuickTime)

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## 5.4 Resumen de tipos de contenido

| Tipo | Bundle | Campos configurables | Campos totales |
|---|---|---:|---:|
| Aliados | `aliados` | 1 | 10 |
| Artículo | `article` | 13 | 22 |
| Artículo MICE | `articulo_mice` | 11 | 20 |
| Atractivos | `atractivos` | 25 | 34 |
| Audioguías | `audioguias` | 6 | 15 |
| Banco de imagenes | `banco_de_imagenes` | 16 | 25 |
| Banner | `banner` | 8 | 17 |
| Casos de éxito | `casos_de_exito` | 5 | 14 |
| Descargables | `descargables` | 5 | 14 |
| Destacados | `destacados` | 2 | 11 |
| Empresas prestadoras de servicios | `empresas_prestadoras_de_servicio` | 1 | 10 |
| Establecimientos Dónde Comer | `establecimientos` | 26 | 35 |
| Eventos | `eventos` | 24 | 33 |
| Eventos MICE | `eventos_mice` | 23 | 32 |
| Eventos Stop Over | `eventos_stop_over` | 21 | 30 |
| Experiencias | `experiencias` | 27 | 36 |
| Fichas Turísticas | `fichas_turisticas` | 4 | 13 |
| Guías turísticos | `guias_turisticos` | 11 | 20 |
| Home Visit 2.0 | `home_visit_2_0` | 9 | 18 |
| Hoteles | `hoteles` | 18 | 27 |
| INFO ÚTIL | `info_util` | 12 | 21 |
| Itinerarios | `itinerarios` | 12 | 21 |
| Ofertas Stop Over | `ofertas_stop_over` | 23 | 32 |
| Pagina Agenda de eventos | `pagina_agenda_de_eventos` | 1 | 10 |
| Pagina de Inicio | `pagina_de_inicio` | 7 | 16 |
| Proveedores Conecta | `proveedores_conecta` | 16 | 25 |
| Página Eventos | `pagina_eventos` | 1 | 10 |
| Página Venues | `pagina_venues` | 1 | 10 |
| Página básica | `page` | 4 | 13 |
| Página ¿Por qué Bogotá? | `pagina_por_que_bogota` | 2 | 11 |
| Rutas | `rutas` | 25 | 34 |
| Salones de Venues MICE | `salones_de_venues_mice` | 6 | 15 |
| Solicitud Descarga | `solicitud_descarga` | 6 | 15 |
| Venues | `venues` | 19 | 28 |
| ¿Por qué Bogotá? | `por_que_bogota` | 5 | 14 |

## 5.5 Fichas completas

### Aliados

- **Bundle:** `aliados`
- **Campos configurables:** 1 | **Campos totales:** 10
- **Plantilla:** Sin plantilla Twig específica identificada; usa la resolución estándar del theme/Core.
- **Idiomas:** español e inglés. **Revisiones:** nueva revisión activada por defecto.

Administra los aliados institucionales, estratégicos o comerciales que deben mostrarse mediante su identidad visual.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_logo` | Logo | Imagen | No | Configurable |

---

### Artículo

- **Bundle:** `article`
- **Campos configurables:** 13 | **Campos totales:** 22
- **Plantilla:** `templates/node--article--full.html.twig`

Publica contenidos editoriales de vigencia temporal, principalmente noticias, artículos de blog y publicaciones informativas.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_articulo_mice` | Artículo MICE | Booleano | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `comment` | Comentarios | comment | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_tags` | Etiquetas | Referencia a entidad | No | Configurable |
| `field_image` | Imagen | Imagen | No | Configurable |
| `field_cover` | Imagen portada | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_introduccion` | Introducción | Texto largo (plano) | Sí | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |

---

### Artículo MICE

- **Bundle:** `articulo_mice`
- **Campos configurables:** 11 | **Campos totales:** 20
- **Plantilla:** `templates/node--articulo-mice.html.twig`

Gestiona artículos especializados en turismo de reuniones, eventos, congresos y convenciones.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_tags` | Etiquetas | Referencia a entidad | No | Configurable |
| `field_image` | Imagen | Imagen | No | Configurable |
| `field_cover` | Imagen portada | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_introduccion` | Introducción | Texto largo (plano) | Sí | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |

---

### Atractivos

- **Bundle:** `atractivos`
- **Campos configurables:** 25 | **Campos totales:** 34
- **Plantilla:** `templates/node--atractivos--full.html.twig`

Representa lugares, escenarios y puntos de interés turístico de Bogotá. Integra descripción, ubicación, horarios, contacto, categorías, recomendaciones, recursos multimedia y datos para mapas y aplicaciones móviles.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_video` | Archivo de video | Archivo | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `field_correo` | Correo | Correo electrónico | No | Configurable |
| `body` | Cuerpo | Texto con resumen | Sí | Configurable |
| `field_direccion` | Dirección | Texto corto | No | Configurable |
| `field_duracion_de_la_visita_new` | Duración de la visita | Texto corto | No | Configurable |
| `field_imperdible` | Es imperdible | Booleano | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_horarios` | Horarios | Texto corto | No | Configurable |
| `field_mainimg` | Imagen Listado | Imagen | No | Configurable |
| `field_cover` | Imagen portada | Imagen | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_mapslink` | Link completo de maps | Enlace | No | Configurable |
| `field_weblink` | Link para ampliar información | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_recorrido_360` | Recorrido 360 | Texto corto | No | Configurable |
| `field_audio` | Reseña de audio | Archivo | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_valor_de_la_entrada` | Valor de la entrada | Texto corto | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |
| `field_como_llegar_enr` | ¿Cómo Llegar? | Texto largo con formato | No | Configurable |

---

### Audioguías

- **Bundle:** `audioguias`
- **Campos configurables:** 6 | **Campos totales:** 15
- **Plantilla:** Sin plantilla Twig de bundle identificada.

Agrupa recorridos sonoros compuestos por uno o varios archivos de audio, sus títulos, duración e imagen principal.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_audios` | Archivos de audio | Archivo | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_destacar_en_la_app` | Destacar en la app | Booleano | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_totaltime` | Tiempo total de audioguía | Texto corto | No | Configurable |
| `field_audiotitles` | Titulos Audios | Texto corto | No | Configurable |

---

### Banco de imagenes

- **Bundle:** `banco_de_imagenes`
- **Campos configurables:** 16 | **Campos totales:** 25
- **Plantillas:** `templates/node--banco-de-imagenes--full.html.twig` y `templates/node--banco-de-imagenes--card.html.twig`

Cataloga imágenes y videos disponibles para consulta o descarga, incluyendo autoría, clasificación turística, ubicación, metadatos SEO y una URL externa de almacenamiento cuando aplica.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_autor` | Autor | Texto corto | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_descripcion_seo` | Descripción SEO | Texto largo (plano) | No | Configurable |
| `field_es_video` | Es video? | Booleano | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_imagen_seo` | Imagen SEO | Imagen | No | Configurable |
| `field_localidad_relacionada` | Localidad Relacionada | Referencia a entidad | No | Configurable |
| `field_bifilename` | Nombre del archivo | Texto corto | No | Configurable |
| `field_palabras_clave_seo` | Palabras clave SEO | Texto largo (plano) | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_titulo_seo` | Título SEO | Texto corto | No | Configurable |
| `field_url_de_cloudinary` | URL de cloudinary | Texto corto | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### Banner

- **Bundle:** `banner`
- **Campos configurables:** 8 | **Campos totales:** 17
- **Plantilla:** `templates/node--banner--full.html.twig`

Administra piezas promocionales para cabeceras, secciones y carruseles del sitio.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `field_tags` | Etiquetas | Referencia a entidad | No | Configurable |
| `field_banner` | Imagen del Banner | Imagen | No | Configurable |
| `field_imagen_mobile` | Imagen Mobile | Imagen | No | Configurable |
| `field_weblink` | Link para ampliar información | Enlace | No | Configurable |
| `field_seccion_donde_aparece` | Sección donde aparece | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |

---

### Casos de éxito

- **Bundle:** `casos_de_exito`
- **Campos configurables:** 5 | **Campos totales:** 14
- **Plantilla:** `templates/node--casos-de-exito--full.html.twig`

Publica casos de éxito asociados a eventos o iniciativas de turismo de reuniones.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `body` | Descripción del evento | Texto con resumen | No | Configurable |
| `field_fotos` | Foto del evento | Imagen | No | Configurable |
| `field_weblink` | Link del evento | Enlace | No | Configurable |
| `field_que_vas_a_conocer` | Texto descriptivo del video | Texto corto | No | Configurable |
| `field_video` | Video del evento | Archivo | No | Configurable |

---

### Descargables

- **Bundle:** `descargables`
- **Campos configurables:** 5 | **Campos totales:** 14
- **Plantilla:** Sin plantilla Twig específica.

Centraliza archivos descargables vinculados con páginas, categorías o subcategorías del portal.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_archivo` | Archivo | Archivo | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_pagina_relacionada` | Pagina_relacionada | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |

---

### Destacados

- **Bundle:** `destacados`
- **Campos configurables:** 2 | **Campos totales:** 11
- **Plantilla:** Sin plantilla Twig específica; su salida pública principal se genera mediante Views y REST Export.

Administra accesos promocionales de alta visibilidad, compuestos por una imagen y un enlace.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_banner` | Imagen | Imagen | No | Configurable |
| `field_weblink` | Link | Enlace | No | Configurable |

---

### Empresas prestadoras de servicios

- **Bundle:** `empresas_prestadoras_de_servicio`
- **Campos configurables:** 1 | **Campos totales:** 10
- **Plantilla:** Sin plantilla Twig específica.

Registra empresas prestadoras de servicios relacionadas con la oferta turística.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_profilelink` | Links de la empresa | Enlace | No | Configurable |

---

### Establecimientos Dónde Comer

- **Bundle:** `establecimientos`
- **Campos configurables:** 26 | **Campos totales:** 35
- **Plantilla:** `templates/node--establecimientos--full.html.twig`

Representa restaurantes, cafés, mercados y demás establecimientos de la oferta gastronómica.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_accesibilidad` | Accesibilidad | Referencia a entidad | No | Configurable |
| `field_categoria_gastronomica` | Categoría Gastronómica | Referencia a entidad | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_direccion` | Dirección | Texto corto | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_horarios` | Horarios | Texto corto | No | Configurable |
| `field_idioma_del_servicio` | Idioma del servicio | Referencia a entidad | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_menulink` | Link del menú | Enlace | No | Configurable |
| `field_linkreservas` | Link para reservas | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_mercados_locales_relaciona` | Mercados locales relacionados | Referencia a entidad | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_rango_de_precios` | Rango de precios | Referencia a entidad | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_recorrido_360` | Recorrido 360 | Texto corto | No | Configurable |
| `field_profilelink` | Redes Sociales | Enlace | No | Configurable |
| `field_audio` | Reseña de audio | Archivo | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_weblink` | URL Sitio web | Enlace | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |
| `field_zonagast` | Zona gastronómica relacionada | Referencia a entidad | No | Configurable |

---

### Eventos

- **Bundle:** `eventos`
- **Campos configurables:** 24 | **Campos totales:** 33
- **Plantilla:** `templates/node--eventos.html.twig`

Administra la agenda general de eventos de Bogotá.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_categoria_de_evento` | Categoría de evento | Referencia a entidad | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_evento_mice` | Este es un evento MICE | Booleano | No | Configurable |
| `field_evento_distrital` | Evento distrital | Booleano | No | Configurable |
| `field_evento_exitoso` | Evento exitoso | Booleano | No | Configurable |
| `field_evento_gratuito` | Evento Gratuito | Booleano | No | Configurable |
| `field_fecha_de_finalizacion` | Fecha de finalización | Fecha / Hora | No | Configurable |
| `field_fecha_de_inicio` | Fecha de Inicio | Fecha / Hora | Sí | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_hora_de_inicio_del_evento` | Hora de Inicio del evento | Texto corto | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_incluir_disclaimer` | Incluir Disclaimer | Booleano | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_link_a_boleteria` | Link a boletería | Enlace | No | Configurable |
| `field_link_fuente_fotografias` | Link fuente fotografías | Enlace | No | Configurable |
| `field_weblink` | Link para ampliar información | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_lugar_del_evento` | Lugar del evento | Texto corto | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### Eventos MICE

- **Bundle:** `eventos_mice`
- **Campos configurables:** 23 | **Campos totales:** 32
- **Plantilla:** `templates/node--eventos-mice.html.twig`

Administra eventos del segmento MICE: congresos, convenciones, ferias y encuentros corporativos.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_categoria_de_evento` | Categoría de evento | Referencia a entidad | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_evento_distrital` | Evento distrital | Booleano | No | Configurable |
| `field_evento_exitoso` | Evento exitoso | Booleano | No | Configurable |
| `field_evento_gratuito` | Evento Gratuito | Booleano | No | Configurable |
| `field_fecha_de_finalizacion` | Fecha de finalización | Fecha / Hora | No | Configurable |
| `field_fecha_de_inicio` | Fecha de Inicio | Fecha / Hora | Sí | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_hora_de_inicio_del_evento` | Hora de Inicio del evento | Texto corto | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_incluir_disclaimer` | Incluir Disclaimer | Booleano | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_link_a_boleteria` | Link a boletería | Enlace | No | Configurable |
| `field_link_fuente_fotografias` | Link fuente fotografías | Enlace | No | Configurable |
| `field_weblink` | Link para ampliar información | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_lugar_del_evento` | Lugar del evento | Texto corto | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### Eventos Stop Over

- **Bundle:** `eventos_stop_over`
- **Campos configurables:** 21 | **Campos totales:** 30
- **Plantilla:** Sin plantilla Twig específica.

Administra eventos seleccionados para la estrategia Stop Over.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_categoria_de_evento` | Categoría de evento | Referencia a entidad | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_evento_gratuito` | Evento Gratuito | Booleano | No | Configurable |
| `field_fecha_de_finalizacion` | Fecha de finalización | Fecha / Hora | No | Configurable |
| `field_fecha_de_inicio` | Fecha de Inicio | Fecha / Hora | Sí | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_hora_de_inicio_del_evento` | Hora de Inicio del evento | Texto corto | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_incluir_disclaimer` | Incluir Disclaimer | Booleano | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_link_a_boleteria` | Link a boletería | Enlace | No | Configurable |
| `field_link_fuente_fotografias` | Link fuente fotografías | Enlace | No | Configurable |
| `field_weblink` | Link para ampliar información | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_lugar_del_evento` | Lugar del evento | Texto corto | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### Experiencias

- **Bundle:** `experiencias`
- **Campos configurables:** 27 | **Campos totales:** 36
- **Plantilla:** `templates/node--experiencias--full.html.twig`

Representa experiencias turísticas comercializables o certificadas.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_accesibilidad` | Accesibilidad | Referencia a entidad | No | Configurable |
| `field_video` | Archivo de video | Archivo | No | Configurable |
| `field_banner` | Banner | Imagen | No | Configurable |
| `field_maxpeople` | Cantidad máximo de personas en la reserva | Número entero | No | Configurable |
| `field_minpeople` | Cantidad mínima de personas en la reserva | Número entero | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_introduccion` | Descripción corta | Texto largo (plano) | Sí | Configurable |
| `field_direccion` | Dirección | Texto corto | No | Configurable |
| `field_duracion_de_la_visita_new` | Duración | Texto corto | No | Configurable |
| `field_duracion_list` | Duración | Lista (texto) | No | Configurable |
| `field_company` | Empresa relacionada | Referencia a entidad | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_idioma_del_servicio` | Idioma del servicio | Referencia a entidad | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_linkreservas` | Link para reservas | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_porcentaje_de_descuento` | Porcentaje de descuento | Texto corto | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_audio` | Reseña de audio | Archivo | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_terminos_y_condiciones` | Términos y condiciones | Texto largo con formato | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |
| `field_experiencia_aliada_idt` | ¿Experiencia Aliada IDT? | Booleano | No | Configurable |

---

### Fichas Turísticas

- **Bundle:** `fichas_turisticas`
- **Campos configurables:** 4 | **Campos totales:** 13
- **Plantilla:** Sin plantilla Twig específica.

Almacena fichas estructuradas vinculadas con atractivos turísticos.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_atractivo_asociado` | Atractivo asociado | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_id_ficha` | ID Ficha | Texto corto | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |

---

### Guías turísticos

- **Bundle:** `guias_turisticos`
- **Campos configurables:** 11 | **Campos totales:** 20
- **Plantilla:** Sin plantilla Twig de bundle identificada.

Administra el directorio de guías turísticos, incluyendo información de contacto, RNT, especialidad, idiomas, sector de trabajo y criterios relacionados con inclusión y certificaciones.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_correo` | Correo | Correo electrónico | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_especialidad` | Especialidad | Texto corto | No | Configurable |
| `field_idiomas_que_maneja` | Idiomas que maneja | Texto corto | No | Configurable |
| `field_link_de_contacto` | link de contacto | Texto corto | No | Configurable |
| `field_rnt` | Número de RNT | Texto corto | No | Configurable |
| `field_sector` | Sector turístico en el que se desenvuelve | Lista (texto) | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_cont_disc` | ¿Contrata o ha contratado con personas con discapacidad? | Booleano | No | Configurable |
| `field_especializacion` | ¿Cuenta con alguna especialización certificada en guianza turística? | Booleano | No | Configurable |

---

### Home Visit 2.0

- **Bundle:** `home_visit_2_0`
- **Campos configurables:** 9 | **Campos totales:** 18
- **Plantilla:** `templates/node--home-visit-2-0--full.html.twig`

Configura los contenidos principales de la página de inicio de Visit Bogotá 2.0.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `field_imagen_campana` | Imagen Campaña | Imagen | No | Configurable |
| `field_link_cta_banner` | Link CTA Banner | Texto corto | No | Configurable |
| `field_link_cta_campana` | Link CTA Campaña | Texto corto | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_texto_cta_banner` | Texto CTA banner | Texto corto | No | Configurable |
| `field_texto_cta_campana` | Texto CTA Campaña | Texto corto | No | Configurable |
| `field_video_campana` | Video Campaña | Archivo | No | Configurable |
| `field_video_principal` | Video Principal | Archivo | No | Configurable |

---

### Hoteles

- **Bundle:** `hoteles`
- **Campos configurables:** 18 | **Campos totales:** 27
- **Plantilla:** `templates/node--hoteles--full.html.twig`

Representa alojamientos y hoteles de la ciudad.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `field_correo` | Correo | Correo electrónico | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_direccion` | Dirección | Texto corto | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_weblink` | Link para ampliar información | Enlace | No | Configurable |
| `field_linkreservas` | Link para reservas | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_rango_de_precios_del_hotel` | Rango de precios del hotel | Referencia a entidad | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_servicios_del_hotel` | Servicios del hotel | Referencia a entidad | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_tipo_de_alojamiento` | Tipo de alojamiento | Referencia a entidad | No | Configurable |
| `field_tipos_de_habitacion_dispon` | Tipos de habitación disponibles | Referencia a entidad | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### INFO ÚTIL

- **Bundle:** `info_util`
- **Campos configurables:** 12 | **Campos totales:** 21
- **Plantilla:** Sin plantilla Twig específica.

Publica información práctica para viajeros, organizada por categorías y tipos de visualización.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_categoria_viajero` | Categoría | Referencia a entidad | No | Configurable |
| `body` | Descripción completa | Texto con resumen | No | Configurable |
| `field_descripcion_seo` | Descripción SEO | Texto largo (plano) | No | Configurable |
| `field_fotos` | Fotos | Imagen | No | Configurable |
| `field_image` | Imagen principal | Imagen | No | Configurable |
| `field_imagen_seo` | Imagen SEO | Imagen | No | Configurable |
| `field_introduccion` | Introducción | Texto largo (plano) | Sí | Configurable |
| `field_palabras_clave_seo` | Palabras clave SEO | Texto largo (plano) | No | Configurable |
| `field_peso` | Peso | Número entero | No | Configurable |
| `field_subtitulo` | Subtitulo | Texto corto | No | Configurable |
| `field_tipo_viajero` | Tipo de visualización | Lista (texto) | No | Configurable |
| `field_titulo_seo` | Título SEO | Texto corto | No | Configurable |

---

### Itinerarios

- **Bundle:** `itinerarios`
- **Campos configurables:** 12 | **Campos totales:** 21
- **Plantilla:** Sin plantilla Twig específica.

Administra itinerarios turísticos sugeridos.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_video` | Archivo de video | Archivo | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_introduccion` | Introducción | Texto largo (plano) | Sí | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_mapslink` | Link completo de maps | Enlace | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_audio` | Reseña de audio | Archivo | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_que_vas_a_conocer` | ¿Qué vas a conocer? | Texto corto | No | Configurable |

---

### Ofertas Stop Over

- **Bundle:** `ofertas_stop_over`
- **Campos configurables:** 23 | **Campos totales:** 32
- **Plantilla:** Sin plantilla Twig específica.

Publica ofertas y beneficios de la estrategia Stop Over.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_benef_stopover` | Beneficio Stop Over | Texto largo (plano) | No | Configurable |
| `field_max_pers` | Cantidad maxima de personas | Número entero | No | Configurable |
| `field_min_pers` | Cantidad minima de personas | Número entero | No | Configurable |
| `field_disc_code` | Codigo de descuento | Texto corto | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_short_desc` | Descripción corta | Texto largo con formato | No | Configurable |
| `field_descripcion_seo` | Descripción SEO | Texto largo (plano) | No | Configurable |
| `field_direccion` | Dirección | Texto corto | No | Configurable |
| `field_duracion` | Duración | Texto corto | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_georeferenciacion` | Georeferenciación | Texto corto | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_imagen_seo` | Imagen SEO | Imagen | No | Configurable |
| `field_link_whatsapp` | Link whatsapp | Texto corto | No | Configurable |
| `field_localidad_relacionada` | Localidad Relacionada | Referencia a entidad | No | Configurable |
| `field_nombre_de_la_empresa` | Nombre de la empresa | Texto corto | No | Configurable |
| `field_nombre_establecimiento` | Nombre establecimiento | Texto corto | No | Configurable |
| `field_palabras_clave_seo` | Palabras clave SEO | Texto largo (plano) | No | Configurable |
| `field_percdesc` | Porcentaje de descuento | Número entero | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_terminos_y_condiciones` | Términos y condiciones | Texto largo con formato | No | Configurable |
| `field_titulo_seo` | Título SEO | Texto corto | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### Pagina Agenda de eventos

- **Bundle:** `pagina_agenda_de_eventos`
- **Campos configurables:** 1 | **Campos totales:** 10
- **Plantilla:** `templates/node--pagina-agenda-de-eventos--full.html.twig`

Funciona como página contenedora o landing de la agenda de eventos.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |

---

### Pagina de Inicio (MICE)

- **Bundle:** `pagina_de_inicio`
- **Campos configurables:** 7 | **Campos totales:** 16
- **Plantilla:** `templates/node--pagina-de-inicio.html.twig`

Configura la página principal del ecosistema MICE o Visit Conecta.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_imagen_proveedores` | Imagen Proveedores | Imagen | No | Configurable |
| `field_imagen_venues` | Imagen Venues | Imagen | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_texto_aliados` | Texto aliados | Texto largo con formato | No | Configurable |
| `field_texto_proveedores` | Texto Proveedores | Texto largo con formato | No | Configurable |
| `field_texto_venues` | Texto Venues | Texto largo con formato | No | Configurable |
| `field_textos_seccion_eventos` | Textos Sección eventos | Texto largo con formato | No | Configurable |

---

### Proveedores Conecta

- **Bundle:** `proveedores_conecta`
- **Campos configurables:** 16 | **Campos totales:** 25
- **Plantilla:** `templates/node--proveedores-conecta.html.twig`

Registra proveedores del ecosistema MICE y Visit Conecta.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_aprobado_marca_ciudad` | Aprobado marca ciudad | Booleano | No | Configurable |
| `field_correo` | Correo electrónico | Correo electrónico | No | Configurable |
| `field_criterios_de_busqueda_prov` | Criterios de búsqueda proveedor | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_direccion` | Dirección | Texto corto | No | Configurable |
| `field_es_licenciatario_de_marca` | Es licenciatario de marca? | Booleano | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_linkreservas` | Link para reservas | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_profilelink` | Redes sociales | Enlace | No | Configurable |
| `field_weblink` | Sitio web | Enlace | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |

---

### Página Eventos (MICE)

- **Bundle:** `pagina_eventos`
- **Campos configurables:** 1 | **Campos totales:** 10
- **Plantilla:** `templates/node--pagina-eventos.html.twig`

Funciona como landing de eventos MICE.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |

---

### Página Venues

- **Bundle:** `pagina_venues`
- **Campos configurables:** 1 | **Campos totales:** 10
- **Plantilla:** `templates/node--pagina-venues.html.twig`

Funciona como landing de venues del ecosistema MICE.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |

---

### Página básica

- **Bundle:** `page`
- **Campos configurables:** 4 | **Campos totales:** 13
- **Plantillas:** `templates/page.html.twig` y plantillas específicas por nodo.

Administra páginas estáticas de propósito general.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_introduccion` | Introducción | Texto largo (plano) | Sí | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |

---

### Página ¿Por qué Bogotá?

- **Bundle:** `pagina_por_que_bogota`
- **Campos configurables:** 2 | **Campos totales:** 11
- **Plantilla:** `templates/node--pagina-por-que-bogota.html.twig`

Funciona como página contenedora de la sección «¿Por qué Bogotá?».

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |

---

### Rutas

- **Bundle:** `rutas`
- **Campos configurables:** 25 | **Campos totales:** 34
- **Plantilla:** `templates/node--rutas.html.twig`

Representa rutas y recorridos turísticos.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_video` | Archivo de video | Archivo | No | Configurable |
| `field_turcat` | Categoría relacionada | Referencia a entidad | No | Configurable |
| `field_contenidos_relacionados` | Contenidos relacionados | Referencia a entidad | No | Configurable |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_imagen_del_mapa` | Imagen del mapa | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_introduccion` | Introducción | Texto largo (plano) | Sí | Configurable |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable |
| `field_mapslink` | Link completo de maps | Enlace | No | Configurable |
| `field_linkreservas` | Link para reservas | Enlace | No | Configurable |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_precio` | Precio | Texto corto | No | Configurable |
| `field_turpara` | Recomendado para | Referencia a entidad | No | Configurable |
| `field_recorrido_360` | Recorrido 360 | Texto corto | No | Configurable |
| `field_audio` | Reseña de audio | Archivo | No | Configurable |
| `field_tursubcat` | Subcategoría relacionada | Referencia a entidad | No | Configurable |
| `field_subtitulo` | Subtitulo | Texto corto | No | Configurable |
| `field_telefono` | Teléfono | Texto corto | No | Configurable |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable |
| `field_como_llegar` | ¿Cómo llegar? | Texto largo (plano) | Sí | Configurable |
| `field_como_llegar_form` | ¿Cómo llegar? | Texto con resumen | No | Configurable |
| `field_quieres_ir` | ¿Quieres ir? | Texto largo con formato | No | Configurable |
| `field_conocer` | ¿Qué vas a conocer? | Texto largo con formato | No | Configurable |

---

### Salones de Venues MICE

- **Bundle:** `salones_de_venues_mice`
- **Campos configurables:** 6 | **Campos totales:** 15
- **Plantilla:** Sin plantilla específica; se presenta dentro del detalle del venue.

Administra salones o espacios internos pertenecientes a un venue MICE.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_aforo_maximo_en_auditorio` | Aforo máximo en auditorio | Número entero | No | Configurable |
| `field_aforo_minimo_en_auditorio` | Aforo mínimo en auditorio | Número entero | No | Configurable |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable |
| `field_servicios_de_accesibilidad` | Servicios de accesibilidad reducida | Booleano | No | Configurable |
| `field_montajes` | Tipos de montaje disponibles | Referencia a entidad | No | Configurable |
| `field_venue_relacionado` | Venue relacionado | Referencia a entidad | No | Configurable |

---

### Solicitud Descarga

- **Bundle:** `solicitud_descarga`
- **Campos configurables:** 6 | **Campos totales:** 15
- **Plantilla:** Sin plantilla pública; corresponde a un registro operativo.

Registra solicitudes asociadas a la descarga de recursos del banco de imágenes.

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `field_email` | Email | Correo electrónico | No | Configurable |
| `field_nombre` | Nombre | Texto corto | No | Configurable |
| `field_organizacion` | Organización | Texto corto | No | Configurable |
| `field_tipo_de_uso` | Tipo de uso | Texto corto | No | Configurable |
| `field_imagen_titulo` | Título imagen | Texto corto | No | Configurable |
| `field_imagen_url` | URL imagen | Texto corto | No | Configurable |

---

### Venues

- **Bundle:** `venues`
- **Campos configurables:** 19 | **Campos totales:** 28
- **Plantilla:** `templates/node--venues.html.twig`

Representa centros de convenciones, hoteles, auditorios y demás espacios para eventos MICE.

| Campo | Etiqueta | Tipo | Requerido | Origen | Notas |
|---|---|---|:---:|---|---|
| `title` | Título | Texto corto | Sí | Base | |
| `status` | Publicado | Booleano | No | Base | |
| `created` | Fecha de creación | Marca de tiempo | No | Base | |
| `changed` | Última modificación | Marca de tiempo | No | Base | |
| `uid` | Autor | Referencia a entidad | No | Base | |
| `langcode` | Idioma | Idioma | No | Base | |
| `promote` | Promovido a portada | Booleano | No | Base | |
| `sticky` | Pegado arriba | Booleano | No | Base | |
| `path` | Alias URL | Alias URL | No | Base | |
| `field_aforo` | Aforo | Lista (texto) | No | Configurable | |
| `field_aforo_maximo_en_auditorio` | Aforo máximo en auditorio | Número entero | No | Configurable | |
| `field_aprobado_marca_ciudad` | Aprobado marca ciudad | Booleano | No | Configurable | |
| `field_video` | Archivo de video | Archivo | No | Configurable | |
| `field_correo` | Correo electrónico | Correo electrónico | No | Configurable | |
| `body` | Descripción | Texto con resumen | No | Configurable | |
| `field_direccion` | Dirección | Texto corto | No | Configurable | |
| `field_picgallery` | Galería de fotos | Imagen | No | Configurable | |
| `field_image` | Imagen principal | Imagen | No | Configurable | |
| `field_latlong` | Latitud y Longitud | Texto corto | No | Configurable | |
| `field_linkreservas` | Link para reservas | Enlace | No | Configurable | |
| `field_turdistr` | Localidad de la ciudad | Referencia a entidad | No | Configurable | |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable | |
| `field_profilelink` | Redes sociales | Enlace | No | Configurable | Orden: 1-linkedin, 2-instagram, 3-youtube, 4-facebook |
| `field_weblink` | Sitio web | Enlace | No | Configurable | |
| `field_subcategoria_relacionada` | Subcategoría relacionada | Referencia a entidad | No | Configurable | |
| `field_telefono` | Teléfono | Texto corto | No | Configurable | |
| `field_tipo_de_venue` | Tipo de Venue | Referencia a entidad | No | Configurable | |
| `field_turzone` | Zona de la ciudad | Referencia a entidad | No | Configurable | |

---

### ¿Por qué Bogotá?

- **Bundle:** `por_que_bogota`
- **Campos configurables:** 5 | **Campos totales:** 14
- **Plantilla:** Sin plantilla de bundle; sus registros se componen dentro de la landing.

Administra unidades de contenido que componen la sección «¿Por qué Bogotá?».

| Campo | Etiqueta | Tipo | Requerido | Origen |
|---|---|---|:---:|---|
| `title` | Título | Texto corto | Sí | Base |
| `status` | Publicado | Booleano | No | Base |
| `created` | Fecha de creación | Marca de tiempo | No | Base |
| `changed` | Última modificación | Marca de tiempo | No | Base |
| `uid` | Autor | Referencia a entidad | No | Base |
| `langcode` | Idioma | Idioma | No | Base |
| `promote` | Promovido a portada | Booleano | No | Base |
| `sticky` | Pegado arriba | Booleano | No | Base |
| `path` | Alias URL | Alias URL | No | Base |
| `body` | Cuerpo | Texto con resumen | No | Configurable |
| `field_image` | Imagen Acompañamiento | Imagen | No | Configurable |
| `field_mainimg` | Imagen Principal | Imagen | No | Configurable |
| `field_metatags` | Metatags | Metatags SEO | No | Configurable |
| `field_seccion` | Sección | Lista (texto) | No | Configurable |
