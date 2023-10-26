import { useState, useEffect } from 'react';
import AlunoRepository from '../repositories/AlunoRepository';

const ListaAlunosComponent = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    // Recupera a lista de alunos ao montar o componente
    const alunosRecuperados = AlunoRepository.todos();
    setAlunos(alunosRecuperados);
  }, []);

  const handleRemoverAluno = (aluno) => {
    if (!confirm('Você Realmente quer remover o aluno ' + aluno.nome + '?')) {
      return;
    }
    // Remove um aluno pelo ID
    AlunoRepository.remover(aluno.id);
    // Atualiza a lista de alunos após a remoção
    setAlunos(AlunoRepository.todos());
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>
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
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>
                <button onClick={() => handleRemoverAluno(aluno)}>
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
