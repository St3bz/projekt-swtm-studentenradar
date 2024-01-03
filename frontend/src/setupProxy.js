const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://localhost:3306', // This should be the correct API server URL
      changeOrigin: true,
    })
  );
};