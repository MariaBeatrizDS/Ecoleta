const express = require("express")
const server = express()

//pegar banco de dados
const db = require("./database/db.js")

//configurar pasta publica
server.use(express.static("public"))

//abilitar o uso do re.body na aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCashe: true //sem cashe
})

//Configurar rotas

//Página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", )
})

//mudar no html os hrefs para voltar sem o .html se não funciona
server.get("/create-point", (req, res) => {
    //res.Query: Query Strings da nossa url
    //console.log(req.query)


    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    //req.body: corpo do nosso formulário
    //console.log(req.body)

    //inserir dados no bvanco de dados
    //2 - Inserir dados na tabela
    const query = `
        INSERT INTO places(
            image,
            name,
            address, 
            address2, 
            city,
            state,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [ 
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.city,
        req.body.state,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
        console.log(err)
        return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }
   db.run(query, values, afterInsertData)
    
})

server.get("/search", (req, res) => {
    const search =  req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }



    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows) {
    if(err) {
        return console.log(err)
    }
    const total = rows.length
    //mostrar a página html com os dados do banco de dados
    return res.render("search-results.html", {places: rows, total: total})
    })  

})

//ligar o servidor
server.listen(3000) //escuta a porta 3000 até ela ser ligada

