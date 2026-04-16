import express from 'express';

import { se, se_composto, se_ifelse, se_switch, se_ternarios } from './Es_Cond.js';
import { se_dowhile, se_for, se_foreach, se_map, se_while } from './lacos_repeticao.js';
import { soma, subtracao, multiplicacao, divisao, resto, potenciacao, raizQuadrada } from './operacoes.js';
import { opLogNot, opLogOr, opLogAnd } from './opeLogicos.js';
import { maiorQue, menorQue, maiorOuIgualA, menorOuIgualA, igualA, diferenteDe } from './opeRelacionais.js';
import { se_somaTotal, se_adicao } from './vetores.js';
import { declaracao_let, declaracao_var, declaracao_const } from './declaracao.js';

const app = express();
app.use(express.json());

const PORT = 3000;

// ---------------- Estruturas Condicionais ----------------
app.get('/condicionais/:nota/:nota2/:nota3/:dia/:nota4', (req, res) => {
    let {nota} = req.params
    let {nota2} = req.params
    let {nota3} = req.params
    let {dia} = req.params
    let {nota4} = req.params

    res.json({
        if: se(nota),
        ifComposto: se_composto(nota2),
        ifElse: se_ifelse(nota3),
        switch: se_switch(parseInt(dia)),
        ternario: se_ternarios(nota4)
    });
});

// ---------------- Laços ----------------
app.get('/lacos', (req, res) => {
    let {n} = req.query
    let {i} = req.query

    res.json({
        doWhile: se_dowhile(n),
        for: se_for(),
        forEach: se_foreach([1,2,3]),
        map: se_map([1,2,3]),
        while: se_while(i)
    });
});

// ---------------- Operações ----------------
app.get('/operacoes/:a/:b', (req, res) => {
    let {a} = req.params
    let {b} = req.params

    res.json({
        soma: soma((a, b)),
        subtracao: subtracao(a, b),
        multiplicacao: multiplicacao(a, b),
        divisao: divisao(a, b),
        resto: resto(a, b),
        potenciacao: potenciacao(a, b),
        raizQuadrada: raizQuadrada(a)
    });
});

// ---------------- Lógicos ----------------
app.get('/logicos', (req, res) => {
    let {idade} = req.query
    let {idade2} = req.query

    res.json({
        and: opLogAnd(),
        not: opLogNot(),
        or: opLogOr()
    });
});

// ---------------- Relacionais ----------------
app.get('/relacionais/:x/:y', (req, res) => {
    let x = req.params;
    let y = req.params;

    res.json({
        maiorQue: maiorQue(x,y),
        menorQue: menorQue(x,y),
        maiorOuIgual: maiorOuIgualA(x,y),
        menorOuIgual: menorOuIgualA(x,y),
        igual: igualA(x,y),
        diferente: diferenteDe(x,y)
    });
});

// ---------------- Vetores ----------------
app.get('/vetores/:n1/:n2/:n3', (req, res) => {
    const { n1, n2, n3 } = req.params;

    const lista  = [Number(n1), Number(n2), Number(n3)];
    const lista1 = [Number(n1), Number(n2), Number(n3)];
    const lista2 = [Number(n1), Number(n2), Number(n3)];
    const lista3 = [Number(n1), Number(n2), Number(n3)];

    res.json({
        somaTotal: se_somaTotal(lista),
        adicao: se_adicao(lista1),
        busca: lista2.includes(20),
        remocao: (() => {
            lista3.pop();
            return lista3;
        })()
    });
});

// ---------------- Declaração ----------------
app.get('/declaracao/:nome/:idade/:idUser', (req, res) => {
    res.json({
        Declarador_let: declaracao_let(),
        Declarador_var: declaracao_var(),
        Declarador_const: declaracao_const()
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});