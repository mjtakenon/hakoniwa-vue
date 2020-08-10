<template>
  <div class="status-view">
    <!-- <table border="1" v-if="status!==null">
      <tr>
        <th> 人口 </th> <th> 食料 </th> <th> 資金 </th> <th> 面積 </th>
      </tr>
      <tr>
        <td> {{ status.population }} 人 </td> <td> {{ status.foods }} 万㌧ </td> <td> {{ status.money }} 億円 </td> <td> {{ status.area }} 万坪 </td>
      </tr>
    </table> -->
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
