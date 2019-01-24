<template>
  <div>
    <div class="example">简单应用.vue</div>
    <p>
      <button @click="send1">给兄弟发信息</button>
    </p>
  </div>
</template>

<script>
import bus from "../bus.js";

export default {
  data() {
    return {
      msg: "Hellow world 简单应用!"
    };
  },
  methods: {
    send1() {
      console.log(this.msg);
      bus.$emit("bus_f1", this.msg);
    }
  },
  filters: {},
  components: {},
  created() {
    bus.$on("bus_f2", data => {
      console.log(data);
    });
  },
  mounted() {}
};
</script>
<style scoped>
.example {
  color: red;
}
</style>


