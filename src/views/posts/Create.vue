<template>
  <div>
    <h3 class="text-lg font-bold leading-6 text-gray-900">
      新規作成
    </h3>
    <post-form :isCreate="true"> </post-form>
  </div>
</template>

<script>
import PostForm from '@/components/Forms/PostForm.vue';
export default {
  components: { PostForm }
};
</script>
