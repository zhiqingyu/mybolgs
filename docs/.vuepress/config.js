module.exports = {
    // Header配置
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    title: 'Z',
    // description: "学如逆水行舟，不进则退", // 网站描述
    theme: 'reco',
    themeConfig: {
        // 华为字体
        huawei: true,
        // 暗色模式
        mode: 'dark',
        // 替换头像
        authorAvatar: '/images/tx.jpg',
        logo: '/images/tx.jpg',
        // 顶部导航配置
        nav: [{
            text: "主页",
            link: "/",
            icon: "reco-home"
        }, {
            text: '博客',
            link: '/myblog/',
            icon: 'reco-category'
        }, {
            text: '时光轴',
            link: '/timeline/',
            icon: 'reco-date'
        }],
        // 配置博客
        type: 'blog',
    },
    // 插件
    plugins: [
        // 彩带插件

        "ribbon-animation", {
            size: 90, // 默认数据
            opacity: 0.3, //  透明度
            zIndex: -1, //  层级
            opt: {
                // 色带HSL饱和度
                colorSaturation: "80%",
                // 色带HSL亮度量
                colorBrightness: "60%",
                // 带状颜色不透明度
                colorAlpha: 0.65,
                // 在HSL颜色空间中循环显示颜色的速度有多快
                colorCycleSpeed: 6,
                // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
                verticalPosition: "center",
                // 到达屏幕另一侧的速度有多快
                horizontalSpeed: 200,
                // 在任何给定时间，屏幕上会保留多少条带
                ribbonCount: 2,
                // 添加笔划以及色带填充颜色
                strokeSize: 0,
                // 通过页面滚动上的因子垂直移动色带
                parallaxAmount: -0.5,
                // 随着时间的推移，为每个功能区添加动画效果
                animateSections: true
            },
            ribbonShow: false, //  点击彩带  true显示  false为不显示
            ribbonAnimationShow: true // 滑动彩带
        },

        // 樱花插件
        "sakura", {
            num: 20, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: '...' // 绝对路径
            }
        }
    ]
}