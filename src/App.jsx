import "./App.css";
import "bulma";
import AlunosComponent from "./components/AlunosComponent";
import ListaAlunosComponent from "./components/ListaAlunosComponent.jsx";

function App() {
  return (
    <main className="box">
      <AlunosComponent />
      <ListaAlunosComponent />
    </main>
  );
}

export default App;
