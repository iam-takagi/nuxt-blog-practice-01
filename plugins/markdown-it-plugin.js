const MarkdownIt =  require('markdown-it')
const Prism = require('prismjs')

export default ({ app }, inject) => {
  const md = require('markdown-it')({
    preset: 'default',
    linkify: false,
    breaks: true,
    html: true,
    typegraphy: true,

    highlight (str, lang) {
          if (lang && Prism.languages[lang]) {
              try {
                  return `<pre class="language-${lang}"><code>${Prism.highlight(str, Prism.languages[lang], lang)}</code></pre>`
                  } catch (e) {}
          }
          return `<pre class="language-plain"><code>${md.utils.escapeHtml(str)}</code></pre>`
    },
  });

  md.use(require('markdown-it-anchor'))
  md.use(require("markdown-it-table-of-contents"))

inject('md', md)
}
