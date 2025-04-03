import App from '@/App.vue';
import setupPlugins from '@/plugins';
import { createSSRApp } from 'vue';
import { i18n } from './locales';
// 引入UnoCSS
import 'virtual:uno.css';

// 动态设置 TabBar
export function setTabBar() {
  const tabBar = [
    { pagePath: 'pages/menu/home/index', textKey: 'pageTitle.home' },
    { pagePath: 'pages/menu/list/index', textKey: 'pageTitle.list' },
    { pagePath: 'pages/menu/list/user', textKey: 'pageTitle.user' },
  ];

  tabBar.forEach((item: any, index: number) => {
    uni.setTabBarItem({
      index,
      text: i18n.global.t(item.textKey), // 根据当前语言获取 TabBar 文本
    });
  });
}
export function createApp() {
  const app = createSSRApp(App);
  app.use(setupPlugins);
  return {
    app,
  };
}
