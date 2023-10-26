module.exports = {
    // ... (other configurations)

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // ... (other rules)
        ],
    },

    // ... (other configurations)
};
