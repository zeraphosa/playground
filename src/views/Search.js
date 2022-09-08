import Title from "components/Title";
import categories from "data/categories";
import favorites from "data/favorites";
import { useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function Category({ category }) {
  return (
    <div style={{ background: category.color }} className="relative rounded-md before:pt-[100%] before:block">
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">{category.title}</h3>
        <img src={category.cover} alt="" className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-5%] absolute bottom-0 right-0" />
      </div>
    </div>
  );
}

function WideCategory({ favorite }) {
  return (
    <div style={{ background: favorite.color }} className="relative rounded-lg w-[27.375rem] h-[13.75rem] flex-shrink-0">
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">{favorite.title}</h3>
        <img src={favorite.cover} alt="" className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-5%] absolute bottom-0 right-0" />
      </div>
    </div>
  );
}

export default function Search() {
  const favoritesRef = useRef();
  useEffect(() => {
    if (favoritesRef.current) {
      console.log(favoritesRef.current.container.current.scrollWidth);
    }
  }, [favoritesRef]);
  return (
    <>
      <section className="mb-4">
        <Title title={"En çok dinlediğin türler"} />
        <ScrollContainer className="flex overflow-x gap-x-6 scrollable" ref={favorites}>
          {favorites.map((favorite, index) => (
            <WideCategory key={index} favorite={favorite} />
          ))}
        </ScrollContainer>
      </section>

      <section>
        <Title title={"Hepsine göz at"} />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
