<script setup lang="ts">

const getProjects = async () => {
    const { data, error } = await supabase.from('projects').select()

    if (error) console.log(error)

    console.log('Projects : ', data)
}

await getProjects()


</script>

<template>
    <div>
        <h1>Home Page</h1>
        <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Projects 1</RouterLink>
    </div>
</template>