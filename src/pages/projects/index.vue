<script setup lang="ts">

import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database.types';

const projects = ref<Tables<'projects'>[] | null> (null)

;(async () => {
    const { data, error } = await supabase.from('projects').select()

    if (error) console.log(error)


    projects.value = data
    console.log('projects: ', projects.value)


    return data
})()

</script>

<template>
    <div>
        <h1>Projects Page</h1>
        <RouterLink to="/">Home</RouterLink>
        <!-- if projects is not null and its array it will show array then if not do nothing -->
        <!-- {{ projects ? projects[0] : '' }} -->

        <ul>
            <li v-for="project in projects" :key="project.id">
                {{ project.name }}
            </li>
        </ul>

    </div>
</template>