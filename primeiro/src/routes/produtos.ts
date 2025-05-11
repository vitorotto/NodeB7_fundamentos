import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ produtos: [] })
})

router.post('/add', (req, res) => {
    console.log('Params: ', req.params)
    console.log('Query: ', req.query)
    console.log('Body: ', req.body)

    res.json( { produtos: [] } )
})

router.get('/:id_produto', (req, res) => {
    const { id_produto } = req.params
    res.json(
        {
            id: id_produto,
            name: "Teclado XYZ",
            price: 90
        }
    )
})

export default router