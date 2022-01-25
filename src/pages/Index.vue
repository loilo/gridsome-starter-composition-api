<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p>
      Here's an example counter which uses <a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener">Vue's Composition API</a>:
    </p>

    <button @click="counter--">-</button>
    {{ counter }}
    <button @click="counter++">+</button>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<script setup>
import { ref } from '@vue/composition-api'

let counter = ref(0)
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
