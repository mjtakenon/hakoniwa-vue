<template>
  <div>
    <h2>{{ islandName }} 開発計画</h2>
    <hr />
    <div class="develop" style="display: flex; flex-wrap:wrap">
      <IslandView class="view" />
      <CommandView class="view" />
    </div>
    <hr />
    <LogView />
  </div>
</template>

<script>
import IslandView from "@/components/IslandView.vue";
import LogView from "@/components/LogView.vue";
import CommandView from "@/components/CommandView.vue";

export default {
  name: "Develop",
  components: {
    IslandView,
    LogView,
    CommandView
  }
};
</script>

<style scoped lang="scss">
.develop {
  margin: auto;
  width: 80%;
}
.view {
  margin: 0px 10px;
}
</style>
