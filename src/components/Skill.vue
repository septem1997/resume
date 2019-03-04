<template>
    <div class="root">
        <h1>技能关键词</h1>
        <div class="skills" v-for="(s,index) in skills">
            <div class="word" v-for="(item,index) in s" :key="index">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skill",
        data() {
            return {
                skills: [
                    [
                        'HTML',
                        'CSS',
                        'Stylus',
                        'JavaScript',
                        'Vue',
                        'LayUI',
                        'jQuery',
                        'Webpack',
                        'PWA',
                        '小程序'
                    ], [
                        'Java',
                        'Spring',
                        'Mybatis',
                        'Hibernate',
                        'MySql',
                        '微信公众号',
                        'Redis',
                    ], [
                        'C#',
                        'UWP',
                        'android',
                    ], [
                        'Git',
                        'PhotoShop',
                        'WebStorm',
                        'IDEA',
                        'Visual Studio'
                    ]
                ],
            }
        }
    }
</script>

<style scoped lang="stylus">
    @media only screen and (max-width: 768px)
        .skills
            font-size 1rem
            line-height @font-size
    @media screen and (min-width: 769px)
        .skills
            font-size 1.5rem
            line-height @font-size
    .root
        background-color #22c3aa
        display flex
        flex-direction column
        justify-content center
        align-items center

    .skills
        display flex
        flex-wrap wrap
        justify-content center
        padding 0 1rem
        margin-top 10px
        .word
            background-color #00796b
            color #f3f3f3
            border-radius 5px
            padding 5px 10px
            margin 5px

</style>
