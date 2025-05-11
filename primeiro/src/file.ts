import fs, { unlink } from "fs/promises"

// Manipulando arquivos com FS Module
const exec = async () => {
    const file = './teste.txt'

    // Escrevendo
    console.log("Escrevendo arquivo...")
    const list = ['Vitor', 'Joao', 'Douglas']
    const listTxt = list.join('\n')
    await fs.writeFile(file, listTxt)
    console.log("pronto")

    // Lendo o arquivo escrito
    const content = await fs.readFile(file, { encoding: 'utf8' })
    const readList = content.split('\n')

    // Alterando o arquivo
    readList.push('Fulano')
    const readListTxt = readList.join('\n')
    await fs.writeFile(file, readListTxt)

    // Passos para alterar o arquivo
    /**
     * 1. Ler
     * 2. alterar
     */

    // Excluindo arquivo
    // await unlink(file)

}

exec()