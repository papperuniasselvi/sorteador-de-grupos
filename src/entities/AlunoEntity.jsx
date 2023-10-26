export default class AlunoEntity {
    constructor(nome, email, id) {
        this.nome = nome;
        this.email = email;
        this.id = id ? id : null;
    }
}