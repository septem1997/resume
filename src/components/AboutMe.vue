<template>
    <div class="root">
        <img id="avatar" src="../assets/head.jpg"/>
        <h1>陈校培</h1>
        <div class="subTitle">想做前端的"全占"工程师，码得了接口、写得了Sql、搭得起服务器、还会点PS</div>
    </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped lang="stylus">
    .root
        display flex
        flex-direction column
        justify-content center
        align-items center
        background-color #22c3aa

    #avatar
        width 200px
        height @width
        border 10px solid #aee2d9
        border-radius 50%
    .subTitle
        color #aee2d9
        font-size 1.4rem
        padding 0 2rem
        text-align center
</style>
