<template>
  <div id="app">
    <Catagtory></Catagtory>
    <NewList></NewList>
  </div>
</template>

<script>
import NewList from "./components/NewList.vue";
import Catagtory from "./components/Catagtory";

export default {
  components: {
    Catagtory,
    NewList,
  },
};
</script>

<style>
</style>
