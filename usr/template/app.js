const serve = require('serve')
const server = serve(__dirname+'/build', {
  port: process.env.NODE_PORT | 1977
})