import { Icon } from "Icons";

export default function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon size={24} name="search" />
      </label>
      <input type="text" id="search-input" className="pl-12 outline-none text-black h-10 max-w-full w-[22.75rem] bg-white rounded-3xl placeholder-black/50 text-sm" placeholder="Sanatçılar, şarkılar veya podcast'ler" />
    </div>
  );
}
