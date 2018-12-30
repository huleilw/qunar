<template>
    <div class="goWhere">
        <h3>周末去哪儿</h3>
        <ul class="goWhere_list">
            <li class="goWhere_item" v-for="item in goWhereList" :key="item.id">
                <div class="goWhere_img">
                    <img :src="item.imgUrl">
                </div>
                <div class="goWhere_info">
                    <p class="product_name">{{item.proName}}</p>
                    <p class="product_detaile">{{item.proDetaile}}</p>
                </div>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    props:['goWhereList'],
    data(){
        return{
            

        }
    }
}
</script>
<style scoped lang='stylus'>
@import "~css/common.styl"
    .goWhere{
        font-size .28rem
        background #fff;
        h3{
            background #f5f5f5;
            padding-left .2rem;
            line-height .8rem

        }
        .goWhere_img{
            overflow: hidden;
            height: 0;
            padding-bottom: 37.4375%;
            img{
                width 100%
            }  
        }
        .goWhere_info{
            position relative
            padding .2rem .2rem
            .product_name{
                font-size .28rem
                line-height .48rem
                color #212121
            }
            .product_detaile{
                font-size .24rem
                line-height .42rem
                color #616161
                textOverflow()
            }
        }

    }
</style>
