---
title: 简介
nav:
  title: 指南
  order: 1
group:
  title: 介绍
  order: -1
---

# 这是什么?

在开发 [**Ant Design Style**](https://github.com/ant-design/antd-style) 过程中为了测试与验证的自定义主题、动态主题算法等能力，在 antd 基础组件基础上，特意尝试了诸多风格化样式，例如渐变、毛玻璃模糊等。由于不少同学对此表达了喜爱，因此单独抽取为 [**dumi2**](https://github.com/umijs/dumi) 主题包，以供复用。

## 安装

:::code-group

```bash [npm]
npm install tailwindcss autoprefixer
npm install sign-ui
```

```bash [yarn]
yarn add tailwindcss autoprefixer
yarn add sign-ui
```

```bash [pnpm]
pnpm add tailwindcss autoprefixer
pnpm add sign-ui
```

```js [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/sign-ui/dist/**/*.{js,jsx}',
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
```

```js [postcss.config.js]
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

:::

## 主题介绍

```css [tailwind.css]
:root {
  /* 主题色 */
  /* --color-primary-light-1: #409EFF;
  --color-primary-light-5: #a0cfff
  --color-success-light-1: #67C23A;
  
  --color-warning-light-1: #E6A23C;
  --color-danger-light-1: #F56C6C;
  --color-info-light-1: #909399; */
}
```

## 问题反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 [**GitHub Issues**](https://github.com/wscodinglover/sign-ui/issues) 进行反馈
