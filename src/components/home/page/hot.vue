<template>
    <div class="home_hot">
        <div class="hot_top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/>
            <span class="top_left">本周热门榜单</span>
            <span class="top_right">全部榜单 ></span>
        </div>
        <ul class="hot_list">
            <li class="hot_item" v-for="item in hotList" :key="item.id">
                <span class="item_img">
                    <img :src="item.imgUrlUp">
                </span>
                <img class="hot_img" :src="item.imgUrl">
                <p>{{item.title}}</p>
                <p>
                    <span class="hot_mark">¥{{item.mark}}</span>起
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['hotList'],
        data(){
            return{
            
            }
        }
    }
</script>
<style scoped lang='stylus'>
@import "~css/common.styl"
.home_hot{
    background: #fff;
    margin-top:.2rem;
    font-size .28rem
    .hot_top{
        padding .2rem
        position relative
        img{
            width .3rem
            height .3rem
        }
        .top_left{
            color #212121
            font-size .32rem
        }
        .top_right{
            position absolute
            color #616161
            right .2rem
        }
    }
    .hot_list{
        overflow-x scroll
        white-space nowrap
        overflow-y hidden
        height 3rem
       
        .hot_item{
            position relative
            width 2rem
            height 2rem
            display inline-block
            padding-top .08rem
            padding-left .2rem

            .item_img{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: .84rem;
            height: .4rem;
            img{
                width 100%
                padding 0 .2rem
                }
            } 
            .hot_img{
                width 100%
                height 100%
               
            }
            p{
                text-align center
                font-size .24rem
                margin-top .1rem
                textOverflow()
                .hot_mark{
                    font-size .28rem
                    color #ff8300
                }
               
            }
        }
        
    }
    
}

</style>
