<template>
  <div class="home-container">
    <h1>Welcome !!</h1>
    <p>Get started navigating to the Jobs:</p>
    
    <div class="navigation-links">
      <router-link to="/add" class="nav-link">Add New Job</router-link>
      <router-link to="/jobs" class="nav-link">View Jobs</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>

.home-container h1 {
  font-family: 'Arial', sans-serif;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.home-container {
  background-color: #ffffff;
  margin-top:70px;
  margin-left:30px;
}

.home-container p {
  color: #555; 
  font-size: 1.2rem; 
  margin-bottom: 15px;
}

.home-container .nav-link {
  background-color: #0ddadd;
  border-color: #0dbadd;
  color: #ffffff;
  text-decoration: none; 
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer; 
  width: 200px;
  margin: 20px auto;
  text-align: center;
}

.home-container .nav-link:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.home-container .navigation-links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

</style>
