import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs & i18next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button className={styles.navItem} onClick={() => switchLanguage('en')}>
          ENGLISH
        </button>
        <button className={styles.navItem} onClick={() => switchLanguage('fr')}>
          FRENCH
        </button>
        <p>{t('Welcome to React')}</p>
      </main>
    </div>
  );
}
