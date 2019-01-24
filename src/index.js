
import Vue from "vue/dist/vue.js"
import MyRef from "./components/01-ref.vue"
import App from "./components/03app.vue"
const vm1=Vue.component("my-ref",MyRef)
 new Vue({
     el:"#app",
     data:{

     },
     components:{
        
     },
    //  render:function(c){
    //      return c(App)
    //  },
    //  render:c=>{
    //      return c(App)
    //  },
      render:c=>c(App)
 })