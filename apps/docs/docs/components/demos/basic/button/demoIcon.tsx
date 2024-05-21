/**
 * title: 图标按钮
 * description: 使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。<br/>使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件中找到所需图标。
 */

import React from 'react';
import { Button } from 'sign-ui';

export default function IconDemo() {
  return (
    <div className="space-x-2 flex items-center">
      <Button icon="plus"></Button>
      <Button type="primary" icon="share">
        {' '}
      </Button>
      <Button type="success" icon="edit"></Button>
      <Button type="info" icon="message"></Button>
      <Button type="warning" icon="delete"></Button>
      <Button type="danger" icon="delete"></Button>
    </div>
  );
}
