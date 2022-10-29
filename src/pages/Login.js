import "../styles/login.css";
import "../styles/style.css";
export default function Login() {
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <div className="login_inputs">
        <input type="text" value={""} className="input" />
        <input type="text" value={""} className="input" />
        <button className="button">{"->"}</button>
      </div>
    </div>
  );
}
