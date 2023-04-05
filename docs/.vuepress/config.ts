import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ZXF.zone',
  description: '这里是ZXF.zone',
  theme: hopeTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
        icon: '',
      },
      {
        text: '文章',
        link: '/posts',
        icon: '',
      }
      ],
      sidebar: [
        {
          text: "指南",
          link: "/zh/guide/README.md",
          icon: "lightbulb",
          activeMatch: "",
        },
      ],
  }),
})
