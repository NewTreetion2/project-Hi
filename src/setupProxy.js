const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(`/api`, {
      target: `http://13.209.49.227:8080`,
      changeOrigin: true,
    })
  );
};
