module.exports = {
    entry: './engine.js',
    output: {
        path:'./',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=50000000&name=[path][name].[ext]'
            }
        ]
    }
}