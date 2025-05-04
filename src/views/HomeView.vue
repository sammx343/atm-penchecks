<template>
  <main>
    <CurrentFunds></CurrentFunds>
    <AddFunds></AddFunds>
    <WithDrawFunds></WithDrawFunds>
    <SendMoney></SendMoney>
  </main>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue';
import CurrentFunds from '../components/CurrentFunds.vue';
import AddFunds from '../components/AddFunds.vue';
import WithDrawFunds from '../components/WithdrawFunds.vue';
import SendMoney from '../components/SendMoney.vue';


</script>
