const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve('dist'),
        filename: 'index.mjs',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    },
    devtool: 'source-map'
};
