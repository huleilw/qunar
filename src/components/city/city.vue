<template>
    <div class="city">
        <cityHeader></cityHeader>
        <CityList :cities="cities" :hotCities="hotCities"></CityList>
    </div>
</template>
<script>
import cityHeader from './page/cityHeader'
import CityList from './page/cityList'
    export default{
        data() {
            return {
                hotCities:[],
                cities:{}
            }
        },
        components:{
            cityHeader,
            CityList
        },
        mounted() {
            this.$http.get("/api/city.json").then((res)=>{
                let data = res.data.data;
                this.hotCities = data.hotCities;
                this.cities = data.cities;
            })
        },
    }
</script>
<style scoped lang='stylus'>
.city{
    background: #f5f5f5;
}
</style>
