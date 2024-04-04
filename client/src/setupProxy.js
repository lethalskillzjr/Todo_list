// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Your API endpoint prefix
    createProxyMiddleware({
      target: 'http://localhost:5000', // Your Express server URL
      changeOrigin: true,
    })
  );
};
