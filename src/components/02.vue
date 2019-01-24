<template>
    <div>
       
         <p class="example">{{msg}}</p>
         <my-part22  msg1="hei" msg2="mySon"  :msg3="Fcar" ></my-part22>
    </div>
</template>

<script>

import MyPart22 from './022.vue'
   export default{
       data(){
           return {
               msg:"Hellow world !",
               Fcar:{wheel:4,color:"red"}
           }
       },
       methods:{},
       filters:{},
       components:{
          'my-part22':MyPart22
       },
       created(){},
       mounted(){}
   }
</script>
<style scoped >
  .example{
      color:green
  }
</style>