class Turma {
    constructor(codigo) {
        this.codigo = codigo;
        this.nota = null; // Inicializa a nota como nula
    }

    aprovado() {
        return this.nota >= 6; // Considera que a nota mínima para aprovação é 6
    }
}

module.exports = Turma;
