<template>
  <footer class="main">

    <div class="contents">
      <h2 class="heading">Tags</h2>
    </div>
    <nuxt-link v-for="tag in tags" :key="tag" :to="linkTo('tags', tag)" class="footer_tag_btn">
      {{tag}}
    </nuxt-link>

    <div class="contents">
      <h2 class="heading">Categories</h2>
    </div>
    <nuxt-link v-for="category in categories" :key="category" :to="linkTo('categories', category)" class="footer_category_btn">
      {{category}}
    </nuxt-link>
  </footer>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';

    export default {
        name: "Footer",
        middleware: 'getContentful',
        computed: {
            ...mapState(['tags']),
            ...mapState(['categories']),
            ...mapGetters(['linkTo'])
        }
    }
</script>

<style scoped>
  footer {
    width: 100%;
    position: absolute;
  }

  .main {
    background: #d2d2d2;
    text-align: center;
  }

</style>
