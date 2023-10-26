import AlunoEntity from "../entities/AlunoEntity.jsx";

export default class AlunoRepository
{
    static todos()
    {
        const alunosJSON = localStorage.getItem('alunos');
        return alunosJSON ? JSON.parse(alunosJSON) : [];
    }

    static adicionar(aluno)
    {
        aluno.id = this.generateId();
        const alunos = this.todos();
        alunos.push(aluno);
        localStorage.setItem('alunos', JSON.stringify(alunos));
        return aluno;
    }

    static atualizar(aluno)
    {
        const alunos = this.todos();
        const indice = alunos.findIndex(al => al.id === aluno.id);

        if (indice !== -1) {
            alunos[indice] = aluno;
            localStorage.setItem('aluno', JSON.stringify(alunos));
            return true;
        }
        return false;
    }

    static remover(idAluno)
    {
        const alunos = this.todos();
        const alunosAtualizados = alunos.filter(aluno => aluno.id !== idAluno);
        localStorage.setItem('alunos', JSON.stringify(alunosAtualizados));
    }

    static generateId()
    {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
}