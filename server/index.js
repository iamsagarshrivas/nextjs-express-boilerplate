const express = require('./middleware/express')
const app = require('./middleware/next')
const { port, appRoot, ip,env} = require('./config')
const routes = require('./router');

app.prepare().then(() => {
  const server = express(appRoot, routes );

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://${ip}:${port} in ${env} mode`)
  })
})