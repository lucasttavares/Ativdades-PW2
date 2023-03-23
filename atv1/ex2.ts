interface pessoa{
    nome: string
    idade: number
    profissao: string
}

function pessoaDetalhe(pessoa: pessoa) {
    return `Nome: ${pessoa.nome} Idade: ${pessoa.idade} Profissão: ${pessoa.profissao}`;
}

let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
};

let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
};

console.log(pessoaDetalhe(pessoa1));
console.log(pessoaDetalhe(pessoa2));
console.log(pessoaDetalhe(pessoa3));
console.log(pessoaDetalhe(pessoa4));