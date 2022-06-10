<template>
  <div class="home">
    <simple-web-socket />
    <RequestBox :apiRequest="mockedData" />
    <RequestBox :apiRequest="mockedData" />
    <RequestBox :apiRequest="mockedData" />
  </div>
</template>

<script lang="ts">
import SimpleWebSocket from "@/components/SimpleWebSocket.vue";
import RequestBox from "@/components/RequestBox/RequestBox.vue";
import { defineComponent } from "vue";
import { RequestMethod } from "@/types/RequestMethod";
import { ApiRequest } from "@/types/ApiRequest";

export default defineComponent({
  name: "HomeView",
  components: {
    SimpleWebSocket,
    RequestBox,
  },
  data() {
    return {
      mockedData: {
        method: RequestMethod.PATCH,
        url: "/exampleA/exampleB/api",
      } as ApiRequest,
    };
  },
});
</script>
