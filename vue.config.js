const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/portfolio-maeldan-jochum/'
      : '/',
  devServer: {
    port: 8080, // Port local pour le serveur
    open: true, // Ouvre automatiquement dans le navigateur
    hot: true,  // Active le rechargement à chaud
  },
});
