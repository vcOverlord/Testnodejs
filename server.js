const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola acdg a dg degebi');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
