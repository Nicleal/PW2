import {conexao} from '../conexao.js'

async function deleteCliente (id){
const data = [id]
const sql = `DELETE FROM Cliente WHERE id = ?`
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

export {deleteCliente}