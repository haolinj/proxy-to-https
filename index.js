const httpProxy = require('http-proxy');
const https = require('https');
const options = {
  target: {
    https: true
  }
}

const targetHost = process.env.targetHost;
const path = process.env.proxyPath
const target = 'https://' + targetHost + '/' + path;
const port = 8084;

httpProxy.createProxyServer({
  target: target,
  agent: https.globalAgent,
  headers: {
    host: targetHost
  }
}).listen(port);

console.log('Local server proxy has started on localhost port [' + port + '].');
