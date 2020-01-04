const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口文件配置
  entry: "./src/index.ts",
  // 出口文件配置
  output: {
    path: path.resolve("./dist"), //输出文件的根目录。使用path.resolve转为绝对路径
    filename: "script/bundle.js", //配置打包的js文件的文件名，及其位置
  },
  // 配置插件
  plugins: [
    // HTML插件
    new HtmlWebpackPlugin({
      template: './public/index.html' 
    }),
    // 清除出口文件夹插件
    new CleanWebpackPlugin()
  ],
  // 配置模块
  module: {
    // 配置规则
    rules: [
      {
        // 匹配ts格式文件，使用ts-loader加载
        test: /.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }

        }
      }
    ]
  },
  // 配置解析
  resolve: {
    // 先解析ts文件，再解析js文件
    extensions: [".ts", ".js"]
  }
}