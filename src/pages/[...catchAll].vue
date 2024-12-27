<script setup lang="ts">
import { useErrorStore } from '@/stores/error';
import AppErrorPage from '../components/AppError/AppErrorPage.vue';

// Once any user visits an undefined route this store function will execute and will turn the activeError state to true
useErrorStore().setError()
</script>

<template>

<div>

</div>
    <!-- <AppErrorPage /> -->

</template>