<template>
    <div class="header">
        <div class="header_left">
            <span class="iconfont return">&#xe60a;</span>
        </div>
        <div class="header_search">
            <span class="iconfont">&#xe62b;</span>
            输入城市/景点/旅游主题
        </div>
        <router-link to='/city'>
            <div class="header_right">
               {{city}}<span class="iconfont">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        computed: {
            ...mapState(['city'])
        },
    }
</script>
<style scoped lang='stylus'>
@import '~css/var.styl';
.header{
    width:100%;
    line-height: .88rem;
    font-size: .36rem;
    color:$white;
    background: $bgColor;
    display: flex;
    .header_left{
        width: .4rem;
        padding: 0 .2rem;
        font-weight: bold;
        text-align: center;
        .return{
            font-size .42rem
            font-weight bold
        }
}
    .header_search{
        flex: 1;
        background: $white;
        color:$textColor;
        font-size: .28rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: .1rem;
        margin: .14rem 0;
        padding-left: .2rem
    }
    .header_right{
        font-size: .28rem;
        padding: 0 .2rem;
    }
    a{
        color:#fff;
    }
}

</style>
