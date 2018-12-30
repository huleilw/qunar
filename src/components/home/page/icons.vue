<template>

    <div class="home_icon">
		<swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <swiper-slide v-for="(item,key) in page" :key="key">
                <div class='icons_item' v-for='page in item' :key='page.id'>
				<img :src="page.imgUrl">
				<p>{{page.title}}</p>
        </div>
            </swiper-slide>
			 <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        
    </div>
</template>
<script>
    export default{
		props:['iconsList'],
        data(){
            return{
				swiperOption: {
					pagination: {
           			el: '.swiper-pagination'
         			},
         			loop:true
				},
            }
		},
		computed:{
			page(){
				let pages = [];
				this.iconsList.forEach((item,index)=>{
					let idx = Math.floor(index/8);
					if(!pages[idx]) pages[idx] = [];
					pages[idx].push(item);
					
				})
				return pages
			}
		}
    }
</script>
<style scoped lang='stylus'>
 @import "~css/common.styl"
    .home_icon{
        width 100%;
        overflow hidden
        //height 3.7rem
		//padding-top .1rem
        background #fff;
       .icons_item{
           width 25%
           padding-bottom 25%
           height 0
           float left
           img{
               width 1.1rem
               height 1.1rem
               padding-top .2rem
               display block
               margin 0 auto
           }
           p{
               font-size .28rem
               text-align center
               margin-top .1rem
			   //textOverflow()
			   
           }
       }
		>>>.swiper-pagination-bullet-active{
            background rgba(0,175,190,.8)
        }
    }
</style>
