<script setup lang="ts">

import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database.types';

const tasks = ref<Tables<'tasks'>[] | null>(null)

    ; (async () => {
        const { data, error } = await supabase.from('tasks').select()

        if (error) console.log(error)


        tasks.value = data
        console.log('tasks: ', tasks.value)


        // return data
    })()

</script>

<template>
    <div>
        <h1>Tasks Page</h1>
        <RouterLink to="/">Home</RouterLink>
        <!-- if projects is not null and its array it will show array then if not do nothing -->
        <!-- {{ projects ? projects[0] : '' }} -->

        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.name }}
            </li>
        </ul>

    </div>
</template>