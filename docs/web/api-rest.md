---
id: web-api-rest
sidebar_position: 5
---

# REST Endpoints para integraciones

## 6.1 Arquitectura

Los servicios se construyen mediante displays **REST Export** de Drupal Views y entregan respuestas JSON. Las rutas están versionadas bajo `/api/v3/` y se publican en español e inglés cambiando el prefijo de idioma.

```text
https://visitbogota.co/{lang}/api/v3/{resource}

{lang} = es | en
```

Características actuales:

- Método principal: `GET`.
- Autenticación: no requerida.
- Formato: JSON.
- Consumidores confirmados: aplicación móvil Android, aplicación móvil iOS y mapas digitales.
- Capa de construcción: Drupal Views.
- Traducción: contexto de idioma definido por `/es` o `/en`.

:::tip 🎬 Video sugerido — Demostración de los endpoints REST

**Qué grabar:** Abrir cada endpoint en el navegador (o Postman/Insomnia) mostrando la respuesta JSON: `/es/api/v3/atractivos/all`, `/es/api/v3/audioguias/all`, `/es/api/v3/destacados`. Cambiar el prefijo a `/en/` para mostrar la traducción. Señalar campos clave que consume la app móvil.

**Duración sugerida:** 3-4 min  
**Herramienta recomendada:** Grabación de pantalla del computador con Postman o el navegador

_Reemplazar este bloque con `<video src="..." controls width="100%" />` o embed de Loom cuando esté disponible._
:::

## 6.2 Inventario

| Recurso | Ruta | Método | Fuente principal | Uso |
|---|---|---|---|---|
| Destacados | `/{lang}/api/v3/destacados` | GET | Tipo `destacados` | Publicación de accesos y campañas destacadas. |
| Audioguía por ID | `/{lang}/api/v3/audioguias/{id}` | GET | Tipo `audioguias` | Consulta de una audioguía mediante filtro contextual. |
| Audioguías | `/{lang}/api/v3/audioguias/all` | GET | Tipo `audioguias` | Listado completo de audioguías para aplicaciones. |
| Categorías turísticas | `/{lang}/api/v3/turistic-categories` | GET | Vocabulario Categorías turísticas | Catálogo de categorías para navegación y filtros. |
| Recomendaciones | `/{lang}/api/v3/recomendaciones` | GET | Vocabulario Recomendaciones | Catálogo de perfiles o acompañantes de viaje. |
| Atractivos | `/{lang}/api/v3/atractivos/all` | GET | Tipo `atractivos` | Inventario turístico y datos geográficos para app y mapas. |
| Experiencias | `/{lang}/api/v3/experiencias/all` | GET | Tipo `experiencias` | Inventario de experiencias turísticas. |

## 6.3 Contratos de respuesta

### Destacados

Campos de respuesta:

- `title`
- `view_node`
- `field_banner`
- `field_weblink`

Ejemplo de forma:

```json
[
  {
    "title": "Nombre del destacado",
    "view_node": "/es/node/1234",
    "field_banner": "/sites/default/files/archivo.webp",
    "field_weblink": "https://destino.example"
  }
]
```

### Audioguías

Campos de respuesta en el listado:

- `title`
- `view_node`
- `field_audios`
- `body`
- `field_destacar_en_la_app`
- `field_mainimg`
- `field_totaltime`
- `field_audiotitles`
- `nid`

El endpoint con `{id}` recibe el identificador del nodo como filtro contextual de la View. El parámetro se configura en el display REST Export dentro de la sección de filtros contextuales.

### Atractivos

Campos de respuesta en la respuesta pública:

- `title`
- `view_node`
- `body`
- `field_mainimg`
- `nid`
- `field_turcat`
- `field_correo`
- `field_direccion`
- `field_duracion_de_la_visita_new`
- `field_imperdible`
- `field_picgallery`
- `field_horarios`
- `field_latlong`
- `field_mapslink`
- `field_weblink`
- `field_turdistr`
- `field_turpara`
- `field_recorrido_360`
- `field_audio`
- `field_tursubcat`
- `field_telefono`
- `field_valor_de_la_entrada`
- `field_turzone`
- `field_como_llegar_enr`

### Experiencias

Campos de respuesta, como mínimo:

- `title`
- `view_node`
- `body`
- `field_mainimg`
- `nid`
- `field_accesibilidad`
- `field_video`
- `field_maxpeople`
- `field_minpeople`
- `field_turcat`
- `field_contenidos_relacionados`
- `field_direccion`
- `field_company`
- `field_picgallery`
- `field_idioma_del_servicio`
- `field_introduccion`
- Otros campos configurados en la View según el contrato vigente.

### Categorías turísticas y recomendaciones

Estos endpoints publican términos de taxonomía. Los aliases exactos de las propiedades dependen de los campos seleccionados en cada display REST Export. Se debe exportar o inspeccionar la configuración de las Views antes de tratar su respuesta como un contrato estable.

## 6.4 Consideraciones para mantener los endpoints

- Los nombres de las propiedades JSON dependen de los aliases configurados en Views.
- Cambiar, eliminar o reordenar campos en un display puede romper la aplicación móvil o los mapas.
- Las rutas deben conservar la versión `/v3/` mientras existan consumidores activos.
- Los campos multivalor se serializan como cadenas separadas por comas; los consumidores deben manejar este formato hasta que se normalice el esquema.
- El cuerpo incluye HTML y debe procesarse como contenido enriquecido.
- Las rutas de archivos pueden ser relativas a `visitbogota.co`.
- Los endpoints públicos no requieren token ni API key.
- En una siguiente iteración se recomienda implementar autenticación o identificación de consumidores, rate limiting, monitoreo, documentación OpenAPI y pruebas contractuales.
- Cloudflare puede aplicar límites de tráfico y reglas específicas sin modificar Drupal, pero estas reglas deben coordinarse con las aplicaciones móviles y los mapas para evitar bloqueos legítimos.

## 6.5 Estrategia sugerida de evolución

1. Exportar la configuración de todas las Views REST y almacenarla en el repositorio.
2. Definir un contrato de respuesta por endpoint, con tipos de dato, obligatoriedad y ejemplos.
3. Crear pruebas automáticas que validen códigos HTTP, propiedades obligatorias y traducciones.
4. Mantener compatibilidad retroactiva dentro de `/v3/` y crear `/v4/` para cambios incompatibles.
5. Implementar autenticación gradual o claves por consumidor, sin interrumpir las aplicaciones existentes.
6. Aplicar rate limiting y monitoreo por ruta desde Cloudflare.
