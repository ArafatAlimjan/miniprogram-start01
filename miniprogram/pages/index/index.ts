// pages/index/index.ts
const app = getApp();

Page({
  data: {
    statusBarHeight: 0,
    navBarHeight: 0,
    contentHeight: 0, // 初始化内容区高度
  },
  onLoad() {
    // 在 onLoad 方法中更新数据
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      navBarHeight: app.globalData.navBarHeight,
      contentHeight: app.globalData.contentHeight
    });
  }
});
