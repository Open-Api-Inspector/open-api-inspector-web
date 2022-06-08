<template>
  <div class="home">
    <simple-web-socket />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SimpleWebSocket from "@/components/SimpleWebSocket.vue";

@Options({
  components: {
    SimpleWebSocket,
  },
})
export default class HomeView extends Vue {}
</script>
