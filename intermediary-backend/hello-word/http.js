import { createServer } from 'http';

createServer(function (req, res) {
  res.write('Hello world');
  res.end(); // encerra a resposta corretamente
}).listen(8080)

