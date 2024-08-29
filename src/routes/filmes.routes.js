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

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})