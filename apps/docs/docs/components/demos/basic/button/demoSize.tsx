/**
 * title: 调整尺寸
 * description: 除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。<br/>使用 `size` 属性额外配置尺寸，可使用 `sm`和 `lg` 两种值
 */

import React from 'react';
import { Button } from 'sign-ui';

export default function IconDemo() {
  return (
    <>
      <div className="space-x-2 space-y-2 flex items-center">
        <Button size="sm">small</Button>
        <Button type="primary">default</Button>
        <Button type="success" size="lg">
          large
        </Button>
      </div>

      <div className="space-x-2  space-y-2  flex items-center">
        <Button size="sm" round icon="search">
          small
        </Button>
        <Button type="primary" size="md" round icon="search">
          default
        </Button>
        <Button type="success" size="lg" round icon="search">
          large
        </Button>
      </div>
    </>
  );
}
