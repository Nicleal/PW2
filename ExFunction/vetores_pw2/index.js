import {se_somaTotal, se_adicao, se_busca,se_remocao} from './vetores.js';

//Soma total
const lista = [10,20,30];
const res = se_somaTotal(lista);
console.log(res);

//Adicao
const lista1 = [10,20,30];
const res1 = se_adicao(lista1);
console.log(res1);

//Busca
const lista2 = [10,20,30];
const res2 = lista2.includes(20);
console.log("Tem 20?", res2);

//remocao
const lista3 = [10,20,30];
const res3 = lista3.pop();
console.log("Após remover:", lista3);