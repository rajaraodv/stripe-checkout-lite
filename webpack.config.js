module.exports = {
    /* This is the default setting for webpack */
    target: "web",
    /* Entry file to start building from. This is where you will want to start
     * your project.  If you wanted to build multiple entry points you could
     * list them below.
     */
    entry: {
        main: "./example/main.jsx"
    },
    /* Defines where to output the final built files. The [name] definition
     * is based off of the entry point's name. This example will generate
     * a main.bundle.js in the public/build directory.
     */
    output: {
        path: __dirname,
        filename: "./example/bundle.js"
    },
    devServer: {
        contentBase: "./example",
    },
    /* Defines what modules to use */
    module: {
        /* Loaders are how webpack compiles and builds the JSX extensions */
        loaders: [
            {
                /* Any file with a .jsx extension will go through the jsx-loader */

                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
