module.exports = {
    // Header配置
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    title: 'Z',
    description: "学如逆水行舟，不进则退", // 网站描述
    theme: 'reco',
    themeConfig: {
        // 华为字体
        huawei: true,
        // 顶部导航配置
        nav: [{
            text: "首页",
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

    }
}