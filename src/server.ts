import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);


/**
 * Nesse caso estamos criando as rotas, essa rota que será acessada via metodo get será encontrada na raiz
 * http://localhost/
 */

/*
app.get('/', (request, response) => {
  return response.json({ message: "Hello World" });
})
*/
app.listen(3333, () => {
  console.log('Servidor funcionando');
})


