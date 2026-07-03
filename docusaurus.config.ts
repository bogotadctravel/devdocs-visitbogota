import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Visit Bogotá Docs',
  tagline: 'Documentación técnica · App oficial de turismo de Bogotá D.C.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://bogotadctravel.github.io',
  baseUrl: '/devdocs-visitbogota/',
  organizationName: 'bogotadctravel',
  projectName: 'devdocs-visitbogota',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/vb-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Visit Bogotá',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'appSidebar',
          position: 'left',
          label: 'App Móvil',
        },
        {
          type: 'docSidebar',
          sidebarId: 'webSidebar',
          position: 'left',
          label: 'Página Web',
        },
        {
          href: 'https://visitbogota.co',
          label: 'visitbogota.co',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'App',
          items: [
            { label: 'Resumen del Proyecto', to: '/intro' },
            { label: 'Arquitectura', to: '/arquitectura' },
            { label: 'Sistema de Diseño', to: '/design-system' },
          ],
        },
        {
          title: 'Desarrollo',
          items: [
            { label: 'Configuración', to: '/configuracion' },
            { label: 'Comandos', to: '/comandos' },
            { label: 'Dependencias', to: '/dependencias' },
          ],
        },
        {
          title: 'Página Web',
          items: [
            { label: 'Introducción', to: '/web/web-intro' },
            { label: 'Stack tecnológico', to: '/web/web-stack' },
            { label: 'Tipos de contenido', to: '/web/web-tipos-de-contenido' },
            { label: 'REST Endpoints', to: '/web/web-api-rest' },
            { label: 'visitbogota.co', href: 'https://visitbogota.co' },
          ],
        },
      ],
      copyright: `Visit Bogotá v4.0.1 · React Native 0.83.6 + Expo 55 · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'scss'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
