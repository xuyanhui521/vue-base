
 import './css/61.less'
 import Vue from 'vue/dist/vue.js'
Vue.component('my-login',{
    created(){
        console.log('created正在执行-------------')
    },
    template:`
      <div>
         <p>年后做{{info}}</p>
         <p><button @click="changeName">改变</button></p>
      </div>
    `,
    data(){
        return {info:"朋友"  }
    },
    methods:{
        changeName(){
            console.log('改变')
        }
    }    
   

})


new Vue({
    el:"#app",
    data:{
        msg:"好好"
    },
    components:{
        'my-logout':{
            template:"<span>退出系统</span>"
        }
    }

})
