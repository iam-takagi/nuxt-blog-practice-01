<template>
  <div>
    <header class="tag-page header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">John Doe</a>
        </div>
        <div class="page-info wrapper">
          <h2>#{{ tag }}</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>All articles tagged #{{ tag }} ({{ posts.length }})</h2>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <ArticlePreview :post="post"></ArticlePreview>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
    import {createClient} from '~/plugins/contentful.js'
    import ArticlePreview from '~/components/ArticlePreview.vue'
    const client = createClient()
    export default {
        asyncData ({ env, params }) {
            return client.getEntries({
                'content_type': env.CTF_BLOG_POST_TYPE_ID,
                'fields.tags[in]': params.tag,
                order: '-sys.createdAt'
            }).then(entries => {
                return {
                    posts: entries.items,
                    tag: params.tag
                }
            })
        },
        components: {
            ArticlePreview
        }
    }
</script>
