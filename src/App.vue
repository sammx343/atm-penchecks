<template>
  <header>
    <div class="wrapper">
      <h1>ATM Penchecks</h1>
      <div>
        <p v-if="isLoggedIn">Welcome {{ user?.username }}</p>
      </div>
      <nav>
        <template v-if="isLoggedIn">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/transaction-history">Transactions History</RouterLink>
          <a href="#" @click="logout">Logout</a>
        </template>
        <template v-else>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/signup">Sign up</RouterLink>
        </template>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore';
import { computed, ref } from 'vue';

const userStore = useUserStore();
const router = useRouter();

userStore.initialize();

const isLoggedIn = computed( () => userStore.isLoggedIn)
const user = computed(()=>userStore.user) 

function logout(){
  router.push({ name: 'login' });
  userStore.logout();
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
  }

  nav {
    display: flex;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
