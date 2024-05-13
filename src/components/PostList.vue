<template>
  <div class="post-list">
    <div class="tags-container">
      <h4>Tags</h4>
      <div v-for="tag in tags" :key="tag" class="tag" @click="handleTagClick(tag)">{{ tag }}</div>
    </div>
    <div class="posts-container">
      <h4>Posts</h4>
      <div v-for="post in posts" :key="post.id" class="post-item">
        <SinglePost :post="post" @delete="handleDelete"></SinglePost>
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import { projectFirestore } from '../Firebase/Config';


export default {
  name: 'PostList',
  components: {
    SinglePost,
  },
  data(){
    return {
      posts: [],
      tags: [],
      selectedTag: null
    };
  },
  async mounted() {
    try {
      let res = await projectFirestore.collection('posts').get()
      this.posts = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      this.computeUniqueTags();
    }
    catch(err) {
      this.error = err.message
    }
  
  },
  methods :{
    handleDelete(id) {
      this.posts = this.posts.filter(post => {
        return post.id !== id
      })
      this.computeUniqueTags();
    },
    computeUniqueTags() {
      let tags = [];
      this.posts.forEach(post => {
        tags = tags.concat(post.tags.filter(tag => !tags.includes(tag)));
      });
      this.tags=tags;
    },
    handleTagClick(tag) {
      this.selectedTag = tag;
      this.$router.push({ name: 'TagCloud', params: { tag: tag } });
    }

  },
}
</script>

<style scoped>
.post-list {
  display: flex; 
  padding: 20px;
}

.tags-container,
.posts-container {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: box-shadow 0.3s ease;
}

.tags-container {
  width: 20%; 
}

.posts-container {
  width: 80%; 
}

.tags-container h4,
.posts-container h4 {
  margin-bottom: 10px;
}

.tag {
  display: inline-block;
  background-color: #313941; 
  color: #fff; 
  padding: 8px 12px; 
  border-radius: 4px; 
  margin-right: 8px; 
  margin-bottom: 8px; 
}

.tag:hover {
  background-color: #313941; 
  opacity: 0.7;
  cursor: pointer;
}

.post-item {
  margin-top: 20px;
}

.post-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>




