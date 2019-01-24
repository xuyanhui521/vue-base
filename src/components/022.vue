<template>
   <div>
       <div class="e">{{msg}}</div>
      
       <h2>{{flag? msg1 :msg11}}</h2>
       <h2>{{msg2}}</h2>
       <h2>{{msg3}}</h2>
       <p><button @click="change">改变父级元素传递的参数</button></p>

   </div>
   
    
</template>

<script>
    export default{
        props:['msg1','msg2','msg3'],
        data(){
            return {
                flag:true,
                msg:"022vue!",
                msg11:this.msg1
            }
        },
        methods:{
            change(){
                this.flag=!this.flag
               this.msg11="改变了"
               
            }
        },
        filters:{},
        components:{},
        created(){},
        mounted(){}
    }
</script>
<style scoped>
  .e{
      color :brown
  }

</style>


