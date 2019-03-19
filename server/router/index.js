// server/router.js

const router = require('koa-router')()

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  dispatchAction
} = require('../controllers')

router.get('/api/users', getUsers)
router.post('/api/users', createUser)
router.put('/api/users/:port', updateUser)
router.delete('/api/users/:port', deleteUser)

router.post('/api/call/:action', dispatchAction)




module.exports = router
