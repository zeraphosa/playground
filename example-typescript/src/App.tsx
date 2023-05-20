import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      Ts with react
      <Hello
        name={"Zera"}
        onSmthHappen={(name) => {
          console.log("hello");
        }}
      />
    </div>
  );
}

export default App;
