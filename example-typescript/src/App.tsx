import Hello from "./components/Hello";

export default function App() {
  return (
    <div className="App">
      Ts with react
      <Hello
        name={"Zera"}
        onSmthHappen={(name) => {
          console.log(`hello ${name}`);
        }}
      />
    </div>
  );
}
