<template>
  <div>
    <article v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/post-${post.slug}`">
        <h2 v-html="post.title.rendered"/>
      </NuxtLink>
      <p v-html="post.excerpt.rendered"/>
    </article>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const { data: posts } = await useFetch(config.public.apiBase + '/wp-json/wp/v2/posts')


</script>

<script lang="ts">


</script>

<style scoped>

</style>