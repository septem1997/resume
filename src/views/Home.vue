<template>
    <swipe class="swipe" ref="swipe" @change="swipeChange" indicator-color="black" vertical>
        <swipe-item><about-me/></swipe-item>
        <swipe-item><project/></swipe-item>
        <swipe-item><work/></swipe-item>
        <swipe-item><skill/></swipe-item>
        <swipe-item><paper/></swipe-item>
    </swipe>
</template>

<script>

    import {Swipe, SwipeItem} from 'vant'
    import AboutMe from "../components/AboutMe";
    import Project from "../components/Project"
    import Skill from "../components/Skill";
    import Work from "../components/Work";
    import Paper from "../components/Paper";

    export default {
        name: 'home',
        components: {
            Paper,
            Work,
            Skill,
            AboutMe,Project,
            Swipe, SwipeItem
        },
        data() {
            return {
                lock:false,
                currentIndex:0
            }
        },
        methods:{
            swipeChange(index){
                this.currentIndex = index
            }
        },
        mounted() {
            let that = this
            document.body.onmousewheel = function(event) { //监听手势
                if (that.lock){   // 防止一下子滑动多个页面
                    return
                }
                let e = event || window.event;
                let delta = e.wheelDelta||e.detail
                that.lock = true
                if (delta > 0 && that.currentIndex>0) {
                    that.currentIndex--
                }
                if (delta < 0 && that.currentIndex<4) {
                    that.currentIndex++
                }
                that.$refs.swipe.swipeTo(that.currentIndex)
                setTimeout(()=>{
                    that.lock = false
                },1000)
            };
        },
        watch:{
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
