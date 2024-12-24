<script setup lang="ts">


// import { h, ref } from 'vue'
import type { Tables } from '../../../database.types';
import type { ColumnDef } from '@tanstack/vue-table';

import { RouterLink } from 'vue-router';
import { projectsQuery, type Projects } from '@/utils/supaQueries';

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

const getProjects = async () => {
    const { data, error } = await projectsQuery

    if (error) console.log(error)

    projects.value = data
    console.log('projects: ', projects.value)
}
await getProjects()

const columns: ColumnDef<Projects[0]>[] = [
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {
            return h(RouterLink, { to: `/projects/${row.original.slug}`, class: 'text-left font-medium hover:bg-muted block' },
                () => row.getValue('name'))
        }
    },
    {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-left' }, 'Status'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
        }
    },
    {
        accessorKey: 'collaborators',
        header: () => h('div', { class: 'text-left' }, 'Collaborators'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left font-medium' },
                // this JSON.stringify will convert it to an array of numbers, but still a string. so its not an array
                JSON.stringify(row.getValue('collaborators'))
            )
        }
    },

]

</script>

<template>
    <!-- if projects exist then show its columns and data -->
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>