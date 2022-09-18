import Templates from "components/Templates";

export default function Home() {
  return (
    <div className="px-[10%] w-[100%] h-[86vh] flex flex-col justify-around">
      <h1 className="flex justify-center items-center text-4xl font-semibold">
        Create resumes for&nbsp;<p className="border-b-2">free</p>
      </h1>
      <Templates />
      <button className="w-[200px] h-[40px] border-solid border-2 border-transparent rounded-3xl mx-auto bg-bl after:text-lg hover:scale-105">CREATE NOW</button>
    </div>
  );
}
