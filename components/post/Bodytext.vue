<template>
  <div class="markdown-body" v-html="$md.render(post.fields.body)" ></div>
</template>

<script>
    export default {
        name: "Bodytext",
        props: ['post']
    }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap');
  @import "~github-markdown-css/github-markdown.css";

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    padding-top: 20px;
    margin: 0 auto;
  }

</style>
