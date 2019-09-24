module.exports = {
  theme: '@vuepress/theme-default',
  title: 'Sneaky Peek Documentation',
  description: 'Live preview your static sites using Sneaky Peek',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/intro/' },
      { text: 'Github', link: 'https://github.com/sneaky-peek' }
    ],
    sidebar: [
      '/intro/'
    ]
  }
}