<template>
  <div>
    <Post :post = "post"/>
  </div>
</template>

<script>

    import {createClient} from '~/plugins/contentful.js'
    import Post from "../../components/post/Post";

    const client = createClient();

    export default {
         async asyncData ({ env, params }) {
            return client.getEntries({
                'content_type': env.CTF_BLOG_POST_TYPE_ID,
                'fields.slug': params.slug
            }).then(entries => {
                return {
                    post: entries.items[0]
                }
            }).catch(console.error)
        },
        head(){
            return {
                 title: this.post.fields.title  + ' - Miencraft Tech Portal JP'
            }
        },
        components: {
            Post
        }
    }
</script>

<style lang = "scss">

</style>
