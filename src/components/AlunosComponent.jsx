import { useState } from 'react';
import AlunoEntity from "../entities/AlunoEntity.jsx";
import AlunoRepository from "../repositories/AlunoRepository.jsx";

const AlunosComponent = () => {
  // Estado para armazenar a lista de alunos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
      //evita ações do formulario
      e.preventDefault();
      //criando novo aluno pela entidade
      const novoAluno = new AlunoEntity(nome, email);
      //Adicionando o novo aluno
      AlunoRepository.adicionar(novoAluno);
      //limpando o formulário
      setNome('');
      setEmail('');
  }

  return (
    <div>
      <h2>Adicionar Novo Aluno</h2>
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome:</label>
              <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
              />

              <label htmlFor="email">Email:</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit">Adicionar Aluno</button>
          </form>
      </div>
    </div>
  );
};

export default AlunosComponent;