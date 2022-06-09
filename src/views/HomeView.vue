<template>
  <div class="home">
    <simple-web-socket />
    <RequestBox />
    <RequestBox />
    <RequestBox />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SimpleWebSocket from "@/components/SimpleWebSocket.vue";
import RequestBox from "@/components/RequestBox/RequestBox.vue";

@Options({
  components: {
    SimpleWebSocket,
    RequestBox,
  },
})
export default class HomeView extends Vue {}
</script>
