// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [],
        // 设置节流阀
        isLoading: false
    },

    getColors() {
        // 开启节流阀
        this.setData({
            isLoading: true
        })
        // 显示 loading 提示框
        wx.showLoading({
            title: '加载中...'
        })
        wx.request({
            //   url: 'https://www.escook.cn/api/color',
            url: 'https://api.toolkk.com/api/color/random',
            //   method: 'GET',
            method: 'POST',
            data: {
                num: 10
            },
            success: ({ data: res }) => {
                console.log('tags', res.data);
                this.setData({
                    colorList: [...this.data.colorList, ...res.data]
                })
            },
            complete: () => {
                setTimeout(() => {
                    // 关闭 loading 提示框
                    wx.hideLoading()
                    // 关闭节流阀
                    this.setData({
                        isLoading: false
                    })
                }, 500)
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColors()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (!this.data.isLoading) {
            this.getColors()
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})