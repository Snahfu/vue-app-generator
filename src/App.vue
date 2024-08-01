<script setup></script>

<template>
  <header class="navbar navbar-expand-lg navbar-light bg-primary mb-2">
    <div class="container-fluid">
      <!-- Logo Section -->
      <a class="navbar-brand" href="/">
        <img src="" alt="Logo" width="25" height="25" />
      </a>

      <!-- Navigation Links -->
      <div class="navbar-nav mx-auto">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/main">Main</router-link>
        <!-- Add more links as needed -->
      </div>

      <!-- User Login Section -->
      <div class="d-flex">
        <button class="btn bg-light btn-outline me-2" @click="login">Login</button>
        <button class="btn bg-light btn-outline" @click="logout">Logout</button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  height: 80px; /* Adjust as needed */
}

.navbar-brand img {
  max-height: 100%;
}

.navbar-nav {
  flex: 1;
  text-align: center;
}

.btn {
  margin: 0 5px;
}
</style>
