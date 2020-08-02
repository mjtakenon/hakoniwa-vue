<template>
  <div class="register-form">
    <h2>新しい島を探す</h2>
    <!-- <b-form @submit="onSubmit"> -->
    <b-form @submit="onSubmit">
      <b-form-group label="島の名前は?:">
        <b-form-input
          v-model="islandName"
          required
          placeholder="○○島"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="オーナー名を教えてください:">
        <b-form-input v-model="ownerName" placeholder="名無し"></b-form-input>
      </b-form-group>

      <b-form-group label="パスワードをどうぞ!:">
        <b-form-input
          v-model="password"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="もう一度パスワードをどうぞ!!:">
        <b-form-input
          v-model="passwordAgain"
          type="password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RegisterForm extends Vue {
  private islandName = "";
  private ownerName = "";
  private password = "";
  private passwordAgain = "";

  private onSubmit() {
    console.log("submit");
  }
}
</script>

<style scoped lang="scss"></style>
