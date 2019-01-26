<template>
  <div>
    <h1>App组件</h1>
    <!-- <p>
      <a href="#" @click="show='my-movie'">电影</a>
      <a href="#" @click="show='my-mosic'">音乐</a>
      <a href="#" @click="show='my-about'">关于</a>
    </p>
       <component :is="show"></component> -->


        <p>
        <a href="#" @click.prevent="show='my-movie'">电影</a>
        <a href="#" @click.prevent="show='my-music'">音乐</a>
        <a href="#" @click.prevent="show='my-about'">关于</a>
      </p>
      <!--显示子级组件 电影/音乐/关于，同一时间只能显示一个-->
      <!--设置用于显示子组件的"代表/占位符",这个代表可以是 电影/音乐/关于 的任何一个，但不能同时都是-->
      <!--<component:is='组件标签名称' >-->
      <component :is="show"></component>
  </div>
</template>

<script>
import Movie from './Movie.vue'
import Music from './Music.vue'
import About from './About.vue'
 export default{
     data(){
         return {
             show:"my-movie"
         }
     },
   components: {
    'my-movie': Movie,
    'my-music': Music,
    'my-about': About
  }
 }
</script>