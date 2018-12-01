var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry : './src/index.js',
    output :{
        path : path.join(__dirname,'/dist'),
        filename:'bundle.js',
        publicPath: '/',
        },

  plugins :[
    new htmlWebpackPlugin({
      template :'./src/index.html'
      }),
    new ExtractTextPlugin("styles.css")
  ],
 resolve:{
  modules: [
    path.join(__dirname, "src"),
    "node_modules",
    "components",
    "styles"
    ],
   extensions:['.js','.jsx']
 },


 module: {
   rules :[
    {
      test : /\.jsx?$/,
      exclude : /(node_modules|bower_components)/,
      use :[
        {loader:'babel-loader'},
    ]
   },
   {
    test: /\.scss$/,
    exclude : /(node_modules)/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [

          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader'
      ]
      })
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  }
]
},


devServer: {
  historyApiFallback: true,
},


devtool :'cheap-module-eval-source-map'

};
