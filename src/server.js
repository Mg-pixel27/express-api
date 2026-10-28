import { verificarConexao } from "./infrastructure/mysql.js";
import { post } from "./config/env.js";
import app from "./app.js";

verificarConexao()
    .then(() => app.listen(post, '0.0.0.0', () => 
        console.log(`GT STORE API disponível em http://localhost:${post}`)))
    .catch((erro) => {
        console.log('Não foi possivel iniciar a API', erro);
        process.exitCode = 1;
    });