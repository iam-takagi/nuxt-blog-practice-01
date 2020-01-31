<template>
  <div>
    <div class="markdown-body" v-html="$md.render(post.fields.body)"></div>

    <a :href="'https://twitter.com/intent/tweet?text=' + '&url=https%3A%2F%2Fmctech.life%2Fposts%2F' + post.fields.slug + '&hashtags=mctechjp&via=mctechjp&related=mctechjp'" class="twitter-share-button" data-show-count="true" style="margin-top: 20px">Tweet</a>
  </div>

</template>

<script>

    import Prism from 'prismjs';
    import 'prismjs/themes/prism-tomorrow.css'
    var loadLanguages = require('prismjs/components/index.js');
    loadLanguages(['kotlin', 'java', 'js', 'javascript']);

    export default {
        name: "Bodytext",
        props: ['post'],
        mounted() {
           Prism.highlightAll()
        }
    }
</script>

<style scoped lang="scss">
  //@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap'); 
  @import "../../assets/markdown.css";
  
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    padding-top: 20px;
    margin: 0 auto;
  }

</style>
