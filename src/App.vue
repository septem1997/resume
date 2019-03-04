<template>
    <div id="app">
        <router-view></router-view>
        <!--<div class="mobilePanel">
            <div class="header">
                <font-awesome-icon class="menuIcon" icon="bars" @click="show=true"/>
                <div class="title">{{menuList.find((item)=>active===item.index).name}}</div>
            </div>
        </div>
        <div class="pcPanel">
            <el-menu
                    :router="true"
                    :default-active="active"
                    class="verticalMenu">
                <el-menu-item v-for="(item,index) in menuList"  :index="item.index" :key="index">
                    <font-awesome-icon :icon="item.icon" class="elMenuIcon"/>&nbsp;
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-menu>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>

        <popup class="pop" v-model="show" position="left">
            <el-menu
                    :router="true"
                    :default-active="active">
                <el-menu-item v-for="(item,index) in menuList" @click="show=false" :index="item.index" :key="index">
                    <font-awesome-icon :icon="item.icon" class="elMenuIcon"/>&nbsp;
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-menu>
        </popup>
-->
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed:{
            active(){
                return this.$route.fullPath
            }
        },
        components: {
        },
        data: () => {
            return {
                show: false,
            }
        }
    }
</script>


<style lang="stylus">
    @media only screen and (max-width: 768px)
        h1
            font-size 2.5rem

    @media screen and (min-width: 769px)
        h1
            font-size 3.5rem
    /*@media print
        .mobilePanel
            display none
        .verticalMenu
            display none
    @media only screen and (max-width: 768px)
        .verticalMenu
            display none

        .pcPanel
            margin-top 48px


    @media screen and (min-width: 769px)
        .content
            overflow auto
        .pcPanel
            margin-top 0

        .mobilePanel
            display none*/


    /*.pop
        width 240px
        height 100%
        background-color white*/
    #app
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

        h1
            text-shadow 1px 2px #22c3aa, 2px 4px #aee2d9
            text-align center
            color white
        /*.elMenuIcon
            width 24px
            text-align center
        .menuIcon
            width 36px
            height @width
        .content
            flex 1

        .header
            position fixed
            display flex
            top 0
            background-color #29B6F6
            align-items center
            height 48px
            width 100vw
            color white
            padding-left 12px
            .title
                margin-left 12px
        .pcPanel
            display flex
            flex 1
            height 100%

            .verticalMenu
                width 240px*/


</style>
