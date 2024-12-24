<script setup lang="ts">

import { columns } from '@/utils/tableColumns/projectsColumns';
import { projectsQuery } from '@/utils/supaQueries';
import type { Projects } from '@/utils/supaQueries';

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

const getProjects = async () => {
    const { data, error } = await projectsQuery

    if (error) console.log(error)

    projects.value = data
    console.log('projects: ', projects.value)
}
await getProjects()

</script>

<template>
    <!-- if projects exist then show its columns and data -->
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>