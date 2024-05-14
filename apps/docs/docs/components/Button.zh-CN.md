---
title: Button 按钮
group:
  title: Basic 基础组件
  order: 2
---

# Button 按钮

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<code src="./demos/basic/button/demo.tsx" ></code>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<code src="./demos/basic/button/demoDisabled.tsx"></code>

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件中找到所需图标。

<code src="./demos/basic/button/demoIcon.tsx"></code>

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

<code src="./demos/basic/button/demoLoading.tsx"></code>

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `sm`和 `lg` 两种值

<code src="./demos/basic/button/demoSize.tsx"></code>

## API

| 属性名   | 描述               | 类型      | 默认值      |
| -------- | ------------------ | --------- | ----------- |
| type     | 按钮类型           | `string`  | `undefined` |
| size     | 大小               | `string`: `sm``md``lg`  | `md` |
| disabled | 按钮是否为禁用状态 | `boolean` | `false`     |
| plain    | 是否为朴素按钮     | `boolean` | `false`     |
| round    | 是否为圆角按钮     | `boolean` | `false`     |
| loading  | 是否加载中         | `boolean` | `false`     |
| icon     | 图标               | `string`  | `undefined` |
