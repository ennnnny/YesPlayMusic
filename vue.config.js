const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const version = require("./package.json").version;
const webPath = process.env.VUE_APP_CDN_URL+version+`/dist/`;
// const webPath = process.env.VUE_APP_CDN_URL + version + "/";

module.exports = {
  publicPath: process.env.VUE_APP_DISABLE_CDN === "1" ? webPath : "/",
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
          target: process.env.VUE_APP_PROXY_URL, //API服务器的地址
          changeOrigin: true,
          pathRewrite: {
              '^/api': ''
          }
      }
    },
  },
  pwa: {
    name: "泡面音乐",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
    },
    themeColor: "#ffffff00",
    manifestOptions: {
      background_color: "#335eea",
    },
    // workboxOptions: {
    //   swSrc: "dev/sw.js",
    // },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "泡面音乐",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  chainWebpack(config) {
    config.module.rules.delete("svg");
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
