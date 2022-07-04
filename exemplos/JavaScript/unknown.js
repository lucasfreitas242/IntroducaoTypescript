var tipoAny;
tipoAny = 3;
tipoAny = true;
tipoAny = 'teste';
var stringTeste = 'verificar';
stringTeste = tipoAny;
var tipoUnknown;
tipoUnknown = 3;
tipoUnknown = true;
tipoUnknown = 'teste';
// stringTeste = tipoUnknown; Type 'unknown' is not assignable to type 'string'.
if (typeof tipoUnknown === 'string') {
    stringTeste = tipoUnknown;
}
