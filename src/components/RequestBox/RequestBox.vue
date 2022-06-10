<template>
  <div
    class="space-y-4 bg-green-100 m-2 rounded-xl p-3 hover:bg-green-200 duration-75"
  >
    <div class="flex cursor-pointer" @click="toggleShowDetail">
      <div class="bg-green-500 rounded-xl text-lg p-1.5">GET</div>
      <p class="text-lg duration-100 font-medium text-left p-1.5 ml-1">
        <!-- Request URL -->
        /exampleA/exampleB/apiC
      </p>

      <span class="material-symbols-outlined align-middle m-1.5">
        {{ isShowDetail ? "expand_less" : "expand_more" }}
      </span>
    </div>

    <TabWithIcons :class="isShowDetail ? '' : 'hidden'" />
  </div>
</template>

<script lang="ts">
import { ApiRequest } from "@/types/ApiRequest";
import { defineComponent, PropType } from "vue";
import TabWithIcons from "@/components/RequestBox/Tab.vue";

export default defineComponent({
  name: "RequestBox",
  props: {
    request: {
      type: Object as PropType<ApiRequest>,
      required: true,
    },
  },
  data() {
    return {
      isShowDetail: false,
    };
  },
  components: {
    TabWithIcons,
  },
  methods: {
    toggleShowDetail() {
      this.isShowDetail = !this.isShowDetail;
    },
  },
});
</script>
