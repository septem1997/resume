<template>
    <div class="root">
        <font-awesome-icon v-for="i in 3" :key="i"  icon="chevron-right"/>&nbsp;
        <router-link to="/paper">纸质版简历</router-link>
        &nbsp;<font-awesome-icon  v-for="i in 3" :key="i" icon="chevron-left"/>
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
            opacity 1
        100%
            opacity 0


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
            animation: twinkling 900ms infinite ease-in-out

    for num in 1 2 3
        .root svg:nth-child({num})
            animation-delay 300ms*num

    for num in 7 6 5
        .root svg:nth-child({num})
                animation-delay 300ms*(8 - num)


</style>