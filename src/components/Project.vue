<template>
    <div class="root">
        <h1>个人项目</h1>
        <div class="carousel">
            <el-carousel  trigger="click" :autoplay="false" height="360px">
                <el-carousel-item class="item" v-for="(item,index) in projects" :key="index">
                    <a :href="item.url" target="_blank" class="projectTitle">{{ item.title }}</a>
                    <div class="content">{{item.content}}</div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Project",
        data(){
            return {
                projects:[
                    {
                        title:'每日一文UWP',
                        url:'https://www.microsoft.com/zh-cn/p/每日一文-uwp/9nblggh51w0r',
                        icon:'',
                        content:'文章阅读类应用，每天更新推送一篇优质文章，具有完善的字体显示设置、评论区等功能，目前已在win10应用商店上架'
                    }, {
                        title:'码农日历',
                        url:'https://www.microsoft.com/zh-cn/p/码农日历/9nblggh526sj',
                        icon:'',
                        content:'一款程序员专用的日历app，目前已在win10商店上架'
                    },{
                        title:'待完善'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .root
        display flex
        flex-direction column
        align-items center
        justify-content center
        background-color #00BCD4
        overflow auto
    .carousel
        width 100%
        margin-top 1rem
        .item
            display flex
            flex-direction column
            align-items center
            .content
                text-align center
                margin 1rem 3.5rem
                font-size 1.5rem
                color lightgray
    .projectTitle
        transition color 300ms
        font-size 2.5rem
        color darkslategrey
    .projectTitle:hover
        color #9f3
</style>
