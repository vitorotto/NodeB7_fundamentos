import { error } from "console";
import { ErrorRequestHandler, RequestHandler } from "express";

export const requestNotFound: RequestHandler = (req, res) => {
    res.status(404).json({error: 'Page not found'})
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500).json({ error: 'Erro, trabalhando nisso...' })
}