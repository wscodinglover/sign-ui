/**
 * title: 基础用法
 * description: 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。<br/>
 */

import React, { useEffect, useState } from 'react';
import { Flex, Segmented } from 'sign-ui';

export default function ButtonDemo() {
  const [value, setValue] = useState('选项二');
  const [value1, setValue1] = useState(1);

  useEffect(() => {
    console.log('value1', value1);
  }, [value1]);

  return (
    <>
      <Flex vertical gap="middle">
        <Segmented
          options={['选项一', '选项二', '选项三']}
          value={value}
          onChange={(e, v) => setValue(v.value)}
        ></Segmented>
        <Segmented
          defaultValue={3}
          value={value1}
          onChange={(e, v) => setValue1(v.value)}
          options={[
            { label: '选项一', value: 1 },
            { label: '选项二', value: 2, disabled: true },
            { label: '选项三', value: 3 },
            { label: '选项四', value: 4 },
            { label: '选项五', value: 5, disabled: true },
            { label: '选项六', value: 6 },
          ]}
        ></Segmented>
      </Flex>
    </>
  );
}
