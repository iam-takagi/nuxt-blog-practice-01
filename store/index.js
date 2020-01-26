import defaultEyeCatch from '~/assets/defaultEyeCatch.jpg'
import {createClient} from '../plugins/contentful'

export const state = () => ({
  posts: [],
  categories: [],
  tags: []
})

const parPage = 10;

export const getters = {
  setEyeCatch: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields) return { url: `https:${post.fields.image.fields.file.url}`, title: post.fields.image.fields.title }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },

  draftChip: () => (post) => {
    if (!post.fields.publishDate) return 'draftChip'
  },

  linkTo: () => (name, slug) => {
    return { name: `${name}-slug`, params: { slug: slug } }
  },

  postsByCategory: state => (category) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const catId = state.posts[i].fields.category.sys.id
      if (category.sys.id === catId) posts.push(state.posts[i])
    }
    return posts
  },

  postsByTag: state => (tag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (post.fields.tags) {
        const tag = post.fields.tags.find(tag => tag.sys.id === tag.sys.id)

        if (tag) posts.push(post)
      }
    }
    return posts
  },

  postsByLimit: state => (limit) => {
    return state.posts.slice(0, limit);
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },

  setLinks(state, entries) {
    state.tags = []
    state.categories = []
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (entry.sys.contentType.sys.id === 'tags') state.tags.push(entry)
      else if (entry.sys.contentType.sys.id === 'category') state.categories.push(entry)
    }
    state.categories.sort((a, b) => a.fields.sort - b.fields.sort)
  }
}

export const actions = {
  async getPosts({ commit }) {
    await createClient().getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate',
      include: 1
    }).then((res) => {
      commit('setLinks', res.includes.Entry)
      commit('setPosts', res.items)
    }).catch(console.error)
  }

}
