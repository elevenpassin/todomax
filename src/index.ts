import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';
import { resolve } from 'path';

const server: Server = createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  const pathname: string = parse(request.url).pathname;

  switch (pathname) {
    case '/':
      readFile('dist/index.html', (err, data) => {
        response.end(data);
      });
      break;
    default:
      response.end('HAHA NO WAY');
      break;
  }
});

server.listen(3000, 'localhost', () => {
  console.log('server started');
});