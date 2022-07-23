function App() {
  return (
    <div className="App">
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.REACT_APP_API_URL}</div>
    </div>
  );
}

export default App;
