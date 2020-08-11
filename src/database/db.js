//importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//tilizar o objeto de banco de dados, para nossas operações
//  db.serialize(() => {
//     //Com comandos sql eu vou:
//     //1 - Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             city TEXT,
//             state TEXT,
//             items TEXT
//         );
//     `)

// //     //2 - Inserir dados na tabela
// //     const query = `
// //         INSERT INTO places(
// //             image,
// //             name,
// //             address, 
// //             address2, 
// //             state,
// //             city,
// //             items
// //         ) VALUES (?,?,?,?,?,?,?);
// //     `

// //     const values = [ //dados já inseridos por isso estão opacos, pq a linha de inserir está comentada
// //         "https://blog.brkambiental.com.br/wp-content/uploads/2019/07/original-1a6b1136e3124ca180ad5edd12ef61f3.jpg",
// //         "Papersider",
// //         "Guilherme Gemballa, Jardim América",
// //         "Número 260",
// //         "Santa Catarina",
// //         "Rio do Sul",
// //         "Papéis e Papelão"
// //     ]

// //     function afterInsertData(err) {
// //         if(err) {
// //             return console.log(err)
// //         }

// //         console.log("Cadastrado com sucesso!")
// //         console.log(this)
// //     }
// //    db.run(query, values, afterInsertData) //insere dados na tabela

//    //3 - Consultar dados da tabela
    // db.all(`SELECT * FROM places`, function(err,rows) {
      //   if(err) {
        //     return console.log(err)
      //   }
       //  console.log("Aqui estão os seus registros:")
       //  console.log(rows)
    // })

     //4 - Deletar os dados da tabela
     // db.run(`DELETE FROM places WHERE id= ?`, [8], function(err){
       //  if(err) {
         //    return console.log(err)
       //  }
       //  console.log("Registro deletado com sucesso!")
     // })

// })