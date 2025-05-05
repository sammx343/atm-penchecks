<template>
  <main>
    <div class="container" v-if="isLoggedIn">
      <CurrentFunds></CurrentFunds>
      <AddFunds></AddFunds>
      <WithDrawFunds></WithDrawFunds>
      <SendMoney></SendMoney>
    </div>
    <h2 v-else>Welcome!</h2>
  </main>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue';
import CurrentFunds from '../components/CurrentFunds.vue';
import AddFunds from '../components/AddFunds.vue';
import WithDrawFunds from '../components/WithdrawFunds.vue';
import SendMoney from '../components/SendMoney.vue';

const userStore = useUserStore();

const isLoggedIn = computed( () => userStore.isLoggedIn)
</script>
