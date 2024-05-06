<template>
    <div class="confirm">
      <p>Are you sure you want to delete <br><strong>{{ job.title }}</strong>?</p>
      <div class="button-container">
        <button @click="confirmDelete" class="confirm-button">Yes</button>
        <button @click="cancelDelete" class="cancelButton">No</button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ConfirmDelete',
    props: {
      job: Object
    },
    methods: {
      confirmDelete() {
        this.$emit('confirm');
      },
      cancelDelete() {
        this.$emit('cancel');
      }
    }
  }
  </script>
  <style>
  .confirm {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 8px;
    padding: 25px;
    
  }
  
  .confirm p {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
    
  }
  
  .button-container {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
   
  }
  
  .confirm-button, .cancel-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    transition: background-color 0.3s ease-in-out;
    
  }
  
  .confirm-button {
    background-color: #ff011b;
  }
  .confirm-button{
    background-color: rgb(0, 255, 0);
  }
  
  .confirm-button:hover, .cancel-button:hover {
    opacity: 0.5;
  
  }
  
  

  </style>