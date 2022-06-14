<template>
  <div class="home">
    <RequestBox
      v-for="apiRequest in requestData"
      :key="apiRequest.requestId"
      :apiRequest="apiRequest"
    />
  </div>
</template>

<script lang="ts">
import RequestBox from "@/components/RequestBox/RequestBox.vue";
import { defineComponent } from "vue";
import { RequestMethod } from "@/types/RequestMethod";
import { ApiRequest } from "@/types/ApiRequest";
import WebSocketAccessManager from "@/services/webSocketAccessManager/webSocketAccessManager";

export default defineComponent({
  name: "HomeView",
  components: {
    RequestBox,
  },
  mounted() {
    let wsa = WebSocketAccessManager.instance;
    wsa.subscribeOnNewRequest(this.onNewRequest);
  },
  data() {
    return {
      mockedData: {
        method: RequestMethod.PATCH,
        url: "/exampleA/exampleB/api",
      } as ApiRequest,
      requestData: [] as Array<ApiRequest>,
    };
  },
  methods: {
    onNewRequest(apiRequest: ApiRequest) {
      this.requestData.push(apiRequest);
    },
  },
});
</script>
