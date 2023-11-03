import AlunosComponent from "../components/AlunosComponent.jsx";
import ListaAlunosComponent from "../components/ListaAlunosComponent.jsx";

export default function Home() {
  return (
    <main className="box">
      <AlunosComponent />
      <ListaAlunosComponent />
    </main>
  );
}
