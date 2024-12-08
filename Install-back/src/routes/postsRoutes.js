import express from "express";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import multer from "multer";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSucessStatus: 200
}
// Configuração do Multer para upload de imagens (específico para Windows)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para os arquivos enviados (ajuste conforme necessário)
    cb(null, './uploads/'); // Use um caminho relativo ou absoluto de acordo com a estrutura do seu projeto
  },
  filename: function (req, file, cb) {
    // Define o nome do arquivo, usando o nome original do arquivo enviado
    cb(null, file.originalname);
  }
});

const upload = multer({ storage }); // Utiliza a configuração de armazenamento definida acima

// Define as rotas para a aplicação Express
const routes = (app) => {
  // Middleware para analisar requisições JSON
  // Permite acessar os dados do corpo da requisição em `req.body`
  app.use(express.json());
  app.use(cors(corsOptions))
  // Rota para buscar todos os posts (GET /posts)
  app.get("/posts", listarPosts); // Chama a função listarPosts do controlador

  // Rota para criar um novo post (POST /posts)
  app.post("/posts", postarNovoPost); // Chama a função postarNovoPost do controlador

  // Rota para lidar com upload de imagens (POST /upload)
  // Utiliza o middleware do Multer para lidar com uploads de arquivos
  app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função uploadImagem do controlador
    // - upload.single("imagem"): analisa um único arquivo chamado "imagem"

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;
