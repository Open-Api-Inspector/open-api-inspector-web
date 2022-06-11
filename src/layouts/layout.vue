<template>
  <div>
    <div class="bg-indigo-500 flex items-center h-14">
      <div class="ml-5 align-middle text-white font-semibold text-xl">
        Open API Inspector
      </div>
      <div class="flex-1">
        <!-- <button
          class="m-4 px-4 py-1 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Connect
        </button> -->
      </div>
    </div>
    <!-- Body Content -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "mainLayout",
});
</script>
