import express from "express";
import { getContacts, createContact, deleteContact } from "../services/contact";

const router = express.Router();

// Rota para inserir um novo contato
router.post('/contato', async (req, res) => {
    const { name } = req.body

    if (!name || name.length < 2) {
        res.status(403).json({ error: 'Nome inválido' })
    } else {
        await createContact(name)
        res.status(201).json({ contato: name })
    }
})

// Rota para ler a lista de contatos
router.get('/contatos', async (req, res) => {
    let contatos = await getContacts()
    res.json( { contatos: contatos  })
})

// Rota para excluir contatos
router.delete('/contato/del', async (req, res) => {
    const { name } = req.query

    if (!name) {
        res.json({ erro: "Precisa de um nome para excluir" })
    } else {
        await deleteContact(name as string)
        res.json({ "removed": name })
    }

})

export default router;