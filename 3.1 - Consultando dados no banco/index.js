import express from 'express'
import { buscarClientes } from './DAO/cliente/buscar_cliente.js'
import { Limite } from './DAO/Tabela_limite/Buscar_Limite.js'
import { Endereco } from './DAO/Tabela_endereco/buscar_endereco.js'
import { Produto } from './DAO/Tabela_Produto/buscar_Produto.js'
import { Pedido } from './DAO/Tabela_Pedido/Buscar_Pedido.js'
import { Pedido_Produto } from './DAO/Tabela_Pedido_Produto/Buscar_PP.js'

const app = express()

// Middleware obrigatório para o Express conseguir ler o corpo (body) das requisições em formato JSON
app.use(express.json())

// Rota Base
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Estacionamento Rodando perfeitamente!' })
})


app.get('/Cliente', async (req, res) => {

    let cliente = await buscarClientes();
    res.json(cliente); 
})

app.get('/Limite', async (req, res) => {

    let limite = await Limite();
    res.json(limite); 
})

app.get('/Endereco', async (req, res) => {

    let endereco = await Endereco();
    res.json(endereco); 
})

app.get('/Produto', async (req, res) => {

    let produto = await Produto();
    res.json(produto); 
})

app.get('/Pedido', async (req, res) => {

    let pedido = await Pedido();
    res.json(pedido); 
})

app.get('/Pedido_Produto', async (req, res) => {

    let pedido_produto = await Pedido_Produto();
    res.json(pedido_produto); 
})


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
