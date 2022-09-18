import Templates from "components/Templates";

export default function Home() {
  return (
    <div className="px-[10%] w-[100%] h-[80vh] border-solid border-2 border-red-600 flex flex-col justify-around">
      <div className="flex justify-center items-center text-4xl">Choose a cv template.</div>
      <Templates />
      <button className="w-[200px] h-[40px] border-solid border-2 border-transparent rounded-full mx-auto bg-secondary text-lg">Load More</button>
    </div>
  );
}
