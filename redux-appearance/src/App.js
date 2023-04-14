import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();


  return (
    <div className="app">
      <h1>{t('header')}</h1>
      <p>{t('paragraph')}</p>
      <button value="en" name="language" onClick={(e) => i18n.changeLanguage(e.target.value)}>
        English
      </button>
      <button value="tr" name="language" onClick={(e) => i18n.changeLanguage(e.target.value)}>
        Turkish
      </button>
      <button value="az" name="language" onClick={(e) => i18n.changeLanguage(e.target.value)}>
        Azerbaijani
      </button>
    </div>
  );
}
