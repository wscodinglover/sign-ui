---
title: Button 按钮
group:
  title: Basic 基础组件
  order: 2
---

# Button 按钮

## 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<code src="./demos/basic/button/demo.tsx"></code>

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
<code src="./demos/basic/button/demoDisabled.tsx"></code>

## API

| 属性名   | 描述     | 类型                               | 默认值      |
| -------- | -------- | ---------------------------------- | ----------- |
| type     | 图标类型 | `string`                           | `undefined` |
| size     | 大小     | `string`                           | `undefined` |
| disabled | 按钮是否为禁用状态     | `boolean` | `false` |
| plain    | 是否为朴素按钮     | `boolean` | `false` |
| round    | 是否为圆角按钮     | `boolean` | `false` |
