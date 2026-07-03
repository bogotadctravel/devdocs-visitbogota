---
id: web-theme
sidebar_position: 3
---

# Estructura del theme

## 4.1 Identificación

| Propiedad | Valor |
|---|---|
| Nombre visible | Visit Bogota 2.0 Theme |
| Nombre técnico | `visit_theme` |
| Tipo | Theme personalizado |
| Compatibilidad | Drupal 10 y Drupal 11 |
| Base theme | `stark` |
| Librería global | `visit_theme/global-styling` |

Aunque el theme fue desarrollado específicamente para Visit Bogotá, declara a Stark como base mínima. Esto permite partir de una capa visual casi vacía, sin depender de un framework visual contribuido.

:::tip 🎬 Video sugerido — Flujo de cambio en una plantilla Twig

**Qué grabar:** Desde el repositorio, abrir una plantilla (ej. `node--atractivos--full.html.twig`), hacer un cambio visual menor, hacer deploy, limpiar caché con `drush cr` y mostrar el resultado en el portal. Sirve como guía de referencia para nuevos desarrolladores del theme.

**Duración sugerida:** 4-6 min  
**Herramienta recomendada:** Grabación de pantalla del computador (OBS / QuickTime) con terminal visible

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## 4.2 Árbol principal

```text
visit_theme/
├── assets/                     # Artefactos compilados, incluido el widget del chatbot
├── css/                        # CSS compilado
├── docs/                       # Documentación interna del theme
├── images/                     # Imágenes y recursos propios del theme
├── js/                         # JavaScript nativo
├── scss/                       # Fuentes Sass
├── templates/                  # Sobrescrituras Twig
├── translations/               # Traducciones de interfaz del theme
├── video/                      # Recursos de video propios del theme
├── visitscss/                  # Directorio adicional de estilos; pendiente de integración al flujo principal de compilación
├── .gitignore
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── screenshot.png
├── visit_theme.info.yml
├── visit_theme.libraries.yml
└── visit_theme.theme
```

## 4.3 Regiones

| Machine name | Nombre administrativo | Uso esperado |
|---|---|---|
| `bannersHeader` | Banners header | Piezas promocionales o informativas superiores. |
| `header` | Header | Encabezado general. |
| `headerTheme` | Header Theme | Encabezado dependiente del contexto o variante del theme. |
| `headerVisit` | Header Visit | Encabezado principal de Visit Bogotá. |
| `bannersHome` | Banners home | Banners y carruseles de la portada. |
| `content` | Content | Contenido principal de la ruta. |
| `sidebar` | Sidebar | Bloques laterales y navegación complementaria. |
| `footer` | Footer | Pie de página. |

## 4.4 Librerías frontend

| Librería | Recursos | Uso |
|---|---|---|
| `aos-lib` | `js/aos.js` y CSS externo de AOS 2.3.1 | Animaciones activadas por desplazamiento. |
| `splide` | CSS y JS externo de Splide 4.1.4 | Carruseles y sliders. |
| `fancybox` | CSS y JS externo de Fancybox 6.1 | Lightboxes y visualización de galerías. |
| `chatbot-widget` | `assets/index-Cwatq9uM.css` y `assets/index-DyqgDTc7.js` | Carga del widget compilado de chatbot. |
| `banco-imagenes-download` | `js/bi-download.js` | Flujo de descarga del banco de imágenes; depende de `core/drupal` y `core/once`. |
| `global-styling` | `css/styles.css`, `css/stylesvisit.css`, Google Fonts y `js/main.js` | Librería global del theme; depende de Drupal Behaviors, `once`, `drupalSettings`, AOS, Splide y Fancybox. |

La carga de AOS, Splide, Fancybox y Google Fonts depende de servicios externos. Las políticas CSP, las reglas de Cloudflare y los controles de disponibilidad deben considerar estos dominios. Para reducir riesgo operativo, se recomienda evaluar el alojamiento local de dependencias críticas y mantener versiones fijadas.

## 4.5 Lógica del archivo `visit_theme.theme`

El archivo principal del theme no se limita a preprocess visual. También prepara información para las plantillas y altera formularios. Entre sus responsabilidades se encuentran:

