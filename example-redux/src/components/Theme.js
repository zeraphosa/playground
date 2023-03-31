export default function Theme({ theme, setTheme }) {
  return (
    <div>
      <button onClick={() => setTheme(!theme)}>Change theme</button>
    </div>
  );
}
