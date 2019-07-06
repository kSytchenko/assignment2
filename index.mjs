import http from 'http';
import url from 'url';

import config from './config/config';
import { router } from './router';

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname.replace(/^\/+|\/+$/g, '');
  const method = req.method;
  router.handleRequest(method, path, req, res);
});

router.route('POST', 'hello', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    return res.end(JSON.stringify({ message: 'Welcome message' }));
});

server.listen(config.port, () => console.log(`${config.envName} mode. Listeting on ${config.port}...`));
