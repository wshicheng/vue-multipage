<template>
    <div class="menu">
        <Menu v-on:on-select="handleRoute" id="ul" :theme="theme2" :open-names="['1']" accordion width="auto">
            <Menu-item name="/">首页</Menu-item>
            <Submenu name="orderData">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    订单数据
                </template>
                <Menu-item name="/index/orderAllData">整体数据</Menu-item>
                <Menu-item name="1-2">分日期分地区</Menu-item>
                <Menu-item name="1-3">订单状态构成</Menu-item>
                <Menu-item name="1-4">24小时趋势</Menu-item>
                <Menu-item name="1-5">订单时长分布</Menu-item>
                <Menu-item name="1-6">订单里程分布</Menu-item>
                <Menu-item name="1-7">使用频次分布</Menu-item>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    用户数据
                </template>
                <Menu-item name="2-1">整体数据</Menu-item>
                <Menu-item name="2-2">分日期分地区</Menu-item>
                <Menu-item name="2-3">新用户</Menu-item>
                <Menu-item name="2-4">活跃用户</Menu-item>
                <Menu-item name="2-5">用户留存_日留存</Menu-item>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    车辆数据
                </template>
                <Menu-item name="4-1">整体数据</Menu-item>
                <Menu-item name="4-2">车均产出</Menu-item>
                <Menu-item name="4-3">车辆数设置</Menu-item>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    押金充值
                </template>
                <Menu-item name="4-1">整体数据</Menu-item>
                <Menu-item name="4-2">分日期分地区</Menu-item>
                <Menu-item name="4-3">押金变动</Menu-item>
                <Menu-item name="4-4">充值变动</Menu-item>
                <Menu-item name="4-5">充值金额分布</Menu-item>
                <!-- <Menu-group title="使用">
                    <Menu-item name="3-1">新增和启动</Menu-item>
                    <Menu-item name="3-2">活跃分析</Menu-item>
                    <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group> -->
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    优惠券
                </template>
                <Menu-item name="5-1">优惠券订单</Menu-item>
                <Menu-item name="5-2">优惠券发放</Menu-item>
                <Menu-item name="5-3">获取途径</Menu-item>
                <Menu-item name="5-4">使用情况</Menu-item>
                <Menu-item name="5-5">充值金额分布</Menu-item>
            </Submenu>
            <Menu-item name="6">个人中心</Menu-item>
            <Menu-item name="7">账号管理</Menu-item>
            <Menu-item name="8">角色管理</Menu-item>
            <Submenu name="9">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    城市经营分析
                </template>
                <Menu-item name="/index/cityManagerAnalysis">整体数据</Menu-item>
                <Menu-item name="/index/managerData">我管理的数据</Menu-item>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            theme2: 'dark'
        }
    },
    methods: {
        handleRoute(name) {
            this.$router.push({ path: name })
        }
    }
}
</script>
<style lang="scss" scoped>
ul.ivu-menu.ivu-menu-dark.ivu-menu-vertical {
    min-width: 168px;
}

.ivu-menu-dark {
    background: #404040;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background: #404040;
}
</style>

