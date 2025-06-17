//9. Conversão Entre Formatos Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(){
    const array = [
  "TagFuncao:CN Evento:TODOS",
  "TagFuncao:DOC.AGRO.INDUS Evento:TODOS",
];

const nu_array = array.map((item) => {
  return { tagFuncao: item.match(/[^:]*\s/g)[0], evento: item.match(/[^:]*$/g)[0] };
});

return console.log(nu_array);

}

function objetosParaPares (objeto){



}

const persons = [
  {id:0, name:"Jean"}, 
  {id:2, name:"Ricardo"}, 
  {id:4, name:"Letiiicia"}, 
  {id:5, name:"Dai"}, 
  {id:7, name:"Tamy"}, 
  {id:10, name:"Abeu"}
];


function getPersonNames(persons) {
    const names = persons.map(function(person){
        return person.name;
    });
    return console.log(names);
    
}



console.log(getPersonNames(persons));
