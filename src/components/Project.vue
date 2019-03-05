<template>
    <div class="root">
        <h1>个人项目</h1>
        <div class="carousel">
            <el-carousel arrow="always" trigger="click" :autoplay="false" height="360px">
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
        data() {
            return {
                projects: [
                    {
                        title: '每日一文UWP',
                        url: 'https://www.microsoft.com/zh-cn/p/每日一文-uwp/9nblggh51w0r',
                        icon: '',
                        content: '文章阅读类应用，每天更新推送一篇优质文章，具有完善的字体显示设置、评论区等功能，目前已在win10应用商店上架'
                    }, {
                        title: '码农日历',
                        url: 'https://www.microsoft.com/zh-cn/p/码农日历/9nblggh526sj',
                        icon: '',
                        content: '一款程序员专用的日历app，目前已在win10商店上架'
                    }, {
                        title: '巴士到哪了',
                        url: 'https://coding.net/u/lambda1997/p/miniapp-findBus',
                        content: '微信小程序，基于wepy（类Vue小程序框架）开发的公交出行助手，整合了路径规划和公交车实时信息功能（仅限珠海）'
                    }, {
                        title: '贪吃蛇小游戏',
                        url: 'https://github.com/septem1997/Snake',
                        content: '使用Cocos游戏引擎开发的贪吃蛇游戏，相比一般贪吃蛇游戏新增了关卡、特殊道具等特性'
                    }, {
                        title: '文字转微信表情包',
                        url:'https://github.com/septem1997/TextToPic',
                        content:'一个输入文字转为微信表情的安卓APP，通过微信分享功能分享后右上角菜单即可添加为表情包'
                    },{
                        title:'摇摇乐',
                        url:'https://github.com/septem1997/ShakeFun',
                        content:'一款通过摇晃手机获取分数，和朋友比手速的安卓游戏，具有实时排行榜功能'
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
                color #f5f5f5

    .projectTitle
        transition color 300ms
        font-size 2.5rem
        color darkslategrey
        border-bottom 2px darkslategray solid

    .projectTitle:hover
        color #9f3
        border-bottom-color: #9f3
</style>
