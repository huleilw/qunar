<template>
    <div class="home_like">
        <div class="like_title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span>猜你喜欢</span>
        </div>
        <ul class="like_list">
            <li class="like_item border-bottom" 
            v-for="item in likeList" :key="item.id"
            @click="toDetaile">
                <div class="like_img">
                    <img class="like_img_item" :src="item.imgUrl">
                </div>
                <div class="like_msg">
                    <div class="like_msg_title">{{item.title}}</div>
                    <div class="like_msg_commont">
                        <span class="icon_start">{{item.start}}</span>
                        <span class="like_comment">{{item.comment}}</span>
                    </div>
                    <div class="like_price">
                        <span class="like_mark">¥<b>{{item.price}}</b>起</span>
                        <span class="like_det_title">{{item.address}}</span>
                    </div>
                    <div class="like_active_title">
                        <p>{{item.active_title}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="like_more">
            <h2>查看更多产品</h2>
        </div>
    </div>
</template>
<script>
    export default{
        props:['likeList'],
        data(){
            return{
                
            }
        },
        methods: {
            toDetaile(){
                this.$router.push("/detaile")
            }
        },
    }
</script>
<style scoped lang='stylus'>
.home_like{
    background: #fff;
    font-size: .28rem;
    margin-top:.2rem;
    }

    .like_title{
        padding:.24rem .2rem;
        }
       img{
           width:.3rem;
           height:.3rem;
       }
       span{
           font-size:.32rem;
       }
        
    .like_list{
        padding-left:.2rem;
    }
       .like_item{
           position: relative;
           padding:.2rem 0;
           }
            .like_img{
                overflow: hidden;
                float: left;
                width: 2rem;
                height: 2rem;
            }
            .like_img_item{
                width: 100%;
                height: 100%;
            }
            .like_msg{
                overflow: hidden;
                padding-left: .2rem;
            }
            .like_msg_title{
                margin-top: .26rem;
                height: .44rem;
                color: #212121;
                font-size: .32rem;
                line-height: .44rem;
                }
                .like_msg_commont{
                    margin-top: .14rem;
                    height: .34rem;
                }
                    .icon_start{
                        display: inline-block;
                        position: relative;
                        width: 1.5rem;
                        height: .28rem;
                        line-height: .28rem;
                        font-size: .28rem;
                        letter-spacing: .02rem;
                        }
                    .like_comment{
                        color: #616161;
                        font-size: .24rem;
                        line-height: .34rem;
                        vertical-align: text-bottom;
                        }
                    
                .like_price{
                    position relative;
                    }
                    .like_mark{
                        line-height: .7rem;
                        font-size:.24rem
                    }
                        b{
                            color: #ff8300;
                            font-size .36rem;   
                        }
                    .like_det_title{
                        position: absolute;
                        font-size: .24rem;
                        right: .24rem;
                        float: right;
                        bottom: 0;
                        line-height .7rem;
                    }
                .like_active_title{
                    display: inline-block;
                    margin-top: .3rem;
                    margin-right: .24rem;
                    background: #fff9f9;
                    padding: .04rem .1rem;
                    color: #f55;
                    font-size: .24rem;
                    line-height: .34rem;
                }
                    p{
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    .like_more h2{
                        font-size:.28rem;
                        line-height .8rem;
                        text-align center;
                        color:#00afc7;
                    }
</style>
