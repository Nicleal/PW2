//Inserts
import express from 'express'
import { buscarClientes } from './DAO/cliente/buscar_cliente.js'
import { Limite } from './DAO/Tabela_limite/Buscar_Limite.js'
import { Endereco } from './DAO/Tabela_endereco/buscar_endereco.js'
import { Produto } from './DAO/Tabela_Produto/buscar_Produto.js'
import { Pedido } from './DAO/Tabela_Pedido/Buscar_Pedido.js'
import { Pedido_Produto } from './DAO/Tabela_Pedido_Produto/Buscar_PP.js'
import { inserir_Cliente } from './DAO/cliente/inserir_cliente.js'
//deletes
import {deleteCliente } from './DAO/cliente/delete_cliente.js'
import {deleteProduto } from './DAO/Tabela_Produto/delete_Produto.js'
import {deletePedido} from './DAO/Tabela_Pedido/delete_Pedido.js'
import {delete_Pedido_Produto} from './DAO/Tabela_Pedido_Produto/delete_PP.js'
import {deleteLimite} from './DAO/Tabela_limite/delete_Limite.js'
import {deleteEndereco} from './DAO/Tabela_endereco/delete_Endereco.js'
//upgrades
import {updateCliente} from './DAO/cliente/update_cliente.js'
import {updateProduto} from './DAO/Tabela_Produto/update_Produto.js'
import {updatePedido} from './DAO/Tabela_Pedido/update_Pedido.js'
import {updatePedido_Produto} from './DAO/Tabela_Pedido_Produto/update_PP.js'
import {updateLimite} from './DAO/Tabela_limite/update_Limite.js'
import {updateEndereco} from './DAO/Tabela_endereco/update_endereco.js'

const app = express()

// Middleware obrigatório para o Express conseguir ler o corpo (body) das requisições em formato JSON
app.use(express.json())

// Rota Base
app.get('/', (req, res) => {
    res.json({ mensagem: 'API deEstacionamento Rodando perfeitamente!'})
})

app.get('/Cliente', async (req, res) => {

    let cliente = await buscarClientes();
    res.json(cliente); 
})


//Upgrades
app.put('/upgrade_Cliente', async (req, res) => {
    const { codigo, nome, sobreNome, cpf,telefone, id_limite, id_endereco } = req.body;
    const infos = [codigo, nome, sobreNome,cpf, telefone, id_limite, id_endereco]
    let results = await updateCliente(infos);
    res.json(results);
})


app.put('/upgrade_Limite', async (req, res) => {
    let { id_limite, nome } = req.body;
    let infos = [id_limite, nome]
    let results = await updateLimite(infos);
    res.json(results);
})

app.put('/upgrade_Endereco', async (req, res) => {
    let { id_endereco, logradouro, numero,
    cep, cidade } = req.body;
    let infos = [id_endereco, logradouro,
    numero, cep, cidade]
    let results = await updateEndereco(infos);
    res.json(results);
})

app.put('/upgrade_Produto', async (req, res) => {
    let { codigo, nome, descricao, preco } = req.body;
    let infos = [codigo, nome, descricao,preco]
    let results = await updateProduto(infos);
    res.json(results);
})

app.put('/upgrade_Pedido', async (req, res) => {
    let { numero, data_elaboracao,id_cliente } = req.body;
    let infos = [numero, data_elaboracao,id_cliente]
    let results = await updatePedido(infos);
    res.json(results);
})

app.put('/upgradePedido_Produto', async (req, res) => {
    let { id_pedido, id_produto } = req.body;
    let infos = [id_pedido, id_produto]
    let results = await updatePedido_Produto(infos);
    res.json(results);
})



// Deletes
app.delete('/delete_Cliente', async (req, res) => {
    const { codigo, nome, sobreNome, cpf,telefone, id_limite, id_endereco } = req.body;
    const infos = [codigo, nome, sobreNome,cpf, telefone, id_limite, id_endereco]
    let results = await deleteCliente(infos);
    res.json(results);
})

app.delete('/delete_Limite', async (req, res) => {
    let { id_limite, nome } = req.body;
    let infos = [id_limite, nome]
    let results = await deleteLimite(infos);
    res.json(results);
})

app.delete('/delete_Endereco', async (req, res) => {
    let { id_endereco, logradouro, numero, cep, cidade } = req.body;
    let infos = [id_endereco, logradouro,numero, cep, cidade]
    let results = await deleteEndereco(infos);
    res.json(results);
})

app.delete('/delete_Produto', async (req, res) => {
    let { codigo, nome, descricao, preco } = req.body;
    let infos = [codigo, nome, descricao,preco]
    let results = await deleteProduto(infos);
    res.json(results);
})

app.delete('/delete_Pedido', async (req, res) => {
    let { numero, data_elaboracao,id_cliente } = req.body;
    let infos = [numero, data_elaboracao,id_cliente]
    let results = await deletePedido(infos);
    res.json(results);
})

app.delete('/delete_Pedido_Produto', async (req, res) => {
    let { id_pedido, id_produto } = req.body;
    let infos = [id_pedido, id_produto]
    let results = await delete_Pedido_Produto(infos);
    res.json(results);
})

// Inserir 
app.post('/inserir_Cliente', async (req, res) => {
    const { codigo, nome, sobreNome, cpf,telefone, id_limite, id_endereco } = req.body;
    const infos = [codigo, nome, sobreNome,cpf, telefone, id_limite, id_endereco]
    let results = await inserir_Cliente(infos);
    res.json(results);
})

app.post('/Limite', async (req, res) => {
    let { id_limite, nome } = req.body;
    let infos = [id_limite, nome]
    let results = await Limite(infos);
    res.json(results);
})

app.post('/Endereco', async (req, res) => {
    let { id_endereco, logradouro, numero,cep, cidade } = req.body;
    let infos = [id_endereco, logradouro,numero, cep, cidade]
    let results = await Endereco(infos);
    res.json(results);
})

app.post('/Produto', async (req, res) => {
    let { codigo, nome, descricao, preco } = req.body;
    let infos = [codigo, nome, descricao,preco]
    let results = await Produto(infos);
    res.json(results);
})

app.post('/Pedido', async (req, res) => {
    let { numero, data_elaboracao,id_cliente } = req.body;
    let infos = [numero, data_elaboracao,id_cliente]
    let results = await Pedido(infos);
    res.json(results);
})

app.post('/Pedido_Produto', async (req, res) => {
    let { id_pedido, id_produto } = req.body;
    let infos = [id_pedido, id_produto]
    let results = await Pedido_Produto(infos);
    res.json(results);
})


// Inicialização do Servidor
app.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000')
})
