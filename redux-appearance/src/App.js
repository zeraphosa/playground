import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div className="app">
      <h1>{t("header")}</h1>
      <button value="en" name="language" onClick={(e)=>changeLanguage(e)}>
        English
      </button>
      <button value="tr" name="language" onClick={(e)=>changeLanguage(e)}>
        Turkish
      </button>
      <button value="az" name="language" onClick={(e)=>changeLanguage(e)}>
        Azerbaijani
      </button>
    </div>
  );
}
