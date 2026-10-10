import {conexao} from '../conexao.js'

async function updateLimite (infos){
const data = [infos]
const sql = `UPDATE Limite SET nome = ? WHERE id = ?`
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

export {updateLimite}