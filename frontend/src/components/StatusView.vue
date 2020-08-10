<template>
  <div class="status-view">
    <b-table v-if="status!==null" striped hover :items="[status.getAll()]"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Status from "../scripts/Status"

@Component
export default class StatusView extends Vue {
  private status: Status | null = null
  mounted() {
    this.status = new Status(10000, 50000, 100, 0)
  }
}
</script>

<style scoped lang="scss">
table {
  margin: auto;
  text-align: center;
}
</style>
