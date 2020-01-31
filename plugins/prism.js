import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['kotlin', 'java', 'js', 'javascript']);

export default Prism