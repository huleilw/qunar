<template>
    <div class="content">
        <div class="header">
            <div class="header_left">
                <span class="iconfont return" @click="toHome">&#xe60a;</span>
            </div>
            <div class="header_title">
                <h3>城市选择</h3>
            </div>
            <div class="mp-tab">
                <ul>
                    <li class="active">境内</li>
                    <li>境外.港澳台</li>
                </ul>
            </div>
        </div> 
    </div>
</template>
<script>
    export default{
        methods: {
            toHome(){
                this.$router.push("/")
            }
        },
    }
</script>
<style scoped lang='stylus'>
@import '~css/var.styl';
.header{
    position relative
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
        .return{
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
    .mp-tab{
        height: .4rem;
        line-height: .4rem;
       
        padding: .2rem 1rem;
        color: #fff;
    ul{
        border: 1px solid #fff;
        border-radius: .03rem;
        zoom: 1;
        overflow: hidden;
         li{
            width: 50%;
            float: left;
            text-align: center;
            background-color: #00bcd4;
            font-size: .28rem;
            color: #fff;
        }
        li.active{
            background-color: #fff;
            color: #00bcd4;
            }
        }
    }
}

</style>
