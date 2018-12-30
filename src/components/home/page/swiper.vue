<template>
    <div class='header_swiper'>
        <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
  export default {
    props:['swiperList'],
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
            pagination: {
            el: '.swiper-pagination'
          },
          loop:true
        }
      }
    },
   
  }
</script>
<style scoped lang='stylus'>
    .header_swiper{
        background #ccc
        height 0
        padding-bottom 26.67%
        img{
            width 100%
        }
        >>>.swiper-pagination-bullet-active{
            background #fff
        }
    }
</style>
