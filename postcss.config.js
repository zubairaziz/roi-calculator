const postcssImport = require('postcss-import')
const postcssModules = require('postcss-modules')
const tailwindcss = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')

// class TailwindExtractor {
//   static extract(content) {
//     return content.match(/[A-z0-9-:\/]+/g) || []
//   }
// }

module.exports = {
  plugins: [
    postcssImport,
    postcssModules,
    tailwindcss,
    // purgecss({
    //   content: [
    //     './index.html',
    //     './**/*.html',
    //     './**/*.js'
    //   ]
    // }),
  ]
}
