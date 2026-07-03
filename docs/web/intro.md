---
id: web-intro
sidebar_position: 1
---

# Introducción y contexto

> Documentación técnica de `www.visitbogota.co`.

**Última actualización:** 2026-06-24
**Versión de Drupal documentada:** 11.2.4
**Alcance principal:** capa de aplicación, estructura editorial, theme y servicios REST.

## 1. Introducción

Este documento describe la estructura técnica inicial de Visit Bogotá desde la perspectiva de desarrollo y administración de la aplicación Drupal. Su objetivo es facilitar el mantenimiento del repositorio, la incorporación de nuevos desarrolladores, la revisión de cambios y la continuidad operativa del portal.

El alcance incluye el stack de aplicación, el theme personalizado, la organización de plantillas, los tipos de contenido activos, sus campos, los vocabularios de taxonomía, la gestión de medios y los endpoints REST usados por integraciones externas. La infraestructura se menciona únicamente cuando afecta el ciclo de desarrollo o despliegue.

### Principios funcionales confirmados

- Los 35 tipos de contenido inventariados están activos.
- El portal administra contenidos en español e inglés mediante el sistema de traducción de Drupal.
- Todos los tipos de contenido crean una nueva revisión por defecto.
- No existe actualmente un flujo formal de moderación editorial.
- Los contenidos se construyen mediante campos fijos; no se utilizan Paragraphs ni Layout Builder.
- Los archivos se administran de forma centralizada mediante la Biblioteca de medios.
- No se han identificado módulos personalizados como parte del alcance documentado.
- Las integraciones REST se implementan mediante displays **REST Export** de Drupal Views.

:::tip 🎬 Video sugerido — Recorrido del portal visitbogota.co

**Qué grabar:** Navegar el sitio en escritorio y móvil mostrando: portada, sección de atractivos, detalle de un evento, búsqueda global, cambio de idioma (ES/EN) y la sección Visit Conecta (MICE).

**Duración sugerida:** 4-5 min  
**Herramienta recomendada:** Grabación de pantalla del computador (OBS / QuickTime)

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## 2. ¿Qué es Visit Bogotá?

Visit Bogotá es el portal oficial de promoción turística de Bogotá administrado por el Instituto Distrital de Turismo. La plataforma presenta la oferta turística de la ciudad y organiza información para visitantes, residentes, operadores y actores del turismo de reuniones.

La experiencia pública incluye, entre otras áreas, atractivos, experiencias certificadas, rutas, establecimientos gastronómicos, alojamiento, agenda de eventos, información para planificar el viaje, contenidos editoriales, audioguías, banco audiovisual y el ecosistema MICE o Visit Conecta.

Además del sitio web, Drupal funciona como fuente estructurada para productos externos. Los endpoints REST son consumidos por la aplicación móvil de Visit Bogotá para Android e iOS y por los mapas digitales del ecosistema.

### Idiomas

- Español: prefijo `/es`.
- Inglés: prefijo `/en`.
- El prefijo de idioma aplica tanto a las páginas públicas como a los endpoints REST.
- Las entidades traducibles conservan el mismo identificador y bundle; Drupal resuelve la traducción según el contexto de idioma.
