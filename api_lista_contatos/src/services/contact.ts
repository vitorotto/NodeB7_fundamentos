import fs from "fs/promises"

export const file = './db/list.txt'

export const getContacts = async () => {
    let contatos: string[] = []
        try {
            const data = await fs.readFile(file, { encoding: 'utf8' })
            contatos = data.split('\n')
        } catch (error) {}

    return contatos
}

export const createContact = async (name: string) => {
    let contatos = await getContacts()
    contatos.push(name)
    await fs.writeFile(file, contatos.join('\n'))
}

export const deleteContact = async (name: string) => {
    let contatos = await getContacts()
    contatos = contatos.filter(item => item.toLowerCase() !== name.toLowerCase() ? true : false)
    await fs.writeFile(file, contatos.join('\n'))
}