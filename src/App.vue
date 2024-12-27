<script setup lang="ts">
import { useErrorStore } from './stores/error';




const { activeError } = storeToRefs(useErrorStore())

</script>

<template>
  <AuthLayout>

    <!-- Conditionally render this if we have an activeError -->
    <AppErrorPage v-if="activeError" />

    <!-- or Else we don't have an error then do this job -->
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">

        <Component v-if="Component" :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>
            Loading . . .
          </span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>