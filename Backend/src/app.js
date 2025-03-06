import express from 'express'
import router from './routes/ai.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Jai Shree Ganesh!')
})

app.use('/ai', router)

export default app