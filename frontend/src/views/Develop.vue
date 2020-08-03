<template>
  <div class="develop">
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
