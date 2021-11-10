const sass = require('node-sass-promise')
const CleanCSS = require('clean-css')

const inputFile = 'src/_includes/app.scss'
const outputFile = 'dist/css/app.css'

module.exports = class {
  data() {
    return {
      permalink: 'css/app.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    const { css } = await sass.render({ file: inputFile })
    const output = new CleanCSS({}).minify(css.toString()).styles

    return output
  }
}
