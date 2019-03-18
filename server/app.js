// server/app.js

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')

const config = require('./config')
const router = require('./router')
const error = require('./utils/error')

const app = new Koa()

app.use(error())
app.use(cors())
app.use(bodyParser())
app.use(router.routes())

app.listen(config.serverPort)
