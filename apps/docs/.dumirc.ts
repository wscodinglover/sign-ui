import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';

const themeConfig: SiteThemeConfig = {
  name: '',
  logo: '/images/logo.svg',

  socialLinks: { github: 'https://github.com/wscodinglover/sign-ui' },
  apiHeader: false,
  footer: false,

  hideHomeNav: true,
};

export default defineConfig({
  themeConfig,
  favicons: ['/favicon.ico'],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
