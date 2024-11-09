import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
function App() {
  return (
    <>
      <h1 className="text-center py-5 text-4xl font-bold">Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </>
  );
}

export default App;
