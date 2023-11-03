import { useState, useEffect } from "react";
import AlunoRepository from "../repositories/AlunoRepository";

const ListaAlunosComponent = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    // Recupera a lista de alunos ao montar o componente
    const alunosRecuperados = AlunoRepository.todos();
    setAlunos(alunosRecuperados);
  }, []);

  // Atualiza a lista de alunos a cada 0,2s. PALIATIVO.
  setTimeout(() => setAlunos(AlunoRepository.todos()), 200);

  const handleRemoverAluno = (aluno) => {
    if (!confirm("Você Realmente quer remover o aluno " + aluno.nome + "?")) {
      return;
    }
    // Remove um aluno pelo ID
    AlunoRepository.remover(aluno.id);
    // Atualiza a lista de alunos após a remoção
    setAlunos(AlunoRepository.todos());
  };

  return (
    <div className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <h2 className="subtitle mb-6">Lista de Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td className="has-text-left">{aluno.id}</td>
              <td className="has-text-left">{aluno.nome}</td>
              <td className="has-text-left">{aluno.email}</td>
              <td>
                <button
                  className="button is-danger"
                  onClick={() => handleRemoverAluno(aluno)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlunosComponent;
