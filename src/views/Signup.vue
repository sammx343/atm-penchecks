<template>
    <main>
        <form @submit.prevent="signup">
            <div class="form-group">
                <label for="username">User name</label>
                <input type="text" name="username" v-model="username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="form-group">
                <input type="submit" value="Create account">
            </div>
            <RouterLink to="/login">Already have an account? Click here</RouterLink>
        </form>
    </main>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue';
import { RouterLink, RouterView, useRouter  } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();
const username = ref('');
const password = ref('');

function signup(event){
    if(username.value && password.value){
        userStore.signup(username.value, password.value);
        username.value = '';
        password.value = '';
        router.push({ name: 'home' });

    }else{
        alert('Username or passwords are missing');
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