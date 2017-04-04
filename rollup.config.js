/**
 * Created by Stevenzwzhai on 2017/4/4.
 */

import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import serve from 'rollup-plugin-serve'

export default {
    entry:'./src/main.js',
    globals: { vue: 'Vue' },
    //对应webpack 的output
    // dest:'./dist/bundle.js',
    //对应library target 构建模式cjs/umd
    plugins:[vue(), babel({ exclude: 'node_modules/**' }), serve({port:3008})],
    sourceMap:'inline',
    external:['vue'],
    targets: [
        { dest: 'dist/vue-rollup-example.cjs.js', format: 'cjs' },
        { dest: 'dist/vue-rollup-example.umd.js', format: 'umd' }
    ]
}
