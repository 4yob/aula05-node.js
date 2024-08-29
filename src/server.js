import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())


const filmesMarcantes = [
    {
        id: 1001,
        titulo: "A Mulher Rei",
        genero: "Ação/Aventura",
        emCartaz: false,
    },
    {
        id: 1002,
        titulo: "Mamma Mia",
        genero: "Musical/Comédia",
        emCartaz: false,
    },
    {
        id: 1003,
        titulo: "Hotel Transilvânia",
        genero: "Infantil/Comédia",
        emCartaz: false,
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})

app.listen(port, () => {
    console.log(`⚡ Server started on http://localhost:${port}`)
})