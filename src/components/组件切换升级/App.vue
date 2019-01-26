<template>
  <div id="app">
    <h1>App ss组件</h1>
    <p>
      <a href="#/movie">电影</a>
      <a href="#/music">音乐</a>
      <a href="#/about">关于</a>
    </p>
    <component :is="show"></component>
  </div>
</template>
<script>
import Movie from './movie.vue'
import Music from './Music.vue'
import About from './About.vue'
// window.onhashchange:可以检测浏览器地址栏的hash值的变化
// window.location.hash:可以获得浏览器当前的hash值（锚点信息#后面的）情况
export default {
  created() {
    window.onhashchange = () => {
      var hsh = window.location.hash
      switch (hsh) {
        case '#/movie':
          this.show = 'my-movie'
          break
        case '#/about':
          this.show = 'my-about'
          break
        case '#/music':
          this.show = 'my-music'
          break
        default:
          this.show = 'my-movie'
          break
      }
    }
  },
  data() {
    return {
      show: 'my-movie'
    }
  },
  methods: {},
  components: {
    'my-movie': Movie,
    'my-music': Music,
    'my-about': About
  }
}
</script>
<style>
#app p a{
   text-decoration: none
}
</style>

