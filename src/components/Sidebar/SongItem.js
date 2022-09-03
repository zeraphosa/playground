import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "stores/player";

export default function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);

  function imageStyle(item) {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  }
  function updateCurrent() {
    dispatch(setCurrent(item));
  }
  return (
    <NavLink to="/" key={item.id} className="bg-footer p-4 rounded hover:bg-active group">
      <div className="pt-[100%] relative mb-4">
        <img src={item.image} alt="img" className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />
        <button onClick={updateCurrent} className="w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center  hidden">
          <Icon size={16} name={current?.id === item.id ? "pause" : "play"} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">{item.title}</h6>
      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}
