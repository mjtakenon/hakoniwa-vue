<template>
  <div class="info">
    <h1>箱庭諸島 (Vue.js移植版)</h1>
    <h2>ターン {{ turn }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component
export default class Info extends Vue {
  private turn = 0
}
</script>

<style scoped lang="scss"></style>
