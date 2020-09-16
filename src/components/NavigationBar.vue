<template>
  <div>
    <header>
      <img v-bind:src="image" alt="logo" class="logo">
      <nav>
        <ul class="nav_links">
          <li>
            <router-link to="/" class="rLink">Home</router-link>
          </li>
          <li>
            <router-link to="/biography" class="rLink">Bio</router-link>
          </li>
          <li>
            <router-link to="" class="rLink">Projects</router-link>
          </li>
          <li>
            <router-link to="" class="rLink">Hard Skills</router-link>
          </li>
          <li>
            <router-link to="" class="rLink">Soft Skills</router-link>
          </li>
        </ul>
      </nav>
      <router-link to="" class="cta">
        <button>Contact</button>
      </router-link>
    </header>
    <hr>
  </div>
</template>

<script>
import image from './images/logo.png'


export default {
  name: "NavigationBar",
  data() {
    return {
      image
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

* {
  margin-top: 0px;
}

.logo {
  color: blue;
  cursor: pointer;
  height: 200px;
  width: 200px;
  margin-right: auto;
  margin-bottom: 0px;
}

li, .rLink, button {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  max-height: 100px;
}

.nav_links {
  list-style: none;
}

.nav_links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav_links li .rLink {
  transition: all 0.3s ease 0s;
}

.nav_links li .rLink:hover {
  color: #0088a9;
}

button {
  padding: 9px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: rgba(0, 136, 169, 0.8);
}
</style>