<template>
  <div>
    <h2>{{ islandName }} 開発計画</h2>
    <hr />
    <div class="develop" style="display: flex; flex-wrap:wrap">
      <IslandView class="view" />
      <PlanView class="view" />
    </div>
    <hr />
    <LogView />
  </div>
</template>

<script>
import IslandView from "@/components/IslandView.vue";
import LogView from "@/components/LogView.vue";
import PlanView from "@/components/PlanView.vue";

export default {
  name: "Develop",
  components: {
    IslandView,
    LogView,
    PlanView
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
