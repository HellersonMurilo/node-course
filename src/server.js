import http from "node:http";

// - Atributos
// - Criar Usuario
// - Editar Usuario
// - Listar Usuario
// - Deletar Usuario

// HTTP
//  - Metodo HTTP
//  - URL

// GET, POST, PUT, PATCH,DELETE

// GET => Buscar uma Informação no Back-end
// POST => Criar uma Recurso no Back-end
// PUT => Editar ou Atualizar um Recurso no Back-end
// PACTH => Atualizar uma Informação ou Especifica do Recurso no Back-end
// DELETE => Deletar um Recurso no Back-end

// GET /users => Buscando um Usuario no Back-end
// POST /users => Criando um Usuario no Back-end

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {

    // Early Return
    return res.end("Listagem de Usuarios");
  }

  if (method ==='POST' && url === '/users') {
    return res.end('Criação de Usuarios')
  }

  return res.end("Hello Ignite");
});

server.listen(3333);
