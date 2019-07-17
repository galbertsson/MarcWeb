const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()
    server.use(compression())

    server.get('/edit/:id', (req,res) => {
        const queryParams = {id : req.params.id}
        app.render(req, res, "/edit", queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err
        console.log("Server is running")
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})