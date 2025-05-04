<template>
    <main>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">User name</label>
                <input type="text" name="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password" required>
            </div>
            <div class="form-group">
                <input type="submit" value="Login">
            </div>
            <a href="/signup"> Don't have an account? Click here</a>
        </form>
    </main>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter  } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore();
const router = useRouter();
const username = ref('');
const password = ref('');

function login(){
    console.log('does')
    if(!username || !password){
        return;
    }
    
    const foundUser = userStore.login(username.value, password.value);
    if(!foundUser){
        alert("Invalid user name or password")
    }else{
        router.push({ name: 'home' });
    }
}
</script>

<style scoped>
    .form-group{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
</style>