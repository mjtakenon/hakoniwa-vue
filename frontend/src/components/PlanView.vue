<template>
  <div class="plan-view">
    <div v-if="plans !== null">
      <div v-for="(plan, idx) in plans" :key="idx">
        <span>
          {{ ("00" + (idx + 1)).slice(-2) }}:
          <span v-if="plan.position !== null">
            ({{ plan.position.x }},{{ plan.position.y }})
          </span>
          {{ plan.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Plan from "../scripts/Plan"

@Component
export default class PlanView extends Vue {
  private plans: Plan[] | null = null

  mounted() {
    this.plans = []
    for (let n = 0; n < 30; n++) {
      this.plans[n] = new Plan(null, "資金繰り")
    }
  }
}
</script>

<style scoped lang="scss"></style>
