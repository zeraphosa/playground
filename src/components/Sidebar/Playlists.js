export default function Playlists() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto scrollbar scrollbar-thumb-[#4D4D4D] scrollbar-track-transparent">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a href="/" className="text-s text-link hover:text-white flex h-8 items-center">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const list = [
  "3. Çalma listem",
  "Türkçe şarkılar",
  "Yabancı",
  "Rock Classics",
  "Peaceful Piano",
  "Coding Mode",
  "Deep Focus",
  "Instrumental Study",
  "chill lofi study beats",
  "Soul Longe",
  "Are & Be",
  "Not Quite Classical",
  "Pop Goes Classical",
  "Easy Jazz",
  "Chill Out Jazz",
  "Radio Space",
  "Ted Talks Daily",
  "Inspirational Speeches",
  "All Out 80s",
  "All Out 2010s",
  "The Listening Room",
  "Coding Mode",
  "Deep Focus",
  "chill lofi study beats",
  "Soul Longe",
  "Are & Be",
  "Soul Longe",
  "Are & Be",
  "Not Quite Classical",
  "Pop Goes Classical",
  "Easy Jazz",
  "Chill Out Jazz",
  "Peaceful Piano",
  "Pop Goes Classical",
  "Easy Jazz",
];
