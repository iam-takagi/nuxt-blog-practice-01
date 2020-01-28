<template>
  <footer>

    <div class="wrapper tags_categories">
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
    </div>

    <div class="wrapper info">
      <div class="contents">
        <ul>
          <li>
            <a href="https://discord.gg/rJRZaXC" class="no-decoration" style="color: white">
              <font-awesome-icon :icon="['fab', 'discord']" style="font-size: 15px"/> Discordサーバー
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mctechjp" class="no-decoration" style="color: white">
              <font-awesome-icon :icon="['fab', 'twitter']" style="font-size: 15px"/> Twitter
            </a>
          </li>
          <li>
            <nuxt-link to = "/privacy-policy" class="no-decoration" style="color: white">
              <font-awesome-icon :icon="['fas', 'book']" style="font-size: 15px"/> プライバシーポリシー
            </nuxt-link>
          </li>
        </ul>
      </div>

      <p style="color: white">
        &copy; {{new Date().getFullYear()}} Minecraft Tech Portal JP
      </p>
    </div>

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

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
  }

  .tags_categories {
    background: #d2d2d2;
    padding: 30px;
  }

  .info {
    background: #3094b8;
    padding: 75px;
  }

  ul li {
    list-style: none;
    display: inline-flex;
    padding: 10px;
  }

</style>
