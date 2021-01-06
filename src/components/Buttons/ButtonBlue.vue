<template>
  <router-link
    to="/posts/create"
    class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm font-bold text-white rounded shadow hover:shadow-md"
  >
    {{ title }}
  </router-link>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
