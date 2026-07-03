---
id: web-mantenimiento
sidebar_position: 6
---

# Mantenimiento y fuentes

## 7. Recomendaciones de mantenimiento

### 7.1 Revisión y trazabilidad editorial

Aunque todos los bundles crean una revisión por defecto, el equipo editorial debe registrar un mensaje de revisión que explique el cambio. Para contenidos críticos se recomienda comparar la versión anterior antes de publicar y evitar sobrescribir traducciones sin revisar el idioma activo.

### 7.2 Configuración y código

- Mantener `composer.lock` versionado.
- Exportar la configuración de Drupal después de cada cambio administrativo estructural.
- No modificar módulos contribuidos ni Drupal Core.
- Compilar Sass de forma reproducible y documentar el comando exacto en `package.json` o en una guía de desarrollo.
- Evitar lógica de negocio adicional en `visit_theme.theme`.
- Reducir gradualmente las plantillas dependientes de IDs de nodo.
- Revisar dependencias históricas de Domain antes de desinstalarlas.
- Verificar que los archivos de borrador no permanezcan dentro de `templates/`.

### 7.3 Seguridad

- Mantener Drupal Core, módulos contribuidos y librerías frontend en versiones soportadas.
- Revisar alertas de seguridad de Composer y Drupal.
- Validar extensiones, tamaño y permisos de los tipos de medio.
- Restringir permisos de administración y publicación por rol.
- Mantener reglas de Cloudflare para tráfico sospechoso y endpoints sensibles.
- Incorporar protección y límites de consumo para la API pública.

### 7.4 Información pendiente de completar

- Versión exacta de MySQL.
- Lista de módulos efectivamente habilitados.
- Configuración de cardinalidad, widgets y formatters de campos.
- Destino exacto de cada referencia a entidad.
- Configuración exportada de las Views REST.
- Proceso reproducible de compilación de Sass.
- Secuencia oficial y automatizada de despliegue.

## 8. Fuentes y alcance de esta documentación

Este archivo fue construido a partir de:

- Inventario de tipos de contenido y campos entregado en `tipos_contenido_visitbogota.xlsx`.
- Dependencias declaradas en `composer.json`.
- Archivos `visit_theme.info.yml`, `visit_theme.libraries.yml` y `visit_theme.theme`.
- Árbol de directorios y listado de plantillas suministrados para el theme.
- Información técnica confirmada por el equipo responsable.
- Revisión del sitio público `https://visitbogota.co` y de los endpoints REST indicados.

La documentación representa una línea base inicial. Debe actualizarse cada vez que cambien bundles, campos, vocabularios, tipos de medios, librerías, plantillas, Views REST o versiones principales del stack.
