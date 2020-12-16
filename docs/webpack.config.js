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
            },
            {
                test: /\.(glsl|frag|vert)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader',
                    {
                        loader: 'glslify-loader',
                        options: {
                            transform: [
                                ['glslify-hex', { 'option-1': true, 'option-2': 42 }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
};