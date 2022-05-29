/* 
    Funções Puras
        - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
        - Não deverá sofrer nenhuma interferência do mundo externo a ela
        - Se o argumento é o mesmo, o retorno não poderá ser diferente quando função for chamada novamente
        - Não terá nenhum efeito colateral no seu código
            - Não irá modificar nenhum dado.
            - Não irá guardar nenhum estado.
*/

// EXEMPLO PARA COMPARAÇÃO ( IMPURA VS PURA)

// FUNÇÃO IMPURA
// Exemplo 1: Está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius) //Math é externo e está sendo alterado
}

// FUNÇÃO IMPURA
// Exemplo 2: Está alterando um dado externo
let person = {
    name: 'Rafael Camarada',
    age: 30
}

function changeName(name){
    person.name = name
}



// FUNÇÃO PURA
// Exemplo 1:
const calculateCircumference = function (pi, radius){
    return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)


// Exemplo 2
const changePersonName = (person, name) => ({ ...person , name})