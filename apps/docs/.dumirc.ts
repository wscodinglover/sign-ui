import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';

const themeConfig: SiteThemeConfig = {
  name: '',
  logo: '/sign-ui/images/logo.svg',
  socialLinks: { github: 'https://github.com/wscodinglover/sign-ui' },
  apiHeader: false,
  footer: false,
  hideHomeNav: true,
};

export default defineConfig({
  base: '/sign-ui/',
  publicPath: '/sign-ui/',
  cssPublicPath: '/sign-ui/',
  themeConfig,
  favicons: ['/sign-ui/favicon.png'],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  exportStatic: {},
  manifest: {
    basePath: '/sign-ui/',
  },
  outputPath: '../../docs/',
  svgo: {},
});
