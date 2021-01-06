<template>
  <div>
    <button-blue class="ml-2" title="新規作成"></button-blue>
    <div class="flex flex-wrap mt-4">
      <div
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        v-for="num in 20"
        :key="num"
      >
        <post-card></post-card>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBlue from '@/components/Buttons/ButtonBlue.vue';
import PostCard from '@/components/Cards/PostCard.vue';

export default {
  components: { ButtonBlue, PostCard }
};
</script>
