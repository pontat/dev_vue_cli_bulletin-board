<template>
  <div class="mt-5 shadow rounded overflow-hidden">
    <div class="p-4 bg-white space-y-6">
      <div>
        <label for="comment" class="text-sm text-gray-900">コメント</label>
        <input
          type="text"
          id="comment"
          class="mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border-gray-300 rounded"
        />
      </div>
    </div>
    <div class="p-4 bg-gray-50 text-right">
      <button-blue title="送信"></button-blue>
    </div>
  </div>
</template>

<script>
import ButtonBlue from '@/components/Buttons/ButtonBlue.vue';
export default {
  components: { ButtonBlue }
};
</script>
