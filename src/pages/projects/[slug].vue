<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div>
        <h1>Project Name {{ route.params?.slug }}</h1>
    </div>
</template>