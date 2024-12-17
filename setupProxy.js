const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/seja-um-parceiro",
    createProxyMiddleware({
      target: "https://petsmellon.com.br",
      changeOrigin: true,
      pathRewrite: {
        "^/seja-um-parceiro": "", // Remova a parte "/seja-um-parceiro" da URL
      },
      secure: false, // Desabilita a verificação SSL/TLS (apenas para ambiente de desenvolvimento)
    })
  );
};
