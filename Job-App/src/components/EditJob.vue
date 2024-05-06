<template>
  <div>
    <h2>Edit Job</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="titre">Title:</label>
        <input type="text" id="title" v-model="Job.titre" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="Job.description" required></textarea>
      </div>
      <div>
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model.number="Job.salaire" required>
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" id="age" v-model="Job.Age" required>
      </div>
      <button type="submit" style='background-color: #dc3545;'>Save Changes</button>
      <button type="button" @click="cancelEdit"  style='background-color: #ffc107;'>Cancel</button>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'EditJob',
  props: {
    job: Object
  },
  data() {
    return {
      Job: { ...this.job }
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.Job);
    },
    cancelEdit() {
      this.$emit('cancel');
    }
  }
}
</script>


<style>
form {
  max-width: 440px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"], textarea, input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 7px 15px;
  color: white;
  border: 2px solid ; 
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 20px; 
}

button:hover {
  background-color: #155aa3;
}
</style>