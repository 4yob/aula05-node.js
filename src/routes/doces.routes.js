import { Router } from "express"

const docesRoutes = Router()

let guloseimas = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Trufa",
        preco: 8.5,
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Brigadeiro",
        preco: 2.5,
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Carolina",
        preco: 3,
    }
]

// Rota para buscar todos os elementos do array guloseimas
docesRoutes.get("/", (req, res) => {
    return res.status(200).send(guloseimas)
})

//Rota para criar um novo doce
docesRoutes.post("/", (req, res) => {
    const { nome, preco } = req.body;

    const novoDoce = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome,
        preco,
    }

    guloseimas.push(novoDoce);
    return res.status(201).send(guloseimas)
})

// Rota para buscar um elemento específico do array guloseimas
docesRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    //console.log(id)

    const guloseima = guloseimas.find((doce) =>
        doce.id === Number(id)
    )

    //console.log(guloseima)

    if (!guloseima) {
        return res.status(404).send({ message: "Guloseima não encontrada!" })
    }

    return res.status(200).send(guloseima)
})

//Rota para editar uma guloseima
docesRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const guloseima = guloseimas.find((doce) => doce.id === Number(id)
    )

    //console.log(guloseima)

    if (!guloseima) {
        return res.status(404).send({ message: "Guloseima não encontrada!" })
    }

    const { nome, preco } = req.body
    console.log(nome)

    guloseima.nome = nome
    guloseima.preco = preco

    return res.status(200).send({
        message: "Guloseima atualizada!",
        guloseima,
    })
})

//Rota para deletar uma guloseima
docesRoutes.delete("/:id", (req, res) => {
    const { id } = req.params
    
    const guloseima = guloseimas.find((doce) => doce.id === Number(id))
    
    if (!guloseima) {
        return res.status(404).send({ message: "Guloseima não encontrada!" })
    };

    guloseimas = guloseimas.filter((doce) => doce.id !== Number(id))

    return res.status(200).send({message: "Guloseima deletada!"})
});

export default docesRoutes;