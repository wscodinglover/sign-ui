import React from 'react';
import { Button } from 'sign-ui';

export default function ButtonDemo() {
  return (
    <>
      <div className="space-x-2">
        <Button>default</Button>
        <Button type="primary">
          primary
        </Button>
        <Button type="success">
          success
        </Button>
        <Button type="info">
          info
        </Button>
        <Button type="warning">
          warning
        </Button>
        <Button type="danger">
          danger
        </Button>
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
