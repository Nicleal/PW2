import express from 'express';

import { se, se_composto, se_ifelse, se_switch, se_ternarios } from './Es_Cond.js';
import { se_dowhile, se_for, se_foreach, se_map, se_while } from './lacos_repeticao.js';
import { soma, subtracao, multiplicacao, divisao, resto, potenciacao, raizQuadrada } from './operacoes.js';
import { opLogNot, opLogOr, opLogAnd } from './opeLogicos.js';
import { maiorQue, menorQue, maiorOuIgualA, menorOuIgualA, igualA, diferenteDe } from './opeRelacionais.js';
import { se_somaTotal, se_adicao } from './vetores.js';
import { declaracao_let, declaracao_var, declaracao_const } from './declaracao.js';

const app = express();
const PORT = 3000;

// ---------------- Estruturas Condicionais ----------------
app.get('/condicionais', (req, res) => {
    let nota = 8;
    let nota2 = 9;
    let nota3 = 5;
    let dia = 3;
    let nota4 = 6;

    const output = `
    IF: ${se(nota)}
    IF Composto: ${se_composto(nota2)}
    IF-ELSE: ${se_ifelse(nota3)}
    SWITCH: ${se_switch(dia)}
    Ternário: ${se_ternarios(nota4)}
    `;

    res.send(output);
});

// ---------------- Laços ----------------
app.get('/lacos', (req, res) => {
    let n = 0;
    let i = 0;

    const output = `
    DO-WHILE: ${se_dowhile(n)}
    FOR: ${se_for()}
    FOR-EACH: ${se_foreach([1, 2, 3])}
    MAP: ${se_map([1, 2, 3])}
    WHILE: ${se_while(i)}
    `;
    res.send(output);
});

// ---------------- Operações ----------------
app.get('/operacoes', (req, res) => {
    let a = 16;
    let b = 5;

    const output = `
    Soma: ${soma(a, b)}
    Subtração: ${subtracao(a, b)}
    Multiplicação: ${multiplicacao(a, b)}
    Divisão: ${divisao(a, b)}
    Resto: ${resto(a, b)}
    Potenciação: ${potenciacao(a, b)}
    Raiz Quadrada: ${raizQuadrada(a)}
    `;

    res.send(output);
});

// ---------------- Lógicos ----------------
app.get('/logicos', (req, res) => {
    const output = `
    AND: ${opLogAnd()}
    NOT: ${opLogNot()}
    OR: ${opLogOr()}
    `;

    res.send(output);
});

// ---------------- Relacionais ----------------
app.get('/relacionais', (req, res) => {
    let x = 5;
    let y = 10;

    const output = `
    Maior que: ${maiorQue(x, y)}
    Menor que: ${menorQue(x, y)}
    Maior ou igual: ${maiorOuIgualA(x, y)}
    Menor ou igual: ${menorOuIgualA(x, y)}
    Igual: ${igualA(x, y)}
    Diferente: ${diferenteDe(x, y)}
    `;
    
    res.send(output);
});

// ---------------- Vetores ----------------
app.get('/vetores', (req, res) => {
    const lista = [10, 20, 30];
    const lista1 = [10, 20, 30];
    const lista2 = [10, 20, 30];
    const lista3 = [10, 20, 30];

    const output = `
    Soma Total: ${se_somaTotal(lista)}
    Adição: ${se_adicao(lista1)}
    Busca (20): ${lista2.includes(20)}
    Remoção: ${(() => { lista3.pop(); return lista3; })()}
    `;  

    res.send(output);
});

// ---------------- Declaração ----------------
app.get('/declaracao', (req, res) => {
    const output = `
    ''Declarador LET: ${declaracao_let()}
    Declarador VAR: ${declaracao_var()}
    Declarador CONST: ${declaracao_const()}
    `;

    res.send(output);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});