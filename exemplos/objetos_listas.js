var pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["A\u00E7ougueira"] = 1] = "A\u00E7ougueira";
    Profissao[Profissao["Malabarista"] = 2] = "Malabarista";
    Profissao[Profissao["Escriv\u00E3o"] = 3] = "Escriv\u00E3o";
    Profissao[Profissao["Atriz"] = 4] = "Atriz";
    Profissao[Profissao["Halterofilista"] = 5] = "Halterofilista";
})(Profissao || (Profissao = {}));
var andre = {
    nome: "André",
    idade: 44,
    profissao: "Malabarista"
};
var patricia = {
    nome: "Patricia",
    idade: 23,
    profissao: Profissao.Açougueira
};
var vanusa = {
    nome: 'Vanusa',
    idade: 34,
    profissao: Profissao.Halterofilista
};
var januario = {
    nome: 'Januário',
    idade: 12,
    materias: ['Introdução as Diretivas Literárias', 'Datilografia moderna', 'Excel', 'Análise e Compreensão do Ambiente Tribunalístico (ACAT)']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(januario.materias);
