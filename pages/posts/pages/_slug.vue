<template>
  <div>

    <section>

      <ul class="cards">

        <li class="cards_item" v-for="post in getCurrentPagePosts">

          <div class="card">
            <div class="card_image">
              <img :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1024&h=512'"/>
              <nuxt-link :to="linkTo('categories', post.fields.category)" class="category_btn">{{post.fields.category}}</nuxt-link>
            </div>
            <div class="card_content">
               <span style="color: #47494e">
                  <font-awesome-icon icon="calendar" style="font-size: 15px"/> {{ new Date(post.fields.publishDate) | format-date }}
               </span>
              <h2 class="card_title">{{ post.fields.title }}</h2>
              <p class="card_text">{{ post.fields.description.substring(0, 80) }}</p>
              <nuxt-link v-for="tag in post.fields.tags" :key="tag" :to="linkTo('tags', tag)" class="tag_btn">{{ tag }}</nuxt-link>
            </div>
            <nuxt-link :to="linkTo('posts', post.fields.slug)" class="read_button">この記事を読む</nuxt-link>
          </div>
        </li>

      </ul>

    </section>

      <p>
        現在のページ: {{currentPage}}
      </p>

      <p>
        合計ページ: {{getPageCount}}
      </p>

    <nuxt-link v-show="hasPrev" :to = "'/posts/pages/' + getPrev">
      前のページ
    </nuxt-link>


    <nuxt-link v-show="hasNext" :to = "'/posts/pages/' + getNext">
      次のページ
    </nuxt-link>

  </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'


    export default {
        middleware: 'getContentful',
        data() {
            return {
                parPage: 6
            }
        },
        async asyncData( { params, error }) {
            return {
                currentPage: Number(params.slug)
            }
        },
        methods: {
            clickCallback: function (pageNum) {
                this.currentPage = Number(pageNum);
            },
        },
        computed: {
            ...mapGetters(['linkTo']),

            getCurrentPagePosts: function() {
                let current = this.currentPage * this.parPage;
                let start = current - this.parPage;
                return this.$store.state.posts.slice(start, current);
            },

            getPageCount: function() {
                return Math.ceil(this.$store.state.posts.length / this.parPage);
            },

            getPrev: function() {
                return this.currentPage - 1;
            },

            getNext: function() {
                return this.currentPage + 1;
            },

            hasPrev: function() {
                return (this.currentPage > 1)
            },

            hasNext: function() {
                return (this.currentPage < this.getPageCount);
            }
        }
    }
</script>

<style scoped>

</style>
