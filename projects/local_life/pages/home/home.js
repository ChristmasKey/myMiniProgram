// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图数据列表
        swiperList: [],
        // 九宫格数据列表
        gridList: [],
    },

    // 获取九宫格数据的方法
    getGridList() {
        // wx.request({
        //     url: 'https://www.escook.cn/categories',
        //     method: 'GET',
        //     success: res => {
        //         console.log(res)
        //         this.setData({
        //             gridList: res.data
        //         })
        //     }
        // })

        // 接口失效，编写模拟数据
        this.setData({
            gridList: [{
                id: 1,
                name: '美食',
                icon: '/images/food.png',
            }, {
                id: 2,
                name: '洗浴足疗',
                icon: '/images/bathtub.png',
            }, {
                id: 3,
                name: '结婚啦',
                icon: '/images/diamond-ring.png',
            }, {
                id: 4,
                name: '卡拉OK',
                icon: '/images/microphone.png',
            }, {
                id: 5,
                name: '找工作',
                icon: '/images/handbag.png',
            }, {
                id: 6,
                name: '辅导班',
                icon: '/images/education.png',
            }, {
                id: 7,
                name: '汽车保养',
                icon: '/images/car.png',
            }, {
                id: 8,
                name: '租房',
                icon: '/images/house.png',
            }, {
                id: 9,
                name: '装修',
                icon: '/images/decoration.png',
            }]
        })
    },

    // 获取轮播图数据的方法
    getSwiperList() {
        // wx.request({
        //   url: 'https://www.escook.cn/slides',
        //   method: 'GET',
        //   success: res => {
        //       console.log(res);
        //       this.setData({
        //           swiperList: res.data
        //       })
        //   }
        // })

        // 接口失效，编写模拟数据
        this.setData({
            swiperList: [{
                id: 1,
                image: 'https://i0.hdslb.com/bfs/archive/ac954fb2d28e52e1f38d7041d73d75155c49858d.jpg@672w_378h_1c_!web-home-common-cover.avif',
                link: ''
            }, {
                id: 2,
                image: 'https://i0.hdslb.com/bfs/archive/185a2a6f0e6b0b007595a6ef4a7b294b11a8aac9.jpg@672w_378h_1c_!web-home-common-cover.avif',
                link: ''
            }, {
                id: 3,
                image: 'https://i1.hdslb.com/bfs/archive/1fe262be94e347f970587bfdc8a26d2154487c4a.jpg@672w_378h_1c_!web-home-common-cover.avif',
                link: ''
            }]
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList()
        this.getGridList()
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})