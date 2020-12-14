module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
};