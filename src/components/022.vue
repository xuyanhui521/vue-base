<template>
   <div>
       <div class="e">{{msg}}</div>
      
       <h2>{{msg1}}</h2>
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
                msg:"022vue!"
            }
        },
        methods:{
            change(){
                console.log(this.msg3)
               
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


