<template>
  <div>
    <article v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/post-${post.slug}`">
        <h2 v-html="post.title.rendered"/>
      </NuxtLink>
      <p v-html="post.excerpt.rendered"/>
      <div>pos: {{x}}, {{y}}</div>
    </article>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '~/store/index'

  const config = useRuntimeConfig()

  const { data: posts } = await useFetch(config.public.apiBase + '/wp-json/wp/v2/posts')


  // Test the store
  const store = useStore()

  console.log(store.userList);


  // Test Vue Use
  const { x, y } = useMouse()




</script>

<script lang="ts">


</script>

<style scoped>

</style>