//  Filtrar e Classificar Alunos
//  Crie uma função que recebe um array de objetos representando alunos, onde cada objeto tem o nome e a nota do aluno. O objetivo da função é filtrar todos os alunos que têm nota maior ou igual a 7 e, em seguida, classificar esses alunos em ordem decrescente de nota.

const alunos = [
    { nome: 'Carlos', nota: 8.5 },
    { nome: 'Lucas', nota: 5.0 },
    { nome: 'Ana', nota: 9.2 },
    { nome: 'Mariana', nota: 6.8 },
    { nome: 'João', nota: 7.5 },
];

function desafio10(alunos) {
    let n = alunos.nota
    if (n >= 7) {
        return alunos.nota.filter(desafio10(alunos))
    }
      
}

console.log(desafio10(alunos)); 
