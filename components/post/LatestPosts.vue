<template>

  <div class="menu">
    <h2 class="heading">最近の記事</h2>

    <ul v-for="post in postsByLimit(6)" :key="post">
      <li>
        <img :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=128&h=75'"/>
        <nuxt-link :to="linkTo('posts', post.fields.slug)" class="no-decoration" style="color: black; font-size: 15px">{{post.fields.title}}</nuxt-link>
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
  .menu {
    width: 400px;
    font-family: verdana, Segoe UI;
    margin: 10px auto;

    li {
      background: white;
      list-style: none;

      img {
        padding: 10px;
      }

      &:after {
        content: '';
        display: block;
        background: #c3ccd7;
        height: 1px;
      }
    }
  }

</style>
