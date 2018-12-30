<template>
    <div class="banner-header" >
        <div class="banner-return" @click="toHome" v-show="showHeader">
            <span class="border-return"></span>
            <span class="iconfont return">&#xe60a;</span>
        </div>
        <div class="header-top" v-show="!showHeader" :style="styleOpacity">
            <div class="header_left">
                <span class="iconfont goback" @click="toHome">&#xe60a;</span>
            </div>
            <div class="header_title">
                <h3>长隆野生动物世界</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showHeader:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    methods: {
            toHome(){
                this.$router.push("/")
            }
        },
    mounted() {
        let self = this
        window.addEventListener("scroll",function(){
            let top = Math.floor(document.documentElement.scrollTop);
            if(top>45){
                let opacity = top/130;
                opacity = opacity>1?1:opacity
                self.styleOpacity = {opacity}
                self.showHeader = false
            }else{
                self.showHeader = true
            }
        })
    },    
}
</script>
<style scoped lang='stylus'>
@import '~css/var.styl';
    .banner-header{
        .banner-return{
            position absolute
            left .1rem
            top .1rem
            width .72rem
            height .72rem
            .border-return{
                position absolute
                display block
                background #000
                border-radius 50%
                width .72rem
                height .72rem
                display block
                opacity .5
            }
            .return{
                position absolute
                width .72rem
                line-height .72rem
                color #fff
                left 0
                top 0
                display block
                text-align left
                text-indent .16rem
                font-size .42rem
                font-weight bold
            }
         }
        .header-top{
            z-index 99
            position fixed
            top 0
            width:100%;
            line-height: .88rem;
            font-size: .36rem;
            color:$white;
            background: $bgColor;
            .header_left{
                position absolute
                width: .4rem;
                padding: 0 .2rem;
                font-weight: bold;
                text-align: center;
                .goback{
                    font-size .42rem
                    font-weight bold
                }
            }
            .header_title{
                h3{
                    line-height .88rem
                    font-size .32rem
                    margin 0 1rem
                    color #fff
                    text-align center
                    
                }
            }
        }
    }
</style>