- Ejecución programática de Views para banners y bloques.
- Preparación de variables para nodos, páginas, bloques y términos de taxonomía.
- Carga de menús del sitio y envío de árboles renderizables a Twig.
- Exposición de la ruta del theme mediante `drupalSettings`.
- Preparación del formulario de contacto `guardar_itinerario`.
- Adaptación visual del formulario de inicio de sesión.
- Modificación de títulos, campos y acciones del formulario de guardado de itinerarios.
- Tratamiento de contenidos relacionados, taxonomías traducidas y valores específicos por bundle.
- Limpieza de atributos de estilo embebidos antes de exponer ciertos cuerpos de contenido a Twig.

La concentración de consultas, reglas editoriales y presentación dentro del theme incrementa el acoplamiento. En futuras iteraciones conviene mover reglas de negocio reutilizables a servicios de aplicación o módulos claramente delimitados, dejando en el theme únicamente preprocess y presentación.

## 4.6 Plantillas Twig identificadas

La carpeta `templates/` contiene las siguientes plantillas y dos subdirectorios, `includes/` y `navigation/`:

```text
templates/header_conecta.html.twig
templates/html.html.twig
templates/links--language-block.html.twig
templates/node--1223.html.twig
templates/node--1234--full.html.twig
templates/node--1270--full.html.twig
templates/node--1280--full.html.twig
templates/node--1380--full.html.twig
templates/node--359.html.twig
templates/node--432.html.twig
templates/node--439.html.twig
templates/node--549--full.html.twig
templates/node--561--full.html.twig
templates/node--562--full.html.twig
templates/node--639.html.twig
templates/node--650--full.html.twig
templates/node--671.html.twig
templates/node--704.html.twig
templates/node--826--full.html.twig
templates/node--835--full.html.twig
templates/node--870--full.html.twig
templates/node--article--full.html.twig
templates/node--articulo-mice.html.twig
templates/node--atractivos--full.html.twig
templates/node--banco-de-imagenes--card.html.twig
templates/node--banco-de-imagenes--full.html.twig
templates/node--banner--full.html.twig
templates/node--casos-de-exito--full.html.twig
templates/node--establecimientos--full.html.twig
templates/node--eventos-mice.html.twig
templates/node--eventos.html.twig
templates/node--experiencias--full.html.twig
templates/node--home-visit-2-0--full.html.twig
templates/node--hoteles--full.html.twig
templates/node--pagina-agenda-de-eventos--full.html.twig
templates/node--pagina-de-inicio.html.twig
templates/node--pagina-eventos.html.twig
templates/node--pagina-por-que-bogota.html.borrador.twig
templates/node--pagina-por-que-bogota.html.twig
templates/node--pagina-venues.html.twig
templates/node--proveedores-conecta.html.twig
templates/node--rutas.html.twig
templates/node--venues.html.twig
templates/node--view--busqueda-de-contenido.html.twig
templates/node--view--taxonomy-term--page-1.html.twig
templates/page--404.html.twig
templates/page--buscar.html.twig
templates/page--taxonomy--term.html.twig
templates/page.html.twig
templates/taxonomy-term--202.html.twig
templates/taxonomy-term--categorias-turisticas.html.twig
templates/taxonomy-term--subcategorias-turisticas.html.twig
templates/taxonomy-term--zonas-de-la-ciudad.html.twig
templates/views-view--banco-de-imagenes.html.twig
templates/views-view-fields--busqueda-de-contenido.html.twig
templates/views-view-unformatted--banco-de-imagenes.html.twig
templates/views-view-unformatted--banners-por-seccion.html.twig
```

### Convenciones de nomenclatura

- `node--{bundle}.html.twig` y `node--{bundle}--full.html.twig`: presentación por tipo de contenido y modo de vista.
- `node--{nid}.html.twig`: presentación acoplada a un nodo concreto.
- `page--*.html.twig`: sobrescrituras de página por ruta o contexto.
- `taxonomy-term--*.html.twig`: presentación de vocabularios o términos concretos.
- `views-view*`: personalización de resultados de Views.
- `node--view--*`: plantillas con sugerencias de theme personalizadas; requieren que el hook de sugerencias correspondiente las registre explícitamente para que Drupal las resuelva.

Las plantillas asociadas a IDs de nodo crean dependencia directa con contenido existente. Antes de migrar, recrear o eliminar uno de esos nodos se debe revisar su plantilla. Como mejora, se recomienda reemplazar progresivamente este patrón por bundles, modos de vista, campos de configuración o sugerencias de theme basadas en rutas estables.

El archivo `node--pagina-por-que-bogota.html.borrador.twig` debe tratarse como un borrador fuera de la estructura activa. Mantener archivos de respaldo dentro de `templates/` puede generar confusión durante soporte y despliegues.
