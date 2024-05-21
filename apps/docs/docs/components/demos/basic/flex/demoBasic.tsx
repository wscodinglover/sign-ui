/**
 * title: 基本布局
 * description: 最简单的用法。
 */

import React from 'react';
import { Flex } from 'sign-ui';

export default function ButtonDemo() {
  return (
    <>
      <Flex>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 120,
              height: 50,
              backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
            }}
          />
        ))}
      </Flex>
    </>
  );
}
