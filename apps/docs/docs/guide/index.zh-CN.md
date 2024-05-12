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
npm install sign-ui
```

```bash [yarn]
yarn add sign-ui
```

```bash [pnpm]
pnpm add sign-ui
```

```bash [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/sign-ui/dist/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary, 0 106 106) / <alpha-value>)',
        'on-primary':
          'rgb(var(--color-on-primary, 255 255 255) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary, 74 99 99) / <alpha-value>)',
        'on-secondary':
          'rgb(var(--color-on-secondary, 255 255 255) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary, 75 96 124) / <alpha-value>)',
        'on-tertiary':
          'rgb(var(--color-on-tertiary, 255 255 255) / <alpha-value>)',
        error: 'rgb(var(--color-error, 186 26 26) / <alpha-value>)',
        'on-error': 'rgb(var(--color-on-error, 255 255 255) / <alpha-value>)',
        surface: 'rgb(var(--color-surface, 250 253 252) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface, 25 28 28) / <alpha-value>)',
        'inverse-surface':
          'rgb(var(--color-inverse-surface, 45 49 49) / <alpha-value>)',
        'on-inverse-surface':
          'rgb(var(--color-on-inverse-surface, 239 241 240) / <alpha-value>)',
        outline: 'rgb(var(--color-outline, 111 121 121) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

```

:::

## 特性

<Features></Features>

## 问题反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 [**GitHub Issues**](https://github.com/arvinxx/dumi-theme-antd-style/issues) 进行反馈
