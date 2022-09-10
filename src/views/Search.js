import Title from "components/Title";
import categories from "data/categories";
import favorites from "data/favorites";
import { Icon } from "Icons";
import { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import WideCategoryItem from "components/WideCategoryItem";
import CategoryItem from "components/CategoryItem";

export default function Search() {
  const favoritesRef = useRef();
  const [prev, set_prev] = useState(false);
  const [next, set_next] = useState(false);

  function slideFavoriteNext() {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  }
  function slideFavoritePrev() {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  }

  useEffect(() => {
    if (favoritesRef.current) {
      function scrollHandle() {
        const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth == favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft == 0;
        set_prev(!isBegin);
        set_next(!isEnd);
      }
      scrollHandle();
      favoritesRef.current.addEventListener("scroll", scrollHandle);
      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  return (
    <>
      <section className="mb-8">
        <Title title={"En çok dinlediğin türler"} />
        <div className="relative">
          {prev && (
            <button className="w-12 h-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritePrev}>
              <Icon name="prev" size={24} />
            </button>
          )}

          {next && (
            <button className="w-12 h-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoriteNext}>
              <Icon name="next" size={24} />
            </button>
          )}

          <ScrollContainer className="flex overflow-x gap-x-6 scrollable" innerRef={favoritesRef}>
            {favorites.map((favorite, index) => (
              <WideCategoryItem key={index} favorite={favorite} />
            ))}
          </ScrollContainer>
        </div>
      </section>

      <section>
        <Title title={"Hepsine göz at"} />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
