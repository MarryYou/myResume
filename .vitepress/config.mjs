import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  lang: 'zh',
  vite: {
    optimizeDeps: {
      include: ['mermaid', 'dayjs']
    }
  },
  title: '个人主页',
  description: "范浩天的在线简历 - Fan Haotian's Resume",
  base: '/myResume/',
  srcExclude: ['**/specs/**'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '简历详情', link: '/resume' },
      { text: '技术博客', link: '/blog/' }
    ],
    sidebar: {
      '/blog/truthseeker/': [
        {
          text: 'TruthSeeker 深度解析',
          items: [
            { text: '1. 我用 LangGraph 搭了个"反谣言"引擎', link: '/blog/truthseeker/01-product-overview' },
            { text: '2. 一个前端写 Python 后端，技术选型的纠结', link: '/blog/truthseeker/02-core-architecture' },
            { text: '3. LangGraph 管道：我把研究拆成了 6 个工人', link: '/blog/truthseeker/03-langgraph-pipeline' },
            { text: '4. 我给 AI 搭了个法庭，让它自己审自己', link: '/blog/truthseeker/04-verify-subgraph' },
            { text: '5. 从一条队到三条队：我被用户骂醒了', link: '/blog/truthseeker/05-worker-scheduler' },
            { text: '6. 用户的 API Key 存在我这，我比他还怕泄露', link: '/blog/truthseeker/06-multitenant-security' },
            { text: '7. 十分钟加一个搜索引擎的重构过程', link: '/blog/truthseeker/07-search-plugin' },
            { text: '8. 让用户盯着白屏等 5 分钟，这不行', link: '/blog/truthseeker/08-sse-push' },
            { text: '9. 一行命令跑起来：Makefile 踩坑实录', link: '/blog/truthseeker/09-deployment' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MarryYou/myResume' }
    ],
    footer: {
      message: 'Built with ❤️ using VitePress',
      copyright: 'Copyright © 2024-present 范浩天'
    }
  }
})