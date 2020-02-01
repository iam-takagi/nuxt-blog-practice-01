<template>

  <div class ="container">

    <div class="contents">
      <h2 class="heading">最近の記事</h2>
    </div>

    <ul class="contents">

      <li class="cards_item" v-for="post in postsByLimit(6)">

        <nuxt-link :to="linkTo('posts', post.fields.slug)">

          <div class="card">
            <div class="card_image">
              <img :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1024&h=512'"/>
              <nuxt-link :to="linkTo('categories', post.fields.category)" class="category_btn">
                 <font-awesome-icon icon="folder" style="font-size: 15px"/>
                 {{post.fields.category}}
                 </nuxt-link>
            </div>
            <div class="card_content">
               <span style="color: #47494e">
                  <font-awesome-icon icon="calendar" style="font-size: 15px"/> {{ new Date(post.fields.publishDate) | format-date }}
               </span>
              <h2 class="card_title">{{ post.fields.title }}</h2>
              <p class="card_text">{{ post.fields.description.substring(0, 80) }}</p>
              <nuxt-link v-for="tag in post.fields.tags" :key="tag" :to="linkTo('tags', tag)" class="tag_btn">
               <font-awesome-icon icon="tags" style="font-size: 15px"/>  {{ tag }}
                </nuxt-link>
            </div>
            <!--
            <nuxt-link :to="linkTo('posts', post.fields.slug)" class="read_button">この記事を読む</nuxt-link>
            -->
          </div>

        </nuxt-link>

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

<style lang = "scss">

</style>
