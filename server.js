const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // *example
  server.get('/aboutus/:id', (req, res) => {
    const page = '/about'
    const query = { id: req.params.id }
    app.render(req, res, page, query)
  })

  server.get('/admin-dashboard', (req, res) => {
    const page = '/admin/dashboard'
    const query = { id: req.params.id }
    app.render(req, res, page, query)
  })
  
  server.get('/admin-profile', (req, res) => {
    const page = '/admin/profile'
    const query = { id: req.params.id }
    app.render(req, res, page, query)
  })

  server.get('*', (req, res) => {
    console.log(req.url)
    return handle(req, res)
  })

  server.listen(5000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:5000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})