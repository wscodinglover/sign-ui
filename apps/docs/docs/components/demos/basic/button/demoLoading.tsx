/**
 * title: 加载状态按钮
 * description: 点击按钮来加载数据，并向用户反馈加载状态。<br/>通过设置 `loading` 属性为 `true` 来显示加载中状态。
 */

import React from 'react';
import { Button } from 'sign-ui';

export default function IconDemo() {
  return (
    <div className="space-x-2 flex items-center">
      <Button loading>default</Button>
      <Button type="primary" loading>
        primary
      </Button>
      <Button type="success" loading>
        success
      </Button>
      <Button type="info" loading>
        info
      </Button>
      <Button type="warning" loading>
        warning
      </Button>
      <Button type="danger" loading>
        danger
      </Button>
    </div>
  );
}
