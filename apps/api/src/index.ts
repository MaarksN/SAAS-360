import { createServer } from 'node:http';

const server = createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ service: 'api', status: 'ok' }));
});

server.listen(3333, () => {
  console.log('BirthHub360 API ouvindo em http://localhost:3333');
});
