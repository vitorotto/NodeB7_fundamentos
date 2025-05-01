import express, { urlencoded } from 'express'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url';
import routerMain from './routes/index.js';
import { Server } from 'http';
import { errorHandler, requestNotFound } from './routes/errorHandler.js';

const app = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(helmet())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

const PORT = 3000;


app.use('/', routerMain);
app.use(requestNotFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor está rodando em: http://localhost:${PORT}/`)
})