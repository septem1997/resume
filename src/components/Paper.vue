<template>
    <div class="root">
        <font-awesome-icon v-for="i in 3"  icon="chevron-right"/>&nbsp;
        <router-link to="/paper">纸质版简历</router-link>
        &nbsp;<font-awesome-icon  v-for="i in 3" icon="chevron-left"/>
    </div>
</template>

<script>
    export default {
        name: "Paper"
    }
</script>

<style scoped lang="stylus">
    @-webkit-keyframes twinkling
        0%
            opacity 0
        100%
            opacity 1


    .root
        display flex
        justify-content center
        align-items center
        background-color #2196F3
        font-size 1.8rem
    .root *
        color white
    .root
        svg
            animation: twinkling 1s infinite ease-in-out


</style>