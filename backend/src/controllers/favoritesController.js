// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');


async function listarFavoritos(request, response) {
        // Preparar o comando de execução no banco
        connection.query('select * from favoritos', (err, results) => { 
            try {  // Tenta retornar as solicitações requisitadas
                if (results) {  // Se tiver conteúdo 
                    //console.log(results[0]);
                    response.status(200).json({
                        success: true,                 
                        message: 'Retorno de favoritos com sucesso!',
                        data: results
                    });
                } else {  // Retorno com informações de erros
                    response
                        .status(400)
                        .json({
                            success: false,
                            message: `Não foi possível retornar os usuários.`,
                            query: err.sql,
                            sqlMessage: err.sqlMessage
                        });
                }
            } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
                response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                })
            }   
        });
    }


async function cadastrarFavorito(request, response) {
        // Preparar o comando de execução no banco
        const query = 'INSERT INTO favoritos(usuario_id,nome_empresa,telefone,endereco,numero_endereco,foto) VALUES(?,?,?,?,?,?);'; 
        
        // Recuperar os dados enviados na requisição
        const params = Array(
            request.body.usuario_id,
            request.body.nome_empresa,
            request.body.telefone,
            request.body.endereco,
            request.body.numero_endereco,
            request.body.foto
        );
    
        // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
        connection.query(query, params, (err, results) => {
            console.log(results)
            try {
                if (results) {
                    response
                        .status(201)
                        .json({
                            success: true,
                            message: `Sucesso! Favorito cadastrado.`,
                            data: results
                        });
                } else {
                    response
                        .status(400)
                        .json({
                            success: false,
                            message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                            query: err.sql,
                            sqlMessage: err.sqlMessage
                        });
                }
            } catch (e) { // Caso aconteça algum erro na execução
                response.status(400).json({
                        succes: false,
                        message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        });
    }    


module.exports = {
    listarFavoritos,
    cadastrarFavorito
}