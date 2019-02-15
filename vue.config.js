// Node.js 用于处理文件路径的模块
const path = require('path');
// 用于访问 webpack 内置插件
const webpack = require('webpack');

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 是否在每次保存代码时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production',
  //
  configureWebpack: {
    output: {
      filename: '[name].bundle.js',
      // 决定非入口 `chunk` 的名称
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // 设置模块如何被解析
    resolve: {
      alias: {
        // 设置路径别名
        // resolve([from...], to) : 将 to 参数解析为绝对路径
        // `__dirname` 总是执行被执行 `js` 文件的绝对路径
        // @ 将被解析为 `/your_project/src`
        '@': path.resolve(__dirname, 'src'),
        // vue$: 'vue/dist/vue.esm.js',
      },
      // 自动解析确定的扩展至，能够在引入模块式不带扩展
      extensions: ['.js', '.vue', '.json', '.less', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: 'less-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          include: [path.resolve(__dirname, 'src/assets/')],
        },
      ],
    },
    //
    plugins: [
      //  `DefinePlugin` 允许创建一个在编译时可以配置的全局常量
      //  这会对开发模式和发布模式构建允许不同的行为非常有用
      new webpack.DefinePlugin({
        API_ADDRESS: JSON.stringify('http://47.101.176.149'),
      }),
      //  移除重复的模块
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'common',
      // }),
    ],
  },
};
