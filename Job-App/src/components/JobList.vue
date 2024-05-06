<template>
      <div class="container">
      <h2 class="mb-4">Jobs</h2>
      
      <ul class="list-group">
        <li v-for="job in jobs" :key="job.id" class="list-group-item d-flex justify-content-between align-items-center">
          <h3>{{ job.titre }}</h3>
          <div class="btn-group" role="group" aria-label="Job Actions">
            <button type="button" class="btn btn-outline-primary btn-sm" @click.stop="viewDetails(job)">View Details</button>
            <button type="button" class="btn btn-outline-warning btn-sm" @click.stop="editJob(job)">Edit</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click.stop="confirmDeleteJob(job)">Delete</button>
          </div>
        </li>
      </ul>
      
      <JobDetails v-if="selectedJob" :job="selectedJob" @close="close" />
      <EditJob v-if="Edit" :job="selectedJobid" @submit="updateJob" @cancel="cancelEdit" />
      <ConfirmDelete v-if="Confirm" :job="selectedJobid" @confirm="deleteJob" @cancel="cancelDelete" />
      
    </div>
  </template>
  
  <script>
  import JobDetails from './JobDetails.vue';
  import EditJob from './EditJob.vue';
  import ConfirmDelete from './Confirmation.vue';

  export default {
    name: 'JobList',
    components: {
      JobDetails,
      EditJob,
      ConfirmDelete,
    },
    data() {
      return {
        jobs: [],
        selectedJob: null,
        Edit: false,
        Confirm: false,
        selectedJobid: null,
      };
    },
    created() { 
        fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(data => {
          this.jobs = data;
        })
        .catch(error => {
          console.error('Error fetching job data:', error);});
  },
    methods: {
  
    close() {
      this.selectedJob = null;
    },
    viewDetails(job) {
      this.selectedJob = job;
    },
    editJob(job) {
      this.selectedJobid = { ...job}; 
      this.Edit = true;
    },
    updateJob(updatedJob) {
      const index = this.jobs.findIndex(j => j.id === updatedJob.id);
      if (index !== -1) {
        this.jobs.splice(index, 1, updatedJob);
      }
      this.Edit = false;
    },
    confirmDeleteJob(job) {
      this.selectedJobid = job;
      this.Confirm = true;
    },
    deleteJob() {
      const index = this.jobs.findIndex(j => j.id === this.selectedJobid.id);
      if (index !== -1) {
        this.jobs.splice(index, 1);
      }
      this.selectedJobid = null;
      this.Confirm = false;
    },
    cancelDelete() {
      this.selectedJobid = null;
      this.Confirm = false;
    },
    cancelEdit() {
      this.selectedJobid = null;
      this.Edit = false;
    },
  }
  
    };
  </script>

  <style>

</style>