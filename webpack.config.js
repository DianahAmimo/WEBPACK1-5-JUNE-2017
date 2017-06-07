
var webpack = require('webpack');

module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: 'compiled.js'
 },
//  watch: true
// },
module: {
	rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader',
        // options: { 
        //   presets: [ 
        //     [ 'es2015', { modules: false } ] 
        //   ] 
        // }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
   ],
   loaders: [
     {
       test: [/\.js$/],
       exclude: /node_modules/,
       loaders: 'babel-loader',
       query: {
         presets: ['react', 'es2015','es2016', { modules: false}] 
       }
     }
   ]
   [
     {
       test: [/\.es6$/],
       exclude: /node_modules/,
       loaders: 'babel-loader',
       query: {
         presets: ['react','es2016', { modules: false }] 
       }
     }
   ]
 },
  resolve: {
   extensions: ['.js', '.es6']
 },
}

// // webpack.config.js
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {  
//   entry: './src/index.js',
//   output: { filename: 'bundle.js', path: 'dist' },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: { 
//           presets: [ 
//             [ 'es2015', { modules: false } ] 
//           ] 
//         }
//       }
//     ]
//   },
//   plugins: [ new HtmlWebpackPlugin({ title: 'Tree-shaking' }) ]
// };







//  module: {
// -   preLoaders: [
// +   rules: [
//       {
//         test: /\.js$/,
// +       enforce: "pre",
//         loader: "eslint-loader"
//       }
//     ]
//   }

