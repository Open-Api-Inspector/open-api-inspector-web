<template>
  <div
    class="space-y-4 m-2 rounded-xl p-3 duration-75"
    :class="
      generateBackgroundColorClass(apiRequest.method, 100) +
      ' hover:' +
      generateBackgroundColorClass(apiRequest.method, 200)
    "
  >
    <div class="flex cursor-pointer w-full" @click="toggleShowDetail">
      <div
        class="rounded-xl text-lg p-1.5"
        :class="generateBackgroundColorClass(apiRequest.method, 500)"
      >
        {{ describeEnum(apiRequest.method) }}
      </div>
      <p class="text-lg duration-100 font-medium text-left p-1.5 ml-1">
        <!-- Request URL -->
        {{ apiRequest.url }}
      </p>

      <span class="material-symbols-outlined text-right m-1.5 w-full">
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
import { RequestMethod } from "@/types/RequestMethod";

export default defineComponent({
  name: "RequestBox",
  props: {
    apiRequest: {
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
    getColorByMethod(method: RequestMethod) {
      switch (method) {
        case RequestMethod.GET:
          return "green";
        case RequestMethod.POST:
          return "orange";
        case RequestMethod.DELETE:
          return "red";
        case RequestMethod.PATCH:
          return "cyan";
        default:
          return "gray";
      }
    },
    describeEnum(method: RequestMethod) {
      return RequestMethod[method];
    },
    generateBackgroundColorClass(method: RequestMethod, colorCode: number) {
      let color: string = this.getColorByMethod(method);
      return `bg-${color}-${colorCode}`;
    },
  },
});
</script>
