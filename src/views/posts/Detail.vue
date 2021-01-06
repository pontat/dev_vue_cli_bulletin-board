<template>
  <div>
    <h3 class="text-lg font-bold leading-6 text-gray-900">
      詳細
    </h3>
    <post-form :isCreate="false"> </post-form>
  </div>
</template>

<script>
import PostForm from '@/components/Forms/PostForm.vue';
export default {
  components: { PostForm }
};
</script>
