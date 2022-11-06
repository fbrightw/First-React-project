const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require("webpack"); // Импортируем плагин

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
]; // Создаем массив плагинов

module.exports = {
    mode, // Сокращенная запись mode: mode в ES6+
    plugins,

    entry: {
        main: './src/index.js'
    },

    // Указываем точку входа - главный модуль приложения,
    // в который импортируются все остальные
    output: {
        path: path.resolve(__dirname, 'dist'),

        // assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
        filename: "[name].bundle.js",
        // sourceMapFilename: "dist.map",
        // clean: true, // Очищает директорию dist перед обновлением бандла
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    watch: true,

    // devtool: 'source-map', // позволяет дебажить
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
                // logLevel: 'debug' /*optional*/
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
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                        // при каждом запуске
                    },

                },
            }, // Добавляем загрузчик для html
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(mp4|png|jpe?g|gif)$/,
                use: ['file-loader']
                // use: {
                //     loader: "file-loader",
                //     options: {
                //         name: "[name].[hash].[ext]"
                //     }
                // }
            }
        ],
    }
}