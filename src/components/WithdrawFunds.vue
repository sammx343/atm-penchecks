<template>
    <form @submit.prevent="withDrawFunds">
        <div class="form-group">
          <h2>Withdraw funds</h2>
          <input type="number" placeholder="How much money do you want to withdraw?" v-model="amount">
        </div>
        <input type="submit" value="Withdraw">
    </form>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed, ref } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);

const amount = ref()

function withDrawFunds(){
    if(amount.value > user.value.funds){
        alert('You can not withdraw that quantity');
    }else{
        userStore.changeUserFunds(user.value.id, -amount.value);
        alert(`$${amount.value} withdrawed from your account`)
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
