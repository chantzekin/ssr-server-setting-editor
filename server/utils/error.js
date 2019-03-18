// server/utils/error.js

const _ = require('lodash')

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      let errorMsg = err.message
      if (err.errors && typeof (err.errors) === 'object') {
        _.mapValues(err.errors, (item) => {
          if (item.message) {
            errorMsg = item.message
          }
        })
      }

      ctx.body = { code: ctx.status, msg: errorMsg }
      ctx.app.emit('error', err, ctx)
    }
  }
}
