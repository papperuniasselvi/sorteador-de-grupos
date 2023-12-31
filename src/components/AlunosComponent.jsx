import { useState } from "react";
import AlunoEntity from "../entities/AlunoEntity.jsx";
import AlunoRepository from "../repositories/AlunoRepository.jsx";
import FormInput from "./FormInput.jsx";

const AlunosComponent = () => {
  // Estado para armazenar a lista de alunos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //criando novo aluno pela entidade
    const novoAluno = new AlunoEntity(nome, email);
    //Adicionando o novo aluno
    AlunoRepository.adicionar(novoAluno);
    //limpando o formulário
    setNome("");
    setEmail("");
  };

  return (
    <>
      <h2 className="title">Cadastro de alunos</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Nome"
            placeholder="Ex: Lucas Novack"
            type="text"
            value={nome}
            id="nome"
            onChange={setNome}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="Ex: rogerio@gmail.com"
            value={email}
            id="email"
            onChange={setEmail}
          />
          <div className="buttons is-right">
            <button className="button is-primary my-4" type="submit">
              Adicionar Aluno
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AlunosComponent;
