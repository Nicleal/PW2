import{se,se_composto, se_ifelse, se_switch, se_ternarios} from './Es_Cond.js';
//If
let nota = 8;
let res = se(nota)
console.log(res)

//IfComposto
 let nota2 = 9;
 let res2 = se_composto(nota2)
 console.log(res2)

 // IfElse
  let nota3 = 5;
  let res3 = se_ifelse(nota3)
  console.log(res3)

  //switch
   let dia = 3;
   let res4 = se_switch(dia)
   console.log(res4)

   //Ternarios

   let nota4 =6;
   let res5 = se_ternarios(nota4)
   console.log(res5)