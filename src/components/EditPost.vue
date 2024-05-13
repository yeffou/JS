<template>
    <form @submit.prevent="handleSubmit" class="form-container">
      <div class="form-group">
        <label for="jobTitle" class="form-label">Title:</label>
        <input type="text" v-model="postData.title" id="jobTitle" class="form-input" required>
      </div>
  
      <div class="form-group">
        <label for="tags" class="form-label">Tags (comma separated):</label>
        <input type="text" v-model="tagInput" id="tags" class="form-input">
      </div>
  
      <div class="form-group">
        <label for="body" class="form-label">Body:</label>
        <textarea v-model="postData.body" id="body" class="form-textarea" rows="4"></textarea>
      </div>
  
      <button class="submit-button">Update Post</button>
    </form>
  </template>
  
  <script>
  import { projectFirestore } from '../Firebase/Config'
  
  export default {
    props: ['id'],
    data() {
      return {
        tagInput: '',
        postData: {
          title: "",
          tags: [],
          body: ""
        }
      };
    },
    async mounted() {
      try {
        let res = await projectFirestore.collection('posts').doc(this.id).get()
        if (!res.exists) {
          throw Error('That post does not exist')
        }
        const postData = { ...res.data(), id: res.id }
        this.postData = postData // Assign fetched data to postData
        this.tagInput = this.postData.tags.join(', '); // Populate tag input with existing tags
      } catch (err) {
        console.error(err.message)
      }
    },
    methods: {
      async handleSubmit() {
        // Split the comma-separated tags and trim extra spaces
        this.postData.tags = this.tagInput.split(',').map(tag => tag.trim())
        
        const postUpdate = {
          title: this.postData.title,
          tags: this.postData.tags,
          body: this.postData.body
        }
        
        try {
          await projectFirestore.collection('posts').doc(this.id).update(postUpdate)
          this.$router.push('/posts') // Redirect to home page after updating
        } catch (err) {
          console.error(err.message)
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    display: block;
    font-weight: bold;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-textarea {
    resize: vertical;
  }
  
  .submit-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  