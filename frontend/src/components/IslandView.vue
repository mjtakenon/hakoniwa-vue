<template>
  <div class="island-view">
    <div v-if="islandTiles !== null">
      <div v-for="(islandTilesRow, y) in islandTiles" :key="y">
        <img src="img/b.gif" class="black" v-show="y % 2 === 0" />
        <div
          style="display:inline-block"
          v-for="(islandTile, x) in islandTilesRow"
          :key="x"
        >
          <img
            :src="islandTile.img"
            :alt="islandTile.name"
            @click="onClickTile(y, x)"
          />
        </div>
        <img src="img/b.gif" class="black" v-show="y % 2 === 1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Tile from "../scripts/Tile"

@Component
export default class IslandView extends Vue {
  private islandName = "ほげ島"
  private islandTiles: Tile[][] | null = null

  private onClickTile(y: number, x: number) {
    console.log(x, y)
  }

  mounted() {
    this.islandTiles = []
    for (let y = 0; y < 12; y++) {
      this.islandTiles[y] = []
      for (let x = 0; x < 12; x++) {
        this.islandTiles[y][x] = new Tile()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.black {
  width: 16px;
  height: 32px;
}
</style>
