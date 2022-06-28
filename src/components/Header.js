import { useSelector } from "react-redux";

export default function Header() {
  const { dark, language } = useSelector((state) => state.site);

  return (
    <div>
      <div>
        dark mode = {dark ? 'true' : 'false'} <br/>
        language = {language}
      </div>
      <p>======================================================</p>
    </div>
  );
}
