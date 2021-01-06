<template>
  <div class="mt-5 shadow rounded overflow-hidden">
    <div class="p-4 bg-white space-y-6">
      <div>
        <label for="title" class="text-sm text-gray-900">タイトル</label>
        <input
          type="text"
          id="title"
          class="mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border-gray-300 rounded"
          :class="{ 'bg-gray-300': !isCreate }"
          :disabled="!isCreate"
        />
      </div>
      <div>
        <label for="content" class="text-sm text-gray-900">
          内容
        </label>
        <textarea
          id="content"
          rows="5"
          class="mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border-gray-300 rounded"
          :class="{ 'bg-gray-300': !isCreate }"
          :disabled="!isCreate"
        ></textarea>
      </div>
    </div>
    <div class="p-4 bg-gray-50 text-right" v-if="isCreate">
      <button-blue title="保存"></button-blue>
    </div>
  </div>
</template>

<script>
import ButtonBlue from '@/components/Buttons/ButtonBlue.vue';
export default {
  props: {
    isCreate: Boolean
  },
  components: { ButtonBlue }
};
</script>
