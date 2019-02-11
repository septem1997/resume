<template>
  <div id="app">

    <div class="mobilePanel" >
      <div class="header">
      </div>
    </div>
    <div class="pcPanel">
      <el-menu
              :default-active="0"
              class="verticalMenu">
        <el-menu-item v-for="(item,index) in menuList" :index="index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
      <div class="content"></div>
    </div>

  </div>
</template>

<script>
  import { Popup } from 'vant'


  export default {
  name: 'app',
  components: {
    Popup
  },
  data:()=>{
    return {
      menuList:[
        {
          name:'个人简介',
          icon:''
        }, {
          name:'工作经历'
        },{
          name:'个人项目'
        }
      ]
    }
  }
}
</script>


<style lang="stylus">
@media only screen and (max-width: 768px)
  .verticalMenu
    display none

@media screen and (min-width: 769px)
  .mobilePanel
    display none

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  position absolute
  width 100%
  height 100%
  display flex
  flex-direction column

  .content
    flex 1
  .header
    position fixed
    display flex
    background-color blue
    height 48px
  .pcPanel
    margin-top 48px
    display flex
    flex 1
    .verticalMenu
      width 240px






</style>
