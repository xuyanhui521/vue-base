<template>
    <div id="brother1">
         <h2 ref="h2"> brother1</h2>
         <p>{{v1}} {{v2}}</p>
         <p><button @click="send1">给brother2发送数据</button></p>
    </div>
</template>
<script>
import bus from '../bus.js'
export default {
     created(){
         bus.$on('func2',(v1,v2)=>{
             this.v1=v1;
             this.v2=v2
         }) 
     },
      data(){
          return {
              v1:"",
              v2:"",
             msg1:"hellow",
             msg2:"brother2"
          }
      },
      methods:{
         send1(){
             bus.$emit('fun1', this.msg1,this.msg2)
             this.$refs.h2.style.border="1px solid red"
         }
      }
}
</script>
<style scoped>
  p{
      color:aqua
  }

</style>

