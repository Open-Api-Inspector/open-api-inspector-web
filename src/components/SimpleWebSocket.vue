<template>
  <div>
    <div>
      <label class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <font-awsome-icon icon="fa-solid fa-user-secret" />
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="WebSocket URL"
          type="text"
          name="search"
          v-model="websocketUrl"
        />
      </label>
    </div>
    <div>
      <button
        class="m-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        @click="startWebSocket"
      >
        Connect
      </button>
      <button
        class="m-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        @click="closeWebSocket"
      >
        Close Connection
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SimpleWebSocket extends Vue {
  websocketUrl = "ws://localhost:8081/ws";
  client: WebSocket | null = null;

  startWebSocket() {
    this.client = new WebSocket(this.websocketUrl);
    this.client.addEventListener("open", (event) => {
      console.log("Open Success");
    });
    this.client.addEventListener("message", (event) => {
      console.log("Event!");
      console.log(event);
    });

    this.client.addEventListener("close", (event) => {
      console.log("Closed");
    });
    console.log(this.client);
  }

  closeWebSocket() {
    this.client?.close();
  }
}
</script>
