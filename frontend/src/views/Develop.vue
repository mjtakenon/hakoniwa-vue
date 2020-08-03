<template>
  <div class="develop">
    <h2>{{ IslandView.name }} 開発画面</h2>
    <IslandView />
    <hr />
    <LogView />
  </div>
</template>

<script>
import IslandView from "@/components/IslandView.vue";
import LogView from "@/components/LogView.vue";

export default {
  name: "Develop",
  components: {
    IslandView,
    LogView
  }
};
</script>
