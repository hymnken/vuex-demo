<template>
  <ul class="catagtory">
    <li
      @click="$store.commit('catagtory/updatecurrentCatatgory' , item.id)"
      :class="{ select: item.id === currentCatatgory }"
      v-for="item in catagtory"
      :key="item.id"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["catagtory", "currentCatatgory"]),
  },
  created () {
     this.$store.dispatch('catagtory/getCatagtory')
  }
};
</script>

<style>
</style>