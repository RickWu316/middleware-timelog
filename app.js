// app.js
const express = require('express')
const app = express()
const port = 3000
const middleware = require('./middleware')


app.use(middleware.timelog)


app.get('/', (req, res) => {
    res.send('列出全部 Todo')
    // console.log(middleware.timelog(req, res))
})

app.get('/new', (req, res) => {
    res.send('新增 Todo 頁面')


})

app.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo')
    console.log(req.route)
})

app.post('/', (req, res) => {
    res.send('新增一筆  Todo')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})


