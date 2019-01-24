<template>
     <div id="son">
          <h3>这是子组件</h3>
     </div>
</template>
<script>
export default {
     data(){
         return {
             week:"Friday"
         }
     },
     methods:{
         sonShow(){
             console.log('今天周末了')
         }
     }
}
</script>
<style>

</style>


