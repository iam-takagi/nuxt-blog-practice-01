<template>
  <div class="container">
    <div class="post">
      <Headline :post="post"/>
      <Bodytext :post="post"/>
    </div>

    <div>
      <LatestPosts/>
    </div>

  </div>

</template>

<script>
    import Bodytext from "./Bodytext";
    import Headline from "./Headline";
    import LatestPosts from "./LatestPosts";
    export default {
        name: "Post",
        components: {LatestPosts, Headline, Bodytext},
        props: ['post']
    }
</script>

<style scoped lang = "scss">
  .post {
    margin: 20px auto;
    background: white;
    padding: 10px;
    max-width: 65%;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
</style>
