<template>
  <div id="app">
    <nav class="navbar">
      <ul class="navbar-links">
        <li><router-link to="/posts">Posts</router-link></li>
        <li><router-link to="/create">Add Post</router-link></li>
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
.navbar-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right:35px;
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

</style>