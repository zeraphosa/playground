export default function Playlists() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto scrollbar scrollbar-thumb-[#4D4D4D] scrollbar-track-transparent">
      <ul>
        {new Array(30).fill(
          <li>
            <a href="/" className="text-s text-link hover:text-white flex h-8 items-center">
              22. Çalma listem
            </a>
          </li>,
        )}
      </ul>
    </nav>
  );
}
