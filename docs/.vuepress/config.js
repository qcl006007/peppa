const themeConfig = require('./config/theme/')

module.exports = {
  base: '/peppa/',
  title: "QI Peppa",
  description: '正道的光，照在了大地上啊！把每个...',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  codeTheme: 'coy',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
        "dynamic-title",
        {
          showIcon: "/favicon.ico",
          showText: "(/≧▽≦/)老板好！",
          hideIcon: "/failure.ico",
          hideText: "(●—●)快快回来！",
          recoverTime: 2000
        }
      ],
  ]
}  