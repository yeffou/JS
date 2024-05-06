<template>
  <div class="container">
    <h2>Add New Job</h2>
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-md-12">
        <label for="title" class="form-label">Title:</label>
        <input type="text" id="title" v-model="formData.titre" required class="form-control">
      </div>
      <div class="col-md-12">
        <label for="description" class="form-label">Description:</label>
        <textarea id="description" v-model="formData.description" required class="form-control"></textarea>
      </div>
      <div class="col-md-6">
        <label for="salary" class="form-label">Salary:</label>
        <input type="number" id="salary" v-model.number="formData.salaire" required class="form-control">
      </div>
      <div class="col-md-6">
        <label for="experienceYears" class="form-label">Age (years):</label>
        <input type="number" id="experienceYears" v-model.number="formData.Age" required
          class="form-control">
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary">Add Job</button>
        <button type="button" @click="cancel" class="btn btn-secondary">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jobs: [],
      formData: {
        titre: '',
        description: '',
        salaire: null,
        Age: null,
      },
    };
  },
  methods: {
    submitForm() {
  const newJob = { ...this.formData }; 
  newJob.id = this.generateUniqueId(); 

  fetch('http://localhost:3000/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  })
    .then(response => response.json())
    .then(data => {
      this.jobs.push(data);
    })
    .catch(error => {
      console.error('Error adding new job:', error);
    });

  this.resetForm(); 
},
    cancel() {
      this.$emit('cancel');
      this.resetForm();
    },
    resetForm() {
      this.formData.titre = '';
      this.formData.description = '';
      this.formData.salaire = null;
      this.formData.Age = null;
    },

    generateUniqueId() {
      return Math.floor(Math.random() * 10000) + 1;
    }
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #d435dc;
  border-color: #d435dc;
  margin-right: 20px;
}

.btn-secondary {
  background-color: #7b07ff;
  border-color: #7b07ff;
}

.form-label{
  color:black;
}
</style>