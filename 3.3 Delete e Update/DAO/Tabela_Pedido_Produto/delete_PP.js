import {conexao} from '../conexao.js'

async function delete_Pedido_Produto (id){
const data = [id]
const sql = `DELETE FROM Pedido_Produto WHERE id = ?`
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

export {delete_Pedido_Produto}