 //import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
//导入vue组件
import MyPart1 from './components/简单应用.vue'
import MyPart2 from './components/02.vue'
Vue.component('my-part1',MyPart1)//全局组件
Vue.component('my-part2',MyPart2)


const vm=new Vue({
    el:"#app",
    data:{
        message:"study vue"
    },
    components:{
        'my-part1':MyPart1,//私有组件
       
       
    }

})