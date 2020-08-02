<template>
  <div class="home">
    <Info />
    <hr />
    <LoginForm />
    <hr />
    <IslandList />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import Info from "@/components/Info.vue";
import IslandList from "@/components/IslandList.vue";

export default {
  name: "Home",
  components: {
    LoginForm,
    Info,
    IslandList
  }
};
</script>
