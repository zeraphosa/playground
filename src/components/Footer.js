import { setLanguage, setDarkMode } from "../stores/site";
import { useSelector, useDispatch } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["az", "tr", "en"];

  return (
    <div>
      <p>======================================================</p>
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => {
              dispatch(setLanguage(lang));
            }}
            className={lang === language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? "Light moda gec" : "Dark moda gec"}
        </button>
      </div>
    </div>
  );
}
