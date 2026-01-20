import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button children="My Button" onclick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
