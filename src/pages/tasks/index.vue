<script setup lang="ts">

import { supabase } from '@/lib/supabaseClient'
import { h, ref } from 'vue'
import type { Tables } from '../../../database.types';
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/DataTable.vue';

const tasks = ref<Tables<'tasks'>[] | null>(null)

    ; (async () => {
        const { data, error } = await supabase.from('tasks').select()

        if (error) console.log(error)


        tasks.value = data
        console.log('tasks: ', tasks.value)


        // return data
    })()







const columns: ColumnDef<Tables<'tasks'>>[] = [
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {


            return h('div', { class: 'text-left font-medium' }, row.getValue('name'))
        },
    },
    {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-left' }, 'Status'),
        cell: ({ row }) => {


            return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
        },
    },
    {
        accessorKey: 'due_date',
        header: () => h('div', { class: 'text-left' }, 'Due Date'),
        cell: ({ row }) => {


            return h('div', { class: 'text-left font-medium' }, row.getValue('due_date'))
        },
    },
    {
        accessorKey: 'project_id',
        header: () => h('div', { class: 'text-left' }, 'Project'),
        cell: ({ row }) => {


            return h('div', { class: 'text-left font-medium' }, row.getValue('project_id'))
        },
    },
    {
        accessorKey: 'collaborators',
        header: () => h('div', { class: 'text-left' }, 'Collaborators'),
        cell: ({ row }) => {
            return h(
                'div', 
                { class: 'text-left font-medium' }, 
                // below this will convert it to an array of numbers, but still a string. so its not an array
                JSON.stringify(row.getValue('collaborators'))
            )
        },
    },
    
]


</script>

<template>
    <!-- ----- ( v-if ) only show this when the tasks exists ----- -->
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>