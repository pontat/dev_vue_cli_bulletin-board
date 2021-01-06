<template>
  <div>
    <h3 class="text-lg font-bold leading-6 text-gray-900">
      詳細
    </h3>
    <post-form :isCreate="false"> </post-form>
    <comment-form> </comment-form>
    <div v-for="num in 20" :key="num">
      <comment-card></comment-card>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/Forms/PostForm.vue';
import CommentForm from '@/components/Forms/CommentForm.vue';
import CommentCard from '@/components/Cards/CommentCard.vue';
export default {
  components: { PostForm, CommentForm, CommentCard }
};
</script>
