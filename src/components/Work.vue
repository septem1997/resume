<template>
    <div class="root">
        <h1>工作经历</h1>
        <el-timeline class="timeline" >
            <el-timeline-item placement="top" timestamp="2017-07" size="large">
                <div class="company">小笋科技(深圳)有限公司</div>
                <div class="content">共享单车业务，协助进行后台管理系统及微信公众号的开发。
                    <br>类美团点评app，项目技术负责人，负责整个项目的研发，涉及到后端管理系统、微信公众号、小程序、微信支付、即时聊天、线上商城等内容。
                </div>
            </el-timeline-item>
            <el-timeline-item placement="top" timestamp="2018-07" size="large">
                <div class="company">珠海金刚科技有限公司</div>
                <div class="content">澳门赌场账房管理系统及赌场查数APP，前端主程，负责项目业务开发以及底层框架的完善。
                    <br>同时负责部分后端业务，搭建了webSocket通讯模块，采用POI技术实现了数据报表的导出。
                </div>
            </el-timeline-item>
            <el-timeline-item timestamp="2019-03" size="large">

            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "Work"
    }
</script>

<style lang="stylus">
    .timeline
        .el-timeline-item__timestamp
            font-size 1.5rem
            color white
</style>

<style scoped lang="stylus">
    @media only screen and (max-width: 768px)
        .timeline
            .company
                font-size 1.2rem
            .content
                font-size 1rem
    @media screen and (min-width: 769px)
        .timeline
            .company
                font-size 1.8rem
            .content
                font-size 1.5rem
    .root
        background-color #009688
        display flex
        flex-direction column
        justify-content center
        align-items center
    .timeline
        padding 0 2rem
        .company
            color white
            margin 5px 0
        .content
            color #B5EDF4
</style>
