<template>
    <form @submit.prevent="sendMoney">
        <div class="form-group">
          <h2>Send money</h2>
          <input type="number" placeholder="How much money do you want to send?" v-model="amount" required>
          <input type="number" placeholder="Write the id of the user you want to send money to" v-model="recieverId" required>
        </div>
        <input type="submit" value="Send money">
    </form>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed, ref } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);

const amount = ref()
const recieverId = ref('')

function sendMoney(){
    try{
        if( amount.value > user.value.funds){
            alert('You can not send that quantity of money');
        }else{
            userStore.sendMoneyBetweenUsers(user.value.id, recieverId.value, amount.value);
            alert(`$${amount.value} sent to user with id ${recieverId.value} successfully`);
            amount.value = '';
            recieverId.value = '';
        }
    
    }catch(error){
        alert(error)
    }
}
</script>
<style scoped>
    .form-group{
        display: flex;
        flex-direction: column;
    }
</style>
  