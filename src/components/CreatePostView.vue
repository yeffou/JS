<template>
    <form @submit.prevent="submitPost" class="post-form">
      <h2>Create a New Post</h2>
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="post.title" required>
      </div>
      <div class="form-group">
        <label for="body">Body:</label>
        <textarea id="body" v-model="post.body" rows="6" required></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input type="text" id="tags" v-model="tagInput" placeholder="Separate tags with commas">
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
<script>
import { projectFirestore } from '../Firebase/Config';

export default {
  data() {
    return {
      post: {
        title: '',
        tags: [],
        body: '',
      },
      tagInput: '',
    };
  },
  methods: {
    async submitPost() {
      
      this.post.tags = this.tagInput.split(',').map(tag => tag.trim());

      try {
        // Add the post data to Firestore (replace 'bodys' with your collection name)
        const docRef = await projectFirestore.collection('posts').add(this.post);
        console.log("Post added successfully with ID: ", docRef.id);

        // Redirect to the home page or any other page after successful submission
        this.$router.push('/posts');
      } catch (error) {
        console.error("Error adding post to Firestore: ", error);
        // Handle error here, show error message to the user, etc.
      } finally {
        // Reset the form fields regardless of success or failure
        this.post.title = '';
        this.tagInput = '';
        this.post.body = '';
      }
    },
  },
};
</script>
  
  <style scoped>
  .post-form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  