<template>
  <div id="app">
    <nav class="navbar">
      <ul class="navbar-links">
        <li><router-link class="post-link" to="/posts">Posts</router-link></li>
        <li><router-link class="add-post-link" to="/create">Add Post</router-link></li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.navbar-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right: 35px;
}
.navbar-links li {
  margin-right: 20px;
  font-size: 18px;
}
.navbar {
  padding: 30px 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.post-link,
.add-post-link {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.post-link:hover,
.add-post-link:hover {
  background-color: #f2f2f2;
}
</style>
