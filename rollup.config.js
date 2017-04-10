/**
 * Created by Stevenzwzhai on 2017/4/4.
 */

import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
// import serve from 'rollup-plugin-serve'
import eslint from 'rollup-plugin-eslint'
let i = 0;

export default {
    entry:'./src/main.js',
    globals: { vue: 'Vue' },
    //对应webpack 的output
    // dest:'./dist/bundle.js',
    //对应library target 构建模式cjs/umd
    plugins:[
        vue({
            compileTemplate: true,
            css: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        (process.env.NODE_ENV=='development' && eslint()),
        (process.env.NODE_ENV=='production' && uglify())
    ],
    sourceMap:'inline',
    external:['vue'],
    targets: [
        { dest: 'dist/vue-rollup-example'+new Date().getTime()+'.cjs.js', format: 'cjs' },
        { dest: 'dist/vue-rollup-example.umd.js', format: 'umd' }
    ]
}
