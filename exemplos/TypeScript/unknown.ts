let tipoAny: any;

tipoAny = 3;
tipoAny = true;
tipoAny = 'teste';

let stringTeste: string = 'verificar';

stringTeste = tipoAny;

let tipoUnknown: unknown;
tipoUnknown = 3;
tipoUnknown = true;
tipoUnknown = 'teste';

// stringTeste = tipoUnknown; Type 'unknown' is not assignable to type 'string'.

if (typeof tipoUnknown === 'string') {
    stringTeste = tipoUnknown;
}