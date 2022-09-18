export default function Navbar() {
  return (
    <div className="w-[100%] h-[7vh] flex items-center justify-between bg-gradient-to-r from-sky-500 to-indigo-500 px-[10%]">
      <div>Cv Maker by Therakep</div>
      <div className="flex gap-10">
        <a href="/">Home</a>
        <a href="/">Pricing</a>
        <a href="/">Login</a>
      </div>
    </div>
  );
}
