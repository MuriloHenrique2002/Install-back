import express from "express";
import routes from "./src/routes/postsroutes.js";
// Importa o módulo Express, que é a base para criar aplicações web Node.js
const app = express();
// Cria uma instância do Express, que será o nosso servidor web.

app.use(express.static("uploads"))
routes(app)

const posts = [
    // Array de objetos que representam os posts, inicialmente preenchido com dados de exemplo.
    // Em um cenário real, esses dados seriam obtidos do banco de dados.
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
        id: 1
    },
    // ... outros posts
];



app.listen(3000, () => {
    // Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
    console.log("Servidor escutando...");
});
