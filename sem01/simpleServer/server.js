import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('hello web!')
})

app.get('/ping', (req, res)=>{
    res.send('pong')
})

app.listen(8080)
