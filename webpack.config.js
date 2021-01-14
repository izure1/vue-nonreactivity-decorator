const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        'index': [
            '@babel/polyfill',
            path.resolve(__dirname, 'src', 'index.ts')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    externals: [
        'vue'
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
}