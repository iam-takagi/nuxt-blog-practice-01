import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css'

var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['kotlin', 'java', 'js', 'javascript']);

export default Prism