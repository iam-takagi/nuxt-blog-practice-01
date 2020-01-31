<template>

  <div class="container">
    <div class="post">
      <Headline :post="post"/>
      <Bodytext :post="post"/>
      <ShareButtons/>
      <JustComments/>
    </div>

    <div>
      <OtherPosts/>
    </div>

  </div>

</template>

<script>
    import Bodytext from "./Bodytext";
    import Headline from "./Headline";
    import OtherPosts from "./OtherPosts";
    import JustComments from "./JustComments";
    export default {
        name: "Post",
        components: {OtherPosts, Headline, Bodytext, JustComments},
        props: ['post']
    }
</script>

<style scoped lang = "scss">
  .post {
    margin: 20px auto;
    background: white;
    padding: 10px;
    max-width: 65%;
    border-radius: 1em;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }


</style>
