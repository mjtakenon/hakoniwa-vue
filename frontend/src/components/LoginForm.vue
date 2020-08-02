<template>
  <div class="login-form">
    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LoginForm extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss"></style>
