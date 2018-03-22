import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/active2/main',
      'pages/oneYuan/main',
      'pages/user/main'
    ],
    tabBar: {
      color: "#333",
      backgroundColor: "#fff",
      selectedColor: "#333",
      list: [{
          iconPath: "images/home-pre.png@2x.png",
          selectedIconPath: "images/home@2x.png",
          pagePath: "pages/index/main",
          text: "首页"
        },
        {
          iconPath: "images/activity-pre.png@2x.png",
          selectedIconPath: "images/activitypng@2x.png",
          pagePath: "pages/active2/main",
          text: "活动"
        },
        {
          iconPath: "images/purchase-pre.png@2x.png",
          selectedIconPath: "images/purchase.png@2x.png",
          pagePath: "pages/oneYuan/main",
          text: "一元置业"
        },
        {
          iconPath: "images/user-pre.png@2x.png",
          selectedIconPath: "images/user.png@2x.png",
          pagePath: "pages/user/main",
          text: "我的"
        }
      ]
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#303030",
      navigationBarTitleText: "",
      navigationBarTextStyle: "#FFF"
    }
  }
}
