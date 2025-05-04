<template>
    <form @submit.prevent="addFunds">
        <div class="form-group">
          <h2>Add funds</h2>
          <input type="number" placeholder="How much money do you want to add?" v-model="amount">
        </div>
        <input type="submit" value="Add">
    </form>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed, ref } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);

const amount = ref()

function addFunds(){
    if(amount.value > 0){
        userStore.changeUserFunds(user.value.id, amount.value);
        alert(`$${amount.value} added to your account`)
    }else{
        alert('there was an error adding your funds');
    }
    amount.value = '';
}
</script>
<style scoped>
    .form-group{
        display: flex;
        flex-direction: column;
    }
</style>
  