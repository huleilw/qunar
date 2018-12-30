<template>
    <div ref="container" class="container">
        <!--hotCity-->
        <div>
            <div class="hotCity">
                <h3>热门城市</h3>
                <ul class="hotCity-list">
                    <li class="city-item" @click="changeCityName(item.name)"
                    v-for="item in hotCities" :key="item.id">
                        {{item.name}}</li>
                </ul>
            </div>
                <!--citySort-->
            <div class="citySort">
                <h3>字母排序</h3>
                <ul class="sort-list">
                    <li class="sort-item" v-for="(val,key) in cities"
                    @click="changeSort(key)"
                    >{{key}}</li>
                </ul>
            </div>
                <!--list-->
            <div class="cityList">
                <div v-for="(val,key) in cities" :ref="key">
                    <h3>{{key}}</h3>
                    <ul class="cityList-list">
                        <li class="list-item" v-for="item in val"
                        @click="changeCityName(item.name)">
                            {{item.name}}
                        </li>   
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
    props:['hotCities','cities'],
    data() {
        return {
            scroll:''
        }
    },
    mounted(){
        let container = this.$refs['container']
        this.scroll = new BScroll(container)//获取dom节点
    },
    methods: {
        changeSort(sortName){
            this.scroll.scrollToElement(this.$refs[sortName][0])
        },
        changeCityName(cityName){
            this.changeCity(cityName)
            this.$router.push("/")
        },
        ...mapMutations(['changeCity'])
    },
}
</script>
<style scoped lang='stylus'>
@import "~css/common.styl"
.container{
    position absolute
    overflow hidden
    background #f5f5f5
    left 0 
    right 0
    bottom 0
    top 1.8rem
}
.hotCity{
    h3{
        font-size .24rem
        margin .23rem .2rem
    }
    .hotCity-list{
        background #fff
        position relative
        overflow hidden
        color #212121
        &:before{
            position absolute
            content ""
            width 33.33%
            height 100%
            left 33.33%
            border-left .02rem solid #ddd
            border-right .02rem solid #ddd
            }
        li{
            position relative
            font-size .28rem
            float left
            width 33.33%
            text-align center
            line-height .9rem
            height .9rem
            border-bottom .02rem solid #ddd
            
        }
    }
}
.citySort{
    h3{
        font-size .24rem
        margin .23rem .2rem
    }
    .sort-list{
        background #fff
        position relative
        overflow hidden
        color #212121
        li{
            font-size .28rem
            float left
            width 16.666666%
            text-align center
            line-height .9rem
            height .9rem
        }
    }
}
.cityList{
    h3{
        font-size .24rem
        margin .23rem .2rem
    }
    .cityList-list{
        background #fff
        position relative
        overflow hidden
        color #212121
        &:before{
            position absolute
            content ""
            width 25%
            height 100%
            left 25%
            border-left .02rem solid #ddd
            border-right .02rem solid #ddd
            }
        &:after{
            position absolute
            content ""
            width 0%
            height 100%
            left 75%
            border-left .02rem solid #ddd
        }
        li{
            position relative
            font-size .28rem
            float left
            width 25%
            text-align center
            line-height .9rem
            height .9rem
            border-bottom .02rem solid #ddd
            textOverflow()
            
        }
    }
}
</style>
