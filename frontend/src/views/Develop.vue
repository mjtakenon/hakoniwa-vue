<template>
  <div>
    <h2 class="center">{{ islandName }} 開発計画</h2>
    <StatusView />
    <hr />
    <div class="develop" style="display: flex; flex-wrap:wrap">
      <IslandView class="island" />
      <PlanView class="plan" />
    </div>
    <hr />
    <LogView />
  </div>
</template>

<script>
import StatusView from "@/components/StatusView.vue"
import IslandView from "@/components/IslandView.vue"
import LogView from "@/components/LogView.vue"
import PlanView from "@/components/PlanView.vue"

export default {
  name: "Develop",
  components: {
    StatusView,
    IslandView,
    LogView,
    PlanView,
  },
}
</script>

<style scoped lang="scss">
.develop {
  min-width: 500px;
  margin: auto;
  // width: 80%;
}
.island {
  min-width: 410px;
  padding: 0px 4px;
  margin: 4px auto;
}
.plan {
  flex-basis: 25%;
  padding: 0px 4px;
  margin: 4px;
}
</style>
