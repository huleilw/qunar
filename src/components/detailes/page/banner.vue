<template>
    <div class="banner">
        <div>
            <div class="banner-img" @click="imgShow">
                <img src="//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg" alt="">
            </div>
            <div class="banner-title">长隆野生动物世界(AAAAA景区)</div>
        </div>
        <div class="banner-swiper" v-show="imgSwiper" @click="hideImg">
            <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <swiper-slide v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            
            </swiper>
            <div class="swiper-pagination"  slot="pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                     el: '.swiper-pagination',
                     type:'fraction'
                }
            },
            bannerList:[
                {
                    "id":"01",
                    "imgUrl":"//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg"
                },
                 {
                    "id":"02",
                    "imgUrl":"http://img1.qunarzz.com/sight/p0/1605/47/47e676ee434a591490.img.jpg_r_800x800_fb15bd87.jpg"
                },
                 {
                    "id":"03",
                    "imgUrl":"http://img1.qunarzz.com/sight/p0/1605/d4/d4e2dce9d328d5b290.img.jpg_r_800x800_892973df.jpg"
                },
            ],
            imgSwiper : false
        }
    },
    methods: {
        imgShow(){
            this.imgSwiper = true
        },
        hideImg(){
            this.imgSwiper = false
        }
    },
}
</script>
<style scoped lang='stylus'>
    .banner{
        position relative
        .banner-img{
            width 100%
            height 0
            overflow hidden
            padding-bottom 55%
            img{
                width 100%
            }
        }
        .banner-title{
            position absolute
            font-size .36rem
            color #fff
            left .3rem
            bottom .3rem
        }
        .banner-swiper{
            position fixed
            width 100%
            background #000
            top 0 
            bottom 0
            display flex
            justify-content center
            align-items center
            img{
                width 100%
            }
            .swiper-pagination-fraction, 
            .swiper-pagination-custom, 
            .swiper-container-horizontal > .swiper-pagination-bullets {
                color #fff
                bottom .6rem
                font-size .28rem
            }
        }
    }
</style>
