<template>
  <div class="register-form">
    <h2>新しい島を探す</h2>
    <b-form>
      <b-form-group label="どんな名前を付ける予定?">
        <b-form-input
          class="test"
          v-model="islandName"
          required
          :state="!islandName ? null : isValidIslandName()"
        ></b-form-input
        >島
      </b-form-group>

      <b-form-group label="オーナー名を教えてください">
        <b-form-input v-model="ownerName" placeholder="名無し"></b-form-input>
      </b-form-group>

      <b-form-group label="パスワードをどうぞ!">
        <b-form-input
          v-model="password"
          required
          type="password"
          :state="!password ? null : password.length >= 8"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="もう一度パスワードをどうぞ!!">
        <b-form-input
          v-model="passwordAgain"
          required
          type="password"
          :state="!passwordAgain ? null : passwordAgain === password"
        ></b-form-input>
      </b-form-group>
      <b-button @click="onRegister" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
  private islandName = "";
  private ownerName = "";
  private password = "";
  private passwordAgain = "";

  private onRegister() {
    const data = [this.islandName, this.ownerName, this.password];
    this.$store.dispatch("register", data);
  }

  private isValidIslandName() {
    return true;
  }
}
</script>

<style scoped lang="scss">
input {
  width: 200px;
  display: inline;
  margin-right: 10px;
}
h2 {
  margin: 20px 0px;
}
</style>
