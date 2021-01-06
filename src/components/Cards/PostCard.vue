<template>
  <div class="m-2 bg-white shadow rounded overflow-hidden">
    <div class="px-4 py-5">
      <h3 class="text-lg font-bold text-gray-900 leading-tight">
        掲示板のタイトル
      </h3>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="p-4 bg-gray-50">
          <dd class="text-sm text-gray-900">
            内容が入ります。内容が入ります。内容が入ります。内容が入ります。
          </dd>
        </div>
        <div class="flex justify-between p-4 bg-white">
          <dt class="text-sm font-medium text-gray-500">2020.12.28</dt>
          <router-link
            to="posts/1"
            class="text-sm text-indigo-600 hover:text-indigo-500"
            >詳細</router-link
          >
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bulletinBoard: Object
  }
};
</script>
