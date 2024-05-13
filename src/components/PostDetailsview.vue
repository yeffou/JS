<template>
  <template v-if="!loading">
    <div class="post-detail">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-body">{{ post.body }}</p>
      <div class="tags">
          <strong>Tags:</strong>
          <ul>
            <li class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</li>
          </ul>
      </div>
    </div>
  </template>

</template>
  
<script>
    import { projectFirestore } from '../Firebase/Config';

    export default {
    name: 'PostDetailView',

    props:['id'],
    data(){
      return {
        post: null,
        loading:true,
      }
    },

    async beforeMount() {
    try {
      let res = await projectFirestore.collection('posts').doc(this.id).get()
      this.post = { ...res.data(), id: res.id }
      this.loading = false;

    }
    catch(err) {
      this.error = err.message
    }
  },
    
  }
</script>

  <style>
</style>