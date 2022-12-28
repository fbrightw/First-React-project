const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если
                                             // при запуске вебпака было указано --mode=production
    mode = 'production';
}

const backendUrl = 'http://localhost:8080'

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html', // Данный html будет использован как шаблон
    }),
    // new CleanWebpackPlugin()
];

module.exports = {
    mode,
    plugins,

    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    watchOptions: {
        poll: 1000
    },

    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8081,
        proxy: {
            '/login': {
                target: 'http://localhost:3000',
                router: () => backendUrl,
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },

                },
            },
            { test: /\.css$/i,
                use: ['style-loader', 'css-loader',  'postcss-loader']
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(mp4|png|jpe?g|gif)$/,
                use: ['file-loader']
            }
        ],
    }
}