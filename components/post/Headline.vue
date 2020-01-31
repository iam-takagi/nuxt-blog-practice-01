<template>
  <div class="headline">
    <div class="headline-content">
      <span style="color: #6c7077">
         <nuxt-link :to="linkTo('categories', post.fields.category)" class="headline_category_btn">{{post.fields.category}}</nuxt-link>
         <font-awesome-icon icon="calendar" style="font-size: 15px;"/> {{ new Date(post.fields.publishDate) | format-date }}
         </span>
      <h1 class="headline-title">{{post.fields.title}}</h1>
      <p class="headline-description">{{post.fields.description}}</p>
      <p style="margin-top: 10px">
        <nuxt-link v-for="tag in post.fields.tags" :key="tag" :to="linkTo('tags', tag)" class="tag_btn">
           <font-awesome-icon icon="tags" style="font-size: 15px"/>
           {{ tag }}
           </nuxt-link>
      </p>

      <div class="headline_card_image">
        <img :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1280&h=720'"/>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        name: "Headline",
        props: ['post'],
        computed: {
            ...mapGetters(['linkTo'])
        }
    }
</script>

<style scoped lang="scss">
  .headline {
    top: 10px;
    left: 10px;

    .headline-title {
      font-size: 22px;
      text-decoration: none!important;
      margin-top: 15px;

      @media screen and (max-width: 768px){
         font-size: 18px;
      }

      &:hover {
        text-decoration: none!important;
      }
    }

    .headline-description {
      color: #6c7077;
      font-size: 14px;
      text-decoration: none !important;
      margin-top: 15px;

      &:hover {
        text-decoration: none !important;
      }
    }

    .headline-content {
      padding: 1rem;
      transition: background 0.8s;
      background: white center;
    }
  }
</style>
