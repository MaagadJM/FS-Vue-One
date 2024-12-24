<script setup lang="ts">

import { columns } from '@/utils/tableColumns/tasksColumns';
import { tasksWithProjectsQuery } from '@/utils/supaQueries';
import type { TasksWithProjects } from '@/utils/supaQueries';

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
    const { data, error } = await tasksWithProjectsQuery


    if (error) console.log(error)

    tasks.value = data
    console.log('tasks: ', tasks.value)

    // return data
}
await getTasks()

</script>

<template>
    <!-- ----- ( v-if ) only show this when the tasks exists ----- -->
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>