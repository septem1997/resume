<template>
    <swipe class="swipe"  indicator-color="black" vertical>
        <swipe-item><about-me/></swipe-item>
        <swipe-item><project/></swipe-item>
        <swipe-item><work/></swipe-item>
        <swipe-item><skill/></swipe-item>
    </swipe>
</template>

<script>

    import {Swipe, SwipeItem} from 'vant'
    import AboutMe from "../components/AboutMe";
    import Project from "../components/Project"
    import Skill from "../components/Skill";
    import Work from "../components/Work";

    export default {
        name: 'home',
        components: {
            Work,
            Skill,
            AboutMe,Project,
            Swipe, SwipeItem
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swipe
        height 100%
        width 100%
        div
            height 100%

</style>
