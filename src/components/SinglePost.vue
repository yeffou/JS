<template>
  <div class="single-post">
    <h3 class="post-title">{{ post.title }}</h3>
    <p class="post-tags">{{ post.tags }}</p>
    <p class="post-snippet">{{ snippet }}</p>
    <span @click="deletePost" class="delete-icon">Delete</span>
    <div @click="navigateToDetailsPage" class="read-more">Read More</div>
    <router-link :to="{ name: 'EditPost', params: { id: post.id } }" class="edit-link">Edit</router-link>
  </div>
</template>

<script>
import { projectFirestore } from '../Firebase/Config' 

export default {
  name: 'SinglePost',
  props: {
    post: Object 
  },
  computed: {
    snippet() {
      return this.post.body.substring(0, 50); 
    }
  },
  methods: {
    navigateToDetailsPage() {
      this.$router.push(`/details/${this.post.id}`);
    },
    async deletePost() {
      const validate = confirm('Do you want to delete the post: ' + this.post.title);
      if (validate) {
        try {
          await projectFirestore.collection('posts').doc(this.post.id).delete();
          this.$emit('delete', this.post.id);
        } catch (err) {
          console.error(err.message);
        }
      }
    }
  }
};
</script>

<style scoped>
.single-post {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.post-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.post-tags {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.post-snippet {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

.read-more {
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
}

.read-more:hover {
  text-decoration: underline;
}

.edit-link {
  color: #007bff;
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;
}

.delete-icon {
  color: #ff0000;
  cursor: pointer;
}
</style>
