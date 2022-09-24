const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируем плагин

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если
                                             // при запуске вебпака было указано --mode=production
    mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html', // Данный html будет использован как шаблон
    }),
]; // Создаем массив плагинов

module.exports = {
    mode, // Сокращенная запись mode: mode в ES6+
    plugins,
    entry: './src/index.js', // Указываем точку входа - главный модуль приложения,
    // в который импортируются все остальные
    output: {
        path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
        // размещаться итоговый бандл, папка dist в корне приложения

        // assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
        // // складываться в dist/assets

        clean: true, // Очищает директорию dist перед обновлением бандла
        // Свойство стало доступно с версии 5.20.0, до этого использовался
        // CleanWebpackPlugin
    },

    resolve: {
        extensions: [".js"]
    },

    watch: true,

    devtool: 'source-map', // позволяет дебажить
    devServer: {
        hot: true, // Включает автоматическую перезагрузку страницы при изменениях
        // inline: true,
        port: 8080
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: {
                    loader: 'html-loader'
                },
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
            }
        ],
    }
}