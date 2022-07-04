function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("deu erro", 500);
