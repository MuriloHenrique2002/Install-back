import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; 
// Importa a função `conectarAoBanco` para estabelecer a conexão com o banco de dados.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados usando a string de conexão fornecida pela variável de ambiente `STRING_CONEXAO`. 
// A palavra-chave `await` indica que a função é assíncrona e espera a conexão ser estabelecida antes de continuar.

export  async function getTodosPosts() {
    // Função assíncrona que retorna todos os posts de um banco de dados.
    const db = conexao.db("imersao-installbytes")
    // Obtém o banco de dados com o nome "imersao-installbytes" a partir da conexão estabelecida.
    const colecao = db.collection("posts")
    // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray()
    // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array.
}
export async function atualizarPost(id, novoPost) {
     
    const db = conexao.db("imersao-installbytes");
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id:new ObjectId(objectId)}, {$set:novoPost})  
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}
