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
                //console.log(entries.items[0])
                return {
                    post: entries.items[0]
                }
            }).catch(console.error)
        },
        head(){
            return {
                 title: this.post.fields.title  + ' - Miencraft Tech Portal JP',
                 meta: [
                     { hid: 'description', name: 'description', content: this.post.fields.description },
                     { hid: 'og:url', property: 'og:url', content: 'https://mctech.life/' },
                     { hid: 'og:title', property: 'og:title', content: this.post.fields.title  + ' - Miencraft Tech Portal JP' },
                     { hid: 'og:type', property: 'og:type', content: 'website'},
				     { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
				     { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url + '?fit=scale&w=1024&h=512' },
				     { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                     { hid: 'og:site_name', property: 'og:site_name', content: 'Miencraft Tech Portal JP' },
                     { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' }
             ],
            }
        },
        components: {
            Post
        }
    }
</script>

<style lang = "scss">

</style>
