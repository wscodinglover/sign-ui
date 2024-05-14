import React from 'react';
import { Button } from 'sign-ui';

export default function IconDemo () {
  return <div className="space-x-2 flex items-center">
  <Button icon="plus"></Button>
  <Button type="primary" icon="share"> </Button>
  <Button type="success" icon="edit"></Button>
  <Button type="info" icon="message"></Button>
  <Button type="warning" icon="delete"></Button>
  <Button type="danger" icon="delete"></Button>
</div>
}