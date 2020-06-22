const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

//==================================== to produce bundle.js 
config.optimization = {
    minimizer: [
        (compiler) => {
          const TerserPlugin = require('terser-webpack-plugin');
          new TerserPlugin({ /* your config */ 
            cache: false,
            parallel: true,
            sourceMap: false, // Must be set to true if using source-maps in production
            terserOptions: {
              // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
              extractComments: 'all',
              mangle: true
            }             
        }).apply(compiler);
        }        
      ]
}
config.output.filename = 'bundle.js';

//==================================== image path

config.module.rules[2].oneOf[0].options = {
    limit: 0,
    name: 'media/[name].[ext]'  
}

//==================================== to produce bundle.css 

config.plugins = [
    (compiler) => {
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }).apply(compiler);
    }
  ];
