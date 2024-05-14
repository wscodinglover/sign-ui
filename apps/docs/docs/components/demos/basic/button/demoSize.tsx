import React from 'react';
import { Button } from 'sign-ui';

export default function IconDemo() {
  return (
    <>
      <div className="space-x-2 flex items-center">
        <Button size="sm">small</Button>
        <Button type="primary">
          default
        </Button>
        <Button type="success" size="lg">
          large
        </Button>
      </div>

      <div className="space-x-2 flex items-center">
        <Button size="sm" round icon="search">small</Button>
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
