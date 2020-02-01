const MarkdownIt =  require('markdown-it')
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'
var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['kotlin', 'java', 'js', 'javascript', 'yaml']);

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
