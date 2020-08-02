<template>
  <div class="register">
    <RegisterForm msg="message"></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "Register",
  components: {
    RegisterForm
  }
};
</script>
