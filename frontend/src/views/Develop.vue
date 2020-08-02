<template>
  <div class="develop">
      <h2> {{ IslandView.name }} 開発画面 </h2>
      <IslandView />
      <LogView />
  </div>
</template>

<script>

import IslandView from "@/components/IslandView.vue";

export default {
  name: "Home",
  components: {
    IslandView
  }
};
</script>
