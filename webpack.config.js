const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: "bundle.js",
        publicPath: "/public/js/"
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
            watch: true
        },
        compress: true,
        port: 9000,
        devMiddleware: {
            publicPath: "/public/js/" // Mueve publicPath aquí
        },
        liveReload: true // Habilitar live reload
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }
}
