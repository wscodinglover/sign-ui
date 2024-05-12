---
title: Button 按钮
group:
  title: Basic 基础组件
  order: 2
---

# Button 按钮

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```tsx
import React from 'react';
import { Button } from 'sign-ui';

export default function ButtonDemo() {
  return (
    <>
      <div className="space-x-2">
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="info">info</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
      </div>

      <div className="space-x-2 space-y-4">
        <Button plain>default</Button>
        <Button type="primary" plain>
          primary
        </Button>
        <Button type="success" plain>
          success
        </Button>
        <Button type="info" plain>
          info
        </Button>
        <Button type="warning" plain>
          warning
        </Button>
        <Button type="danger" plain>
          danger
        </Button>
      </div>

      <div className="space-x-2 space-y-4">
        <Button round>default</Button>
        <Button type="primary" round>
          primary
        </Button>
        <Button type="success" round>
          success
        </Button>
        <Button type="info" round>
          info
        </Button>
        <Button type="warning" round>
          warning
        </Button>
        <Button type="danger" round>
          danger
        </Button>
      </div>
    </>
  );
}
```

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```tsx
import React from 'react';
import { Button } from 'sign-ui';

export default function ButtonDemo() {
  return (
    <>
      <div className="space-x-2">
        <Button disabled>default</Button>
        <Button type="primary" disabled>
          primary
        </Button>
        <Button type="success" disabled>
          success
        </Button>
        <Button type="info" disabled>
          info
        </Button>
        <Button type="warning" disabled>
          warning
        </Button>
        <Button type="danger" disabled>
          danger
        </Button>
      </div>

      <div className="space-x-2 space-y-4">
        <Button disabled>default</Button>
        <Button type="primary" disabled>
          primary
        </Button>
        <Button type="success" disabled>
          success
        </Button>
        <Button type="info" disabled>
          info
        </Button>
        <Button type="warning" disabled>
          warning
        </Button>
        <Button type="danger" disabled>
          danger
        </Button>
      </div>
    </>
  );
}
```

## API

| 属性名   | 描述               | 类型      | 默认值      |
| -------- | ------------------ | --------- | ----------- |
| type     | 图标类型           | `string`  | `undefined` |
| size     | 大小               | `string`  | `undefined` |
| disabled | 按钮是否为禁用状态 | `boolean` | `false`     |
| plain    | 是否为朴素按钮     | `boolean` | `false`     |
| round    | 是否为圆角按钮     | `boolean` | `false`     |
