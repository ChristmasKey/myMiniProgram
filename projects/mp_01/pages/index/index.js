// index.js

/* 
    页面的初始数据
*/
Page({
    data: {
        info: 'hello world',
        imgSrc: 'https://i0.hdslb.com/bfs/archive/6919912c21a26ab2dbbf3a821815acc90dd07049.jpg@672w_378h_1c_!web-home-common-cover.avif',
        randomNum1: Math.random() * 10,
        randomNum2: Math.random().toFixed(2),
        count: 0,
        msg: '你好',
        type: 1
    },

    // 定义按钮的事件处理函数
    outerHandler(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.currentTarget);
    },

    countChange(e) {
        this.setData({
            count: this.data.count + 1
        })
    },

    countChange2(e) {
        this.setData({
            count: this.data.count + e.target.dataset.step
        })
    },

    inputHandler(e) {
        console.log(e.detail.value);
    },

    inputHandler2(e) {
        this.setData({
            msg: e.detail.value
        })
    }
})
