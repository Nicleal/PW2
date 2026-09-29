import {conexao} from '../conexao.js'

async function upgradeProduto (id){
const data = [id]
const sql = `UPDATE Produto SET codigo = ?, nome = ?, descricao = ?, preco = ? WHERE id = ?`
const conn = await conexao()

try {
// Executar a consulta
const [results] = await conn.query(sql,[data]);

await conn.end()
return results
} catch (err) {
return err.message
}
}

export {upgradeProduto}