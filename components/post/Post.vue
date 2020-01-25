<template>
  <div class="post">
    <Headline :post="post"/>
    <Bodytext :post="post"/>
  </div>
</template>

<script>
    import Bodytext from "./Bodytext";
    import Headline from "./Headline";
    export default {
        name: "Post",
        components: {Headline, Bodytext},
        props: ['post']
    }
</script>

<style scoped lang = "scss">
  .post {
    margin: 20px auto;
    background: white;
    padding: 10px;
    max-width: 800px;
    border: solid 1px #bcc0cd;
    border-radius: 10px;
  }
</style>
