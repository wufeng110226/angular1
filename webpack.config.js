var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
    	index: "./js/enter.js",
    	vendor: ['./js/jquery.1.11.3.min.js','./js/public']
    },
    output: {
        path: __dirname+'/dist',
        filename: "[name].js",
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
            //{ test: require.resolve('jquery'),loader: 'expose?jQuery'}
        ],
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
	      {
	        test: /\.css$/,
	        loader: 'style-loader!css-loader'
	      },
	      {
	        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
	        loader: 'file-loader'
	      },
	      {
	        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
	        loader: 'file-loader',
	        query: {
	          name: '[name].[ext]?[hash]'
	      	}
	      }
	    ]
    },
   	plugins: [
   		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    	new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
	    new webpack.optimize.UglifyJsPlugin({
	      	compress: {
	        	warnings: false
	      	}
	    }),
	    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendors.bundle.js'})
  	]
    /*plugins:[
    	new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
	    //把入口文件里面的数组打包成verdors.js
	    //new webpack.optimize.CommonsChunkPlugin({name:'vendors', filename:'vendors.bundle.js'})
    ]*/
};