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
        <Button disabled round plain>default</Button>
        <Button type="primary" disabled round plain>
          primary
        </Button>
        <Button type="success" disabled round plain>
          success
        </Button>
        <Button type="info" disabled round plain>
          info
        </Button>
        <Button type="warning" disabled round plain>
          warning
        </Button>
        <Button type="danger" disabled round plain>
          danger
        </Button>
      </div>
    </>
  );
}
