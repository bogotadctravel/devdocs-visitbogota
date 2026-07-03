import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Card({
  icon,
  title,
  description,
  to,
  badge,
}: {
  icon: string;
  title: string;
  description: string;
  to: string;
  badge: string;
}) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.cardIcon}>{icon}</span>
      <span className={styles.cardBadge}>{badge}</span>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardCta}>Ver documentación →</span>
    </Link>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Inicio" description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Visit Bogotá</h1>
          <p className={styles.heroSub}>Documentación técnica del ecosistema digital</p>
        </div>
        <div className={styles.grid}>
          <Card
            icon="📱"
            title="App Móvil"
            description="React Native + Expo. Arquitectura, navegación, estado global, componentes, internacionalización y guía de desarrollo."
            to="/intro"
            badge="React Native 0.83.6 · Expo 55"
          />
          <Card
            icon="🌐"
            title="Página Web"
            description="Drupal 11 en visitbogota.co. Stack tecnológico, theme, tipos de contenido, endpoints REST y recomendaciones de mantenimiento."
            to="/web/web-intro"
            badge="Drupal 11.2.4 · visit_theme"
          />
        </div>
      </main>
    </Layout>
  );
}
