<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>


<style lang="stylus">
    @media only screen and (max-width: 768px)
        h1
            font-size 2.5rem

    @media screen and (min-width: 769px)
        h1
            font-size 3.5rem
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


</style>
