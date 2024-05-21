---
title: Segmented 分段器
group:
  title: Basic 基础组件
  order: 2
demo:
  cols: 1
---

# Segmented 分段器

## 代码演示

<!-- prettier-ignore -->
<code src="./demos/basic/segmented/basic.tsx" ></code>

## API

| 属性名       | 描述                 | 类型                                                 | 默认值      |
| ------------ | -------------------- | ---------------------------------------------------- | ----------- |
| defaultValue | 默认值               | `string` `number`                                    | `undefined` |
| value        | 当前选中值           | `string` `number`                                    | `undefined` |
| options      | 配置选项内容         | ` string[]` `{labe:string, value:number\|string}[] ` | `undefined` |
| onChange     | 选项变化时的回调函数 | `(e, value) => void`                                 | `undefined` |
| size         | 大小                 | `small` ` middle` `large `                           | `middle`    |
