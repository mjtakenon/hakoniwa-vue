<template>
  <div class="login-form">
    <h3> 開発画面へ </h3>
    <b-form>
      <b-form-group label="あなたの島の名前は?">
        <b-form-select v-model="selected" :options="islands"> </b-form-select>
      </b-form-group>
      <b-form-group label="パスワードをどうぞ!">
        <b-form-input
          v-model="password"
          required
          type="password"
        ></b-form-input>
      </b-form-group>
      <b-button @click="onLogin" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Island from "@/scripts/class";

@Component
export default class LoginForm extends Vue {
  private islands: Island[] = [];
  private selected: number | null = null;
  private password = "";

  private onLogin() {
    if (this.selected === null) {
      return;
    }

    const data = [this.islands[this.selected], this.password];
    console.log(data);
    this.$store.dispatch("login", data);
  }

  mounted() {
    this.islands.push(new Island(null, "島名を選択"));
    this.islands.push(new Island(1, "ほげ島"));
    this.islands.push(new Island(2, "ふが島"));
  }
}
</script>

<style scoped lang="scss">
input,
select {
  width: 200px;
  display: inline;
  margin-right: 10px;
}
</style>
