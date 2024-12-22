<script setup lang="ts">

import { supabase } from '@/lib/supabaseClient'
import { h, ref } from 'vue'
import type { Tables } from '../../../database.types';
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/DataTable.vue';

const projects = ref<Tables<'projects'>[] | null>(null)

    ; (async () => {
        const { data, error } = await supabase.from('projects').select()

        if (error) console.log(error)


        projects.value = data
        console.log('projects: ', projects.value)


        // return data
    })()

// the "[]" here <Tables<'projects'>>"[]" tell the typescript that it should be an array
const columns: ColumnDef<Tables<'projects'>>[] = [
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left font-medium' }, row.getValue('name'))
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