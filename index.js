const Aluno = require('./aluno');
const Turma = require('./turma');
const TurmaPresencial = require('./turmaPresencial');

const aluno1 = new Aluno('João Silva', 'joao.silva', '123456');
const turma1 = new Turma('TURMA001');
turma1.nota = 7;

console.log(`Aluno: ${aluno1.nome}, Aprovado: ${turma1.aprovado()}`); // Aprovado: true

const turmaPresencial1 = new TurmaPresencial('TURMA002', 80);
turmaPresencial1.nota = 5;

console.log(`Turma Presencial: ${turmaPresencial1.codigo}, Aprovado: ${turmaPresencial1.aprovado()}`); // Aprovado: false
