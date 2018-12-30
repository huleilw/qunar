<template>
    <div class="home">
        <HomeHead></HomeHead>
        <HomeSwiper :swiperList="swiperList"></HomeSwiper>
        <HomeIcons :iconsList="iconsList"></HomeIcons>
        <HomeLocation></HomeLocation>
        <HomeActivity></HomeActivity>
        <HomeHot :hotList="hotList"></HomeHot>
        <HomeLike :likeList="likeList"></HomeLike>
        <HomeGoWhere :goWhereList="goWhereList"></HomeGoWhere>
    </div>
</template>
<script>
    import HomeHead from './page/head'
    import HomeSwiper from './page/swiper'
    import HomeIcons from './page/icons'
    import HomeLocation from './page/location'
    import HomeActivity from './page/activity'
    import HomeHot from './page/hot'
    import HomeLike from './page/like'
    import HomeGoWhere from './page/goWhere'
    import { mapState } from 'vuex';
    export default{
        components:{
            HomeHead,
            HomeSwiper,
            HomeIcons,
            HomeLocation,
            HomeActivity,
            HomeHot,
            HomeLike,
            HomeGoWhere
        },
        data() {
            return {
                swiperList:[],
                iconsList :[],
                hotList :[],
                likeList :[],
                goWhereList :[],
                changeCity:''
            }
        },
        computed: {
            ...mapState(['city'])
        },
        methods: {
            getHttp(){
                this.$http.get("/api/homeData.json")
                .then((res)=>{
                    const data = res.data.data;
                    data.forEach((item,index) => {
                        //console.log(item.swiperList)
                        
                        if(item.city == this.city){
                            this.swiperList = item.swiperList;
                            this.iconsList = item.iconsList;
                            this.hotList = item.hotList;
                            this.likeList = item.likeList;
                            this.goWhereList = item.goWhereList; 
                        }
                    });
                })
            }
        },
        mounted() {
            this.changeCity = this.city
            this.getHttp()
        },
        activated() {
            if(this.changeCity != this.city){
                this.getHttp()
                this.changeCity = this.city
            }
        },
    }
</script>
<style scoped>
.home{
    background: #f5f5f5;
}
</style>
