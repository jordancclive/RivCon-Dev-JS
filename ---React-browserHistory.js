//----------------------------------------------------------------------------




//----------------------------------------------------------------------------

const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => console.log(`Listening on port 3000`));

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//----------------------------------------------------------------------------

const path = require('path');
module.exports = {
  devtool: 'sourcemaps',
  entry: './browser/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

//----------------------------------------------------------------------------
