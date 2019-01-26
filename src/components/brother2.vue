<template>
    <div id="brother2">
         <h2>brother2</h2>
         <p>{{v1}} {{v2}} </p>
         <p><button @click="send2">给brother1发送数据</button></p>
    </div>
</template>
<script>
import bus from '../bus.js'
export default {
      data(){
          return {
             v1:"",
             v2:"",
             msg1:"hellow",
             msg2:"brother1"
          }
      },
      methods:{
          send2(){
             bus.$emit('func2',this.msg1,this.msg2)
          }
      },
    created(){
        bus.$on('fun1',(v1,v2)=>{
             this.v1=v1
             this.v2=v2
        })
    },

    
}
</script>
<style scoped>
p{
    color:brown
}

</style>