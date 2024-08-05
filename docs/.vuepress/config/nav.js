// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: 'JavaScript教程', link: '/note/javascript/' },
          { text: 'JavaScript高级程序设计', link: '/note/js/' },
          { text: 'ES6 教程', link: '/note/es6/' },
          { text: 'Vue', link: '/note/vue/' },
          { text: 'Vue3.0', link: '/pages/690271/' },
          { text: 'React', link: '/note/react/' },
          {
            text: 'TypeScript 从零实现 axios',
            link: '/note/typescript-axios/',
          },
          {
            text: 'Git',
            link: '/note/git/',
          },
          {
            text: 'TypeScript',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结',
            link: '/pages/4643cd/',
          },
          {
            text: '小程序',
            link: '/note/wx-miniprogram/',
          },
          {
            text: '小程序云开发',
            link: '/pages/f342ec/',
          },
          {
            text: 'Echarts',
            link: '/pages/echarts/',
          },
          {
            text: '微前端',
            link: '/pages/92a49d/',
          },
          {
            text: 'H5',
            link: '/pages/e1dcd1/',
          },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages//pages/nodejs/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
      { text: '搜索引擎', link: '/note/seo/baidu/' },
      { text: 'ES系列', link: '/pages/2588a7/' },
      { text: '经典面试题', link: '/pages/7d67e2/' },
      { text: '知识点总结', link: '/pages/7a69e8/' },
      { text: 'uni-app', link: '/pages/uni-app/' },
      { text: '算法', link: '/pages/leetcode/' },
      { text: 'Vue3实战', link: '/pages/f4c038/' },
      { text: '小程序chatgpt', link: '/pages/fcb539/' },
      { text: '小程序配网流程', link: '/pages/12985d/' },
      { text: '程序WIFI配网', link: '/pages/785e56/' },
      { text: '小程序WebSocket', link: '/pages/b07c41/' },
      { text: 'H5 WebSocket', link: '/pages/628a97/' },
      { text: 'H5 TTS', link: '/pages/66e106/' },
      { text: 'Vue3实现OSS存储', link: '/pages/8deb1d/' },
      { text: '大文件分片上传', link: '/pages/d9915d/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
