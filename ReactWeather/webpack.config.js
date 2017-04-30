var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias: {
            main: 'app/components/main.jsx',
            nav: 'app/components/nav.jsx',
            weather: 'app/components/weather.jsx',
            weatherForm: 'app/components/weatherForm.jsx',
            weatherMessage: 'app/components/weatherMessage.jsx',
            about: 'app/components/about.jsx',
            examples: 'app/components/examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exlude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};