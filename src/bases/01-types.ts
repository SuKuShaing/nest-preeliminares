export let name = "Seba";

export const age: number = 32;

export const isValid: boolean = true;

name = "Claudia";

export const templateString = `Esto es un string
multilinea
que puede tener 
" dobles "
' simples '
inyectar valores \$ ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos: ${isValid}
`;

console.log(templateString);
