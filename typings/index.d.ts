/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    statusBarHeight?: number,
    navBarHeight?: number,
    contentHeight?: number
  },
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
  onLaunch?: () => void,
  // 其他可能的属性和方法定义
}