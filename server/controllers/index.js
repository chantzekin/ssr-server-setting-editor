// server/controllers/index.js

const jsonfile = require('jsonfile')

const config = require('../config')

const readFile = async () =>  await jsonfile.readFile(config.settingFilePath)
const writeFile = async (obj) => await jsonfile.writeFile(config.settingFilePath, obj, { spaces: 2 })

exports.getUsers = async (ctx) => {
  const setting = await readFile()
  const users = setting['port_password']

  ctx.body = Object
    .keys(users)
    .map(key => ({ port: key, password: users[key] }))
}

exports.createUser = async (ctx) => {
  const user = ctx.request.body

  let setting = await readFile()
  let users = setting['port_password']

  if (users[user.port]) ctx.throw('Port already exists')

  users[user.port] = user.password
  setting.port_password = users

  await writeFile(setting)

  ctx.body = user
}

exports.updateUser = async (ctx) => {
  const { port } = ctx.params
  const user = ctx.request.body

  let setting = await readFile()
  let users = setting['port_password']

  if (!users[port]) ctx.throw('User does not exist')

  if (port !== user.port) {
    delete users[port]
  }

  users[user.port] = user.password
  setting.port_password = users

  await writeFile(setting)

  ctx.body = user
}

exports.deleteUser = async (ctx) => {
  const { port } = ctx.params

  let setting = await readFile()
  let users = setting['port_password']

  if (!users[port]) ctx.throw('User does not exist')

  delete users[port]
  setting.port_password = users

  await writeFile(setting)

  ctx.body = null
}

exports.dispatchAction = async (ctx) => {}
