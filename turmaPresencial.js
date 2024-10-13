const Turma = require('./turma');

class TurmaPresencial extends Turma {
    constructor(codigo, frequencia) {
        super(codigo);
        this.frequencia = frequencia;
    }

    aprovado() {
        // Considera a aprovação com base na nota e na frequência
        return super.aprovado() && this.frequencia >= 75; // Exige 75% de frequência
    }
}

module.exports = TurmaPresencial;
