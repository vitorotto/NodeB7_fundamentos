import express from "express";
import routerProdutos from './produtos.js'
import routerFlights from './voos.js'

const routerMain = express.Router();

routerMain.use('/produtos', routerProdutos);
routerMain.use('/flight', routerFlights);

routerMain.get('/ping', (req, res) => {
    res.json({ pong: true })
})

routerMain.get('/', (req, res) => {
    let name = "bonieky"
    let age = 90
    res.json({ name, age })
})

export default routerMain;