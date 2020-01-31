<template>

  <div>

    <h2 class="heading">他の記事も読む</h2>

    <ul v-for="post in postsByLimit(15)" :key="post">
      <li>
        <nuxt-link :to="linkTo('posts', post.fields.slug)" class="no-decoration" style="color: black; font-size: 12px;">{{post.fields.title}}</nuxt-link>
      </li>
    </ul>

    <div class="contents">
      <nuxt-link to="/posts/pages/1" class="more_button">記事をもっと見る</nuxt-link>
    </div>

  </div>

</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {

        middleware: 'getContentful',
        computed: {
            ...mapGetters(['postsByLimit']),
            ...mapGetters(['linkTo'])
        },
        components: {

        }
    }
</script>

<style scoped lang="scss">

  ul, ol {
  padding: 0;
  position: relative;
  }

  ul li, ol li {
  color: #2d8fdd;
  border-left: solid 6px #2d8fdd;/*左側の線*/
  background: #f1f8ff;/*背景色*/
  margin-bottom: 3px;/*下のバーとの余白*/
   line-height: 1.5;
  padding: 0.5em;
  list-style-type: none!important;/*ポチ消す*/
  }

</style>
