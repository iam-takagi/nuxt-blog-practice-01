import defaultEyeCatch from '~/assets/defaultEyeCatch.jpg'
import {createClient} from '../plugins/contentful'

export const state = () => ({
  posts: [],
  tags: [],
  categories: []
});

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

  postsByCategory: state => (currentCategory) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (currentCategory === post.fields.category) posts.push(post)
    }
    return posts
  },

  postsByTag: state => (currentTag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]

      if (post.fields.tags) {

        const tag = post.fields.tags.find(tag => tag === currentTag)

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

  async setLinks(state, entries) {
    state.categories = [];
    state.tags = [];

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];

      const category = entry.fields.category;
      if (category !== null && category !== undefined) {
        const categoryString = String(category);
        if (!state.categories.includes(categoryString)) {
          state.categories.push(categoryString)
        }
      }

      const tags = [entry.fields.tags];

      tags.map(tag => {
        if (tag !== null && tag !== undefined) {
          const tagString = String(tag);
          const split = tagString.split(",");
          split.map(splitTag => {
            if (!state.tags.includes(splitTag)) {
              state.tags.push(splitTag)
            }
          })
        }
      });
    }
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
