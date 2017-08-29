import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'VueSharedData',
  },
  plugins: [
    babel(), // ES5 transpile
  ],
}
