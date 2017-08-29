<template>
    <Row>
        <Row class="monthSelect">
            <i @click="handleMinusMonth" class="iconfont icon-jiantou-"></i> 
            <time class="currentMonth">
                {{currentMonth}}       
            </time>
            <i @click="handleAplusMonth" class="iconfont icon-right-arrow "></i>
            <div class="title">
                <h3>城市经营分析</h3>
            </div> 
        </Row>
        <Row class="tab">
             <Tabs>
                <TabPane label="固定资产及费用" icon="social-apple">
                    <fixed-assets></fixed-assets>
                </TabPane>
                <TabPane label="运营成本" icon="social-windows">标签二的内容</TabPane>
                <TabPane label="运营成本分析" icon="social-tux">标签三的内容</TabPane>
                <TabPane label="实收变动盈亏率动态预测" icon="social-tux">标签三的内容</TabPane>
            </Tabs>
        </Row>
    </Row>
</template>
<script>
import moment from 'moment'
import fixedAssets from '../../../components/fixedAssets.vue'
    export default {
        components:{
            'fixed-assets':fixedAssets
        },
        data(){
            return {
                currentMonth:moment().format('YYYY-MM')
            }
        },
        methods:{
            handleMinusMonth(){
               var time =  moment(this.currentMonth).subtract(1,'month')
               this.currentMonth = moment(time).format('YYYY-MM')
            },
            handleAplusMonth(){
                var time =  moment(this.currentMonth).add(1,'month')
               this.currentMonth = moment(time).format('YYYY-MM')
            }
        }
    }
</script>
<style lang="scss" type="text/css" scoped>
$line-height:40px;
   div.monthSelect{
       background-color: rgb(255, 139, 74);
       text-align:center;
       color:#fff;
       font-size:30px;
       i{
           vertical-align: middle;
           cursor:pointer;
       }
       .title{
           h3{font-size:20px; line-height:$line-height;}
       }
   } 
</style>
