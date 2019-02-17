<template>
    <div class="container">
        <div class="left">
            <div class="avatar"></div>
            <div class="personInfo">
                <div class="row" v-for="(item,index) in personalInfo" :key="index">
                    <font-awesome-icon :icon="item.icon"/>
                    &nbsp;{{item.val}}
                </div>
            </div>
            <h3 style="margin-left: 10px">
                <font-awesome-icon icon="book"/>
                &nbsp;技能关键词
            </h3>
            <div class="skillKeyWord">
                <div class="word" v-for="(item,index) in skills" :key="index">{{item}}</div>
            </div>
        </div>
        <div class="right">
            <h2 class="name">陈校培</h2>

            <div class="title">
                <font-awesome-icon icon="glasses"/>&nbsp;个人优势
            </div>
            热爱学习和探索各类计算机技术，熟悉常见的数据结构和算法，可从零独立开发应用，包括前端页面编写、数据库设计、服务器接口编写及最终部署上线
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                skills: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Vue',
                    'jQuery',
                    'Webpack',
                    'Stylus',
                    'PWA',
                    '微信公众号',
                    '小程序',
                    'Java',
                    'Spring',
                    'Mybatis',
                    'Hibernate',
                    'MySql',
                    'C#',
                    'UWP',
                    'Git',
                    'android',
                    'PhotoShop',
                ],
                personalInfo: [
                    {
                        val: '22岁',
                        icon: 'calendar-alt'
                    }, {
                        val: '两年工作经验',
                        icon: 'briefcase'
                    }, {
                        val: '16675644396',
                        icon: 'phone'
                    }, {
                        val: '750627595@qq.com',
                        icon: 'envelope'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">

    @media only screen and (max-width: 768px)
        .container
            flex-direction column
            width 100%
            height 100%
        .right
            width 100%
        .left
            width 100%
    @media screen and (min-width: 769px)
        .container
            flex-direction row
            width: 21cm
            height: 297mm
            margin: 10px auto
            -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)
            overflow: hidden
            -webkit-border-radius: 4px
            border-radius: 4px
        .left
            width 240px
    .right
        flex: 1
        padding: 0 20px
        box-sizing border-box
        display flex
        flex-direction column
        align-items stretch

    .title
        color: #29B6F6
        font-size: 22px
        border-bottom: #29B6F6 1px solid
        margin 5px 0

    .skillKeyWord
        display: flex
        flex-wrap: wrap
        justify-content: space-evenly

    .word
        margin: 4px
        padding: 6px
        border-radius: 16px
        border: white 1px solid
        font-size: 16px


    .container
        display: flex



    .left
        background-color: #29B6F6
        display: flex
        flex-direction: column
        color: white


    .avatar
        margin: 40px auto
        width: 120px
        height: 120px
        border: 1px solid whitesmoke
        background-color: white


    .personInfo
        margin-left: 40px
        font-size: 15px


    .personInfo .row
        margin-top: 10px

</style>
