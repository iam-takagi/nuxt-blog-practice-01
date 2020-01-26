<template>
  <footer>
      <div v-for="(category, i) in categories" :key="i" class="main">
        <nuxt-link :to="linkTo('categories', category)" style="color: white">
          {{ category }}
        </nuxt-link>
      </div>
  </footer>
</template>

<script>

    import { mapState, mapGetters } from 'vuex'

    export default {
        name: "Footer",
        middleware: 'getContentful',
        computed: {
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
    background: gray;
  }

</style>
