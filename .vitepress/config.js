export default {
  lang: 'zh',
  title: '个人主页',
  description: '范浩天的在线简历 - Fan Haotian\'s Resume',
  base: '/myResume/',
  srcExclude: ['**/specs/**'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '简历详情', link: '/resume' },
      { text: '项目合集', link: '/projects' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MarryYou/myResume' }
    ],
    footer: {
      message: 'Built with ❤️ using VitePress',
      copyright: 'Copyright © 2024-present 范浩天'
    }
  }
}
