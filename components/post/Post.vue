<template>

  <div class="post-container">
    <div class="post">
      <Headline :post="post"/>
      <Bodytext :post="post"/>
      <ShareButtons/>
      <JustComments/>

      <div v-show="disqus_shortname">
        <vue-disqus
        :shortname="disqus_shortname"
        :identifier="post.fields.slug"
        :url="`${base_url}/posts/${post.fields.slug}`"
        ></vue-disqus>
      </div>
    </div>    

    <OtherPosts/>
  </div>


</template>

<script>
    import Bodytext from "./Bodytext";
    import Headline from "./Headline";
    import OtherPosts from "./OtherPosts";

    export default {
        name: "Post",
        components: {OtherPosts, Headline, Bodytext},
        props: ['post'],
        data: () => ({
          base_url: process.env.BASE_URL,
          disqus_shortname: process.env.DISQUS_SHORTNAME
        })
    }
</script>

<style scoped lang = "scss">
  .post {
    margin: 20px auto;
    background: white;
    padding: 10px;
    max-width: 100%;
    border-radius: 1em;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  .post-container {
    max-width: 900px;
    margin: 0 auto;
  }


</style>
