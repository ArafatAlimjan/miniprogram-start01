// utils/request.ts
export const request = (url: string, method: "GET" | "POST" = "GET", data: object = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // 不直接尝试将data解析为类型T，而是原样返回
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
};
