<template>
  <div>
      <div class="layout">
        <head-component></head-component>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <menu-component></menu-component>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">
                        <!-- 路由匹配到的组件将渲染在这里 -->
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            北京蜜蜂出行科技有限公司版权所有©2017
        </div>
    </div>
  </div>
</template>
<script>
import MenuComponent from '../../components/menu.vue'
import HeadComponent from '../../components/head.vue'
  export default  {
     components: {
        "menu-component": MenuComponent,
        "head-component": HeadComponent
    },
     data() {
        return {
            spanLeft: 5,
            spanRight: 19
        }
    },
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        }
    }
  }
</script>
export default {
   
    data() {
        return {
            spanLeft: 5,
            spanRight: 19
        }
    },
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        }
    }
}
</script>
<style scoped>
.layout {
    background: #f5f7f9;
}

.layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    position: fixed;
    left: 15px;
    right: 15px;
    top: 75px;
    bottom: 15px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    color: #9ea7b4;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 40px;
    height: 40px;
}

.ivu-row {
    height: 100%
}

.ivu-col-span-19 {
    height: 100%;
    overflow-y: auto;
}

.ivu-col-span-5 {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto
}
</style>

