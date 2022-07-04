const pessoa = {
    nome: 'Mariana', 
    idade: 28, 
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

enum Profissao {
    Professora, 
    Açougueira, 
    Malabarista, 
    Escrivão, 
    Atriz, 
    Halterofilista
}

interface IPessoa {
    nome: string, 
    idade: number, 
    profissao?: Profissao
}

interface IEstudante extends IPessoa {
    materias: string[]
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 44, 
    profissao: "Malabarista"
}

const patricia: {nome: string, idade: number, profissao: Profissao} = {
    nome: "Patricia",
    idade: 23, 
    profissao: Profissao.Açougueira
}

const vanusa: IPessoa = {
    nome: 'Vanusa',
    idade: 34, 
    profissao: Profissao.Halterofilista
}

const januario: IEstudante = {
    nome: 'Januário', 
    idade: 12, 
    materias: ['Introdução as Diretivas Literárias', 'Datilografia moderna', 'Excel', 'Análise e Compreensão do Ambiente Tribunalístico (ACAT)']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(januario.materias);
