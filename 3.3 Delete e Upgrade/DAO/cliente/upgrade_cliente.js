import {conexao} from '../conexao.js'

async function upgradeCliente (infos){
const data = [infos]
const sql = `UPDATE Cliente SET codigo = ?, nome = ?, sobreNome = ?, cpf = ?, telefone = ?, id_limite = ?, id_endereco = ? WHERE id = ?`
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

export {upgradeCliente}