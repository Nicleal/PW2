import {conexao} from '../conexao.js'

async function Pedido_Produto(){
    console.log('DAO de CLIENTE')
      const sql = `SELECT * FROM Pedido_Produto;`
      
      const conn = await conexao()
      try {
          // Executar a consulta
          const [rows, fields] = await conn.query(sql);
          await conn.end()
          return rows
        } catch (err) {
          return err.message
        }
  }

  export {Pedido_Produto}