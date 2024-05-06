<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="Title">JOBBing</router-link>
      <ul class="navbar-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add">Add Job</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>


<script>

export default {
  name: 'App',
};
</script>


<style>
#app {
  font-family: Arial, sans-serif;
  color: rgb(255, 255, 255);
}

.navbar {
  background-color: #000000;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Title {
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  margin-left: 35px;
}

.navbar-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right:35px;
}

.navbar-links li {
  margin-right: 20px;
}

.navbar-links li:last-child {
  margin-right: 0;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
</style>