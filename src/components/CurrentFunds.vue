<template>
    <h2>My current funds: ${{ user?.funds }} </h2>
</template>
<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue';

const userStore = useUserStore();
const user = computed( () => userStore.user);
</script>
