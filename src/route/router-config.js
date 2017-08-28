
import index from '../view/index/index.vue'
import orderAllData from '../view/order_allData/index.vue'
import cityManagerAnalysis from '../view/cityManagerAnaliysis/index.vue'
import cityManagerAnalysisByMonth from '../view/cityManagerAnaliysis/detail.vue'
import Home from '../view/home/index.vue'
export default [
    {
        path: '/',
        component: index,
        children:[
            {
                path:'/',
                component:Home
            },
            {
                path:'/index/orderAllData',
                component: orderAllData
            },
            {
                path:'/index/cityManagerAnalysis',
                component: cityManagerAnalysis
            }
        ]
    },
    {
        path:'/index/cityManagerAnalysis/month/:month',
        component: cityManagerAnalysisByMonth
    }
   
]
