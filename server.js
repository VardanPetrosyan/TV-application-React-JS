const dataJSON = require('./public/JSON/data.json')

const jsonServer = require('json-server') //1

const server = jsonServer.create()//2
const router = jsonServer.router(dataJSON)//3
const middlewares = jsonServer.defaults()//4 

server.use(middlewares) //5
server.use(jsonServer.rewriter({
    '/customurl/*': '/$1'
    }))
server.use(router) 
server.listen(8080, () => {//10 using 5000 port
    console.log('JSON Server is running')
})