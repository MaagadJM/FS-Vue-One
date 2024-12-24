import type { ColumnDef } from "@tanstack/vue-table"
import type { Projects } from "../supaQueries"
import { RouterLink } from "vue-router"

export const columns: ColumnDef<Projects[0]>[] = [
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