import templates from "data/templates";
export default function Templates() {
  return (
    <div className="flex flex-row justify-between">
      {templates.map((item) => (
        <img key={item.id} src={item.src} alt={item.title} className="w-[350px] h-[450px] border-solid border-2 border-transparent object-cover hover:scale-105 cursor-pointer" />
      ))}
    </div>
  );
}
