---
id: web-stack
sidebar_position: 2
---

# Stack tecnológico

## 3.1 Aplicación

| Componente | Tecnología / versión | Observaciones |
|---|---|---|
| CMS | Drupal 11.2.4 | Núcleo de administración de contenidos, traducciones, revisiones, Views, taxonomías, medios y REST. |
| PHP | PHP 8.3 | Runtime de la aplicación. |
| Base de datos | MySQL | Confirmar la versión exacta en el servidor o contenedor de base de datos antes de actualizaciones. |
| Gestión de dependencias | Composer | Proyecto basado en `drupal/recommended-project`, con document root en `web/`. |
| CLI de Drupal | Drush 13.6 | Declarado en Composer para administración, caché, base de datos y configuración. |
| Contenedores | Docker | Drupal se ejecuta dentro de un contenedor administrado en la infraestructura del IDT suministrada por ETB. |
| Theme | Visit Bogota 2.0 Theme (`visit_theme`) | Theme personalizado para la experiencia pública. Usa Stark como base mínima. |
| Plantillas | Twig | Sobrescrituras para nodos, páginas, taxonomías, Views, navegación y casos específicos. |
| Estilos | Sass + CSS compilado | Fuentes en `scss/`; salida pública en `css/styles.css` y `css/stylesvisit.css`. |
| Interactividad | JavaScript nativo | Integración con Drupal Behaviors, `once` y `drupalSettings`. |
| Gestión de medios | Drupal Media Library | Tipos de medio: Documento, Imagen, Audio, Video local y Archivo descargable. |
| API | Drupal Views REST Export | Endpoints JSON públicos, versionados bajo `/api/v3/`. |
| Traducción | Sistema multilingüe de Drupal | Español e inglés. |
| Seguridad perimetral | Cloudflare | DNS, WAF, reglas base de seguridad y bloqueo de tráfico sospechoso. |

## 3.2 Dependencias contribuidas declaradas en Composer

> La presencia en `composer.json` confirma que la dependencia está instalada, pero no garantiza que el módulo esté habilitado en la configuración activa de Drupal. Validar con `drush pml` o desde la interfaz de administración.

| Paquete | Función principal |
|---|---|
| `drupal/admin_toolbar` | Mejoras de navegación y administración del backend. |
| `drupal/context` | Aplicación de condiciones y reacciones contextuales. |
| `drupal/domain` | Soporte histórico para múltiples dominios. |
| `drupal/domain_simple_sitemap` | Sitemaps diferenciados por dominio; dependencia histórica. |
| `drupal/easy_breadcrumb` | Generación y personalización de breadcrumbs. |
| `drupal/imageapi_optimize_webp` | Optimización y generación de imágenes WebP. |
| `drupal/jsonapi_extras` | Personalización de recursos y campos JSON:API. |
| `drupal/linkit` | Selección asistida de enlaces internos en campos de texto. |
| `drupal/metatag` | Metadatos SEO por entidad y página. |
| `drupal/pathauto` | Generación automática de alias URL. |
| `drupal/redirect` | Administración de redirecciones y prevención de enlaces rotos. |
| `drupal/schema_metatag` | Datos estructurados Schema.org mediante metatags. |
| `drupal/simple_sitemap` | Generación de sitemaps XML. |

Los módulos `Domain` y `Domain Simple Sitemap` se conservaron por el funcionamiento histórico de `conecta.visitbogota.co`. Actualmente todo el ecosistema documentado opera bajo `visitbogota.co`, por lo que ambas dependencias son candidatas a desactivación después de revisar configuración, rutas, Views, cachés y sitemaps.

## 3.3 Despliegue

El despliegue se realiza por línea de comandos. El equipo accede al servidor mediante SSH y ejecuta las tareas necesarias dentro del contenedor Docker correspondiente a Drupal. Los comandos concretos, nombres de contenedores, estrategia de ramas y secuencia de actualización deben mantenerse en una guía operativa separada para evitar que información sensible quede expuesta.

Como mínimo, cada despliegue debe contemplar la actualización del código y las dependencias, la aplicación controlada de cambios de base de datos y configuración, la reconstrucción de cachés y una validación funcional posterior.
