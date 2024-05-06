<template>
  <div class="job-details">
    <h2 class="titre">{{ job.titre }}</h2>
    <div class="details">
      <p class="description">{{ job.description }}</p>
      <p class="info">Salary: {{ job.salaire }}</p>
    </div>
    <button @click="closeDetails" class="close-button">Close</button>
  </div>
</template>

<script>
export default {
  name: 'job-details',
  props: ['job'],
  methods: {
      closeDetails() {
          this.$emit('close');
      }
  }
}
</script>

<style scoped>
.job-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.titre {
  font-size: 24px;
  margin-bottom: 10px;
}

.details {
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
}

.info {
  font-size: 14px;
  margin-bottom: 5px;
}

.close-button {
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #d9534f;
}
</style>
