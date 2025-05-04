<template>
  <div>
    <ul>
      <li v-for="(transaction, index) in user.transactions" :key="index"> {{ transaction }} </li>
    </ul>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed, ref } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>
<style>
</style>
