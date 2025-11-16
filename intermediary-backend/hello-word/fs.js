import { createServer } from 'http';
import { readFile } from 'fs';

createServer(function (req, res) {
  readFile('demo-readFile.html', function (err, data) {


    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end(); // encerra a resposta corretamente
  });
}).listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});
