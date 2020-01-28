<template>
  <div class="container">

    <div class="contents">
      <h1 class="heading">カテゴリ: {{category}}</h1>
    </div>

    <ul class="contents">

      <li class="cards_item" v-for="post in postsByCategory(category)" :key="post">

        <nuxt-link :to="linkTo('posts', post.fields.slug)">
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
          </div>

        </nuxt-link>
      </li>

    </ul>

  </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        middleware: 'getContentful',
        async asyncData( { params, error }) {
            return {
                category: params.slug
            }
        },
        head(){
            return {
                 title: "カテゴリ: " + this.category  + ' - Miencraft Tech Portal JP'
            }
        },
        computed: {
            ...mapGetters(['linkTo']),
            ...mapGetters(['postsByCategory'])
        }
    }
</script>

<style scoped>

</style>
