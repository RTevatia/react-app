import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onclick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
