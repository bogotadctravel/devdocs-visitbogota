import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  appSidebar: [
    {
      type: 'category',
      label: 'Proyecto',
      collapsible: false,
      items: [
        { type: 'doc', id: 'intro', label: 'Resumen del Proyecto' },
        { type: 'doc', id: 'configuracion', label: 'Configuración y Entorno' },
        { type: 'doc', id: 'arquitectura', label: 'Arquitectura General' },
      ],
    },
    {
      type: 'category',
      label: 'Navegación',
      collapsible: false,
      items: [
        { type: 'doc', id: 'rutas', label: 'Rutas (Expo Router)' },
      ],
    },
    {
      type: 'category',
      label: 'Datos y Lógica',
      collapsible: false,
      items: [
        { type: 'doc', id: 'redux', label: 'Estado Global (Redux)' },
        { type: 'doc', id: 'api', label: 'Capa API' },
        { type: 'doc', id: 'contextos', label: 'Contextos React' },
      ],
    },
    {
      type: 'category',
      label: 'UI y Features',
      collapsible: false,
      items: [
        { type: 'doc', id: 'componentes', label: 'Componentes UI' },
        { type: 'doc', id: 'itinerario', label: 'Feature: Itinerario' },
        { type: 'doc', id: 'i18n', label: 'Internacionalización' },
        { type: 'doc', id: 'design-system', label: 'Sistema de Diseño' },
      ],
    },
    {
      type: 'category',
      label: 'Referencia',
      collapsible: false,
      items: [
        { type: 'doc', id: 'dependencias', label: 'Dependencias' },
        { type: 'doc', id: 'comandos', label: 'Comandos' },
        { type: 'doc', id: 'permisos', label: 'Permisos' },
      ],
    },
  ],

  webSidebar: [
    {
      type: 'category',
      label: 'Página Web',
      collapsible: false,
      items: [
        { type: 'doc', id: 'web/web-intro', label: 'Introducción y contexto' },
        { type: 'doc', id: 'web/web-stack', label: 'Stack tecnológico' },
        { type: 'doc', id: 'web/web-theme', label: 'Estructura del theme' },
        { type: 'doc', id: 'web/web-tipos-de-contenido', label: 'Tipos de contenido' },
        { type: 'doc', id: 'web/web-api-rest', label: 'REST Endpoints' },
        { type: 'doc', id: 'web/web-mantenimiento', label: 'Mantenimiento y fuentes' },
      ],
    },
  ],
};

export default sidebars;
