<template>
  <div class="island-view">
    <h2>{{ islandName }} 開発画面</h2>
    <hr />
    <div v-if="islandTiles !== null">
      <div v-for="(islandTilesRow, y) in islandTiles" :key="y">
        <span v-for="(islandTile, x) in islandTilesRow" :key="x">
          <img
            :src="islandTile.img"
            :alt="islandTile.name"
            @click="onClickTile(y, x)"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tile from "../scripts/Tile";

@Component
export default class IslandView extends Vue {
  private islandName = "ほげ島";
  private islandTiles: Tile[][] | null = null;

  private onClickTile(y: number, x: number) {
    console.log(x, y);
  }

  mounted() {
    this.islandTiles = [];
    for (let y = 0; y < 10; y++) {
      this.islandTiles[y] = [];
      for (let x = 0; x < 10; x++) {
        this.islandTiles[y][x] = new Tile();
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
