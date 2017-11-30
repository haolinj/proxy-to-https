const httpProxy = require('http-proxy');
const https = require('https');
const options = {
  target: {
    https: true
  }
}

const targetHost = '5hz9l2atfj.execute-api.ap-southeast-2.amazonaws.com';
const target = 'https://' + targetHost + '/dev';
const port = 8084;

httpProxy.createProxyServer({
  target: target,
  agent: https.globalAgent,
  headers: {
    host: targetHost
  }
}).listen(port);

console.log('PrintOS local server proxy has started on localhost port [' + port + '].');
