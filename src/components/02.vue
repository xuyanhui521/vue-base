<template>
  <div>
    <p class="example">{{msg}}</p>
    <my-part22 msg1="hei" :msg3="Fcar" @getSonMsg="getSonMsg"></my-part22>
    <button @click="send2">我也给兄弟传值</button>
  </div>
</template>

<script>
import MyPart22 from "./022.vue";
import bus from "../bus.js";
export default {
  data() {
    return {
      msg: "Hellow world !",
      Fcar: { wheel: 4, color: "red" }
    };
  },

  created() {
    bus.$on("bus_f1", data => {
      console.log("兄弟收到数据了" + data);
    });
  },
  methods: {
      getSonMsg(data1,data2){
          console.log("子组件传递的数据"+data1,data2,)
      },
    
    send2(){
        bus.$emit('bus_f2',"我也给兄弟传值")
    }

  },

  components: {
    "my-part22": MyPart22
  }
};
</script>
<style scoped >
.example {
  color: green;
}
</style>