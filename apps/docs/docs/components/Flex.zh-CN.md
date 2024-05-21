---
title: Flex 弹性布局
group:
  title: Basic 基础组件
  order: 2
---

# Flex 弹性布局

## 基础用法

<code src="./demos/basic/flex/demoBasic.tsx"></code>

## API

| 属性名   | 描述                                                 | 类型                                               | 默认值      |
| -------- | ---------------------------------------------------- | -------------------------------------------------- | ----------- |
| vertical | flex 主轴的方向是否垂直，使用 flex-direction: column | `boolean`                                          | `false`     |
| justify  | 设置元素在主轴方向上的对齐方式                       | `normal` `start` `end` `center` `between` `around` | `normal`    |
| align    | 设置元素在交叉轴方向上的对齐方式                     | `start` `end` `center` `baseline` `stretch`        | `start`     |
| flex     | flex CSS 简写属性                                    | `1` `initial` `auto` `none`                        | `1`         |
| wrap     | 设置元素单行显示还是多行显示                         | `wrap` `wrap-reverse` `nowrap`                     | `wrap`      |
| gap      | 设置网格之间的间隙                                   | `small` ` middle` `large `                         | `undefined` |
