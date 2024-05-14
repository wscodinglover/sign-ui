import React from 'react';
import { Button } from 'sign-ui';

export default function IconDemo () {
  return <div className="space-x-2 flex items-center">
  <Button loading>default</Button>
  <Button type="primary" loading>primary</Button>
  <Button type="success" loading>success</Button>
  <Button type="info" loading>info</Button>
  <Button type="warning" loading>warning</Button>
  <Button type="danger" loading>danger</Button>
</div>
}