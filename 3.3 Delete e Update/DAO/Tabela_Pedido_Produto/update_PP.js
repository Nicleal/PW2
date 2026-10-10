import {conexao} from '../conexao.js'

async function upgradePedido_Produto (infos){
const data = [infos]
const sql = `UPDATE Pedido_Produto SET id_pedido = ?, id_produto = ?, WHERE id = ?`
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

export {upgradePedido_Produto}