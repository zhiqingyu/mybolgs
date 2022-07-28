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
        //  主题切换
        modePicker: false,
        // 替换头像
        authorAvatar: '/images/tx.jpg',
        //   左侧头像
        logo: '/images/tx.jpg',
        //  侧边栏配置
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 顶部导航配置
        nav: [{
                text: "主页",
                link: "/",
                icon: "reco-home"
            }, {
                text: '博客',
                link: '/myblog/',
                icon: 'reco-category'
            },
            {
                text: '时光轴',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: '实用工具',
                icon: 'reco-suggestion',
                items: [{
                        "text": "免费API",
                        "link": "https://api.sumt.cn/"
                    }, {
                        "text": "站长工具",
                        "link": "https://tool.chinaz.com/"
                    },
                    {
                        "text": "图片压缩",
                        "link": "https://tinypng.com/"
                    },
                    {
                        "text": "工具集合地",
                        "link": "https://www.5cv.top/"
                    }, {
                        "text": "CSS3动画库",
                        "link": "https://www.dowebok.com/98.html"
                    }, {
                        "text": "iconfont图标库",
                        "link": "https://www.iconfont.cn/"
                    },
                ]
            },
            {
                text: '催眠利器',
                icon: 'reco-api',
                items: [{
                        "text": "Vue2",
                        "link": "https://cn.vuejs.org/"
                    }, {
                        "text": "Vue3",
                        "link": "https://staging-cn.vuejs.org/"
                    },
                    {
                        "text": "React",
                        "link": "https://react.docschina.org/"
                    },
                    {
                        "text": "Axios",
                        "link": "http://www.axios-js.com/"
                    },
                    {
                        "text": "Uni-app",
                        "link": "https://uniapp.dcloud.io/"
                    }, {
                        "text": "W3school",
                        "link": "https://www.w3school.com.cn/"
                    },
                ]
            },
            {
                text: '关于我',
                link: '/aboutMe/',
                icon: 'reco-account'
            }
        ],
        // 配置博客
        type: 'blog',
        // 博客配置信息
        blogConfig: {
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            },
        }
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
            num: 30, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: '...' // 绝对路径
            }
        },
        // 不知道什么东西
        'cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
        //  看板娘
        "vuepress-plugin-cat",
        // 返回顶部插件
        "go-top",
        // 动态标签
        'dynamic-title',
        {
            showIcon: '/favicon.ico',
            showText: '(/≧▽≦/)咦！又好了！',
            hideIcon: '/failure.ico',
            hideText: '(●—●)喔哟，崩溃啦！',
            recoverTime: 2000,
        },
    ]
}