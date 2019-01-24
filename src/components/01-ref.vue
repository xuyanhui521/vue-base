<template>
    <div id="ref">
        <button ref="click" @click="getInnerHTML">获取页面上的元素</button>
        <h1 id="apple" ref="pear1"> 水果</h1>
        <p ref="address">北京</p>
       <my-son ref='sub'></my-son>
       <button @click="showSon"> 获取子组件的data和methods</button>
    </div>
</template>
<script>
import Son from './son.vue'
export default {
    methods:{
        getInnerHTML(){
           this.$refs.pear1.style.color="red"
           this.$refs.address.style.border="2px solid black"
        },
        showSon(){
          console.log(this.$refs.sub.week);
          this.$refs.sub.sonShow()
        }
    },
    components:{
        'my-son':Son
    }
}
</script>
<style lang="less" scoped>
   #ref{
       p{
           color:blueviolet
       }
   }
</style>


