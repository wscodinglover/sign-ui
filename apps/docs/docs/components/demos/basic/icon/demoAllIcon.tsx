/**
 * inherit: true
 * defaultShowCode: false
 * appearance: light
 * compact: true
 */
import React from 'react';
import type { IconKeysType } from 'sign-ui';
import { Icon } from 'sign-ui';

export default function IconDemo() {
  const icons: IconKeysType[] = [
    'add-location',
    'aim',
    'apple',
    'alarm-clock',
    'arrow-down-bold',
    'arrow-down',
    'arrow-left-bold',
    'arrow-left',
    'arrow-right-bold',
    'arrow-right',
    'arrow-up-bold',
    'arrow-up',
    'avatar',
    'baseball',
    'back',
    'basketball',
    'bell-filled',
    'bell',
    'bicycle',
    'bottom-left',
    'bottom-right',
    'bottom',
    'bowl',
    'box',
    'briefcase',
    'brush-filled',
    'brush',
    'burger',
    'calendar',
    'camera-filled',
    'camera',
    'caret-bottom',
    'caret-left',
    'caret-right',
    'cellphone',
    'chat-dot-round',
    'chat-dot-square',
    'chat-line-round',
    'chat-line-square',
    'chat-round',
    'chat-square',
    'check',
    'checked',
    'cherry',
    'chicken',
    'chrome-filled',
    'circle-check-filled',
    'circle-check',
    'circle-close-filled',
    'circle-close',
    'circle-plus-filled',
    'circle-plus',
    'clock',
    'close-bold',
    'cloudy',
    'close',
    'coffee-cup',
    'coffee',
    'cold-drink',
    'collection',
    'caret-top',
    'collection-tag',
    'comment',
    'compass',
    'connection',
    'coordinate',
    'copy-document',
    'cpu',
    'credit-card',
    'crop',
    'd-arrow-right',
    'd-caret',
    'data-analysis',
    'data-board',
    'data-line',
    'delete-filled',
    'delete-location',
    'd-arrow-left',
    'delete',
    'dessert',
    'discount',
    'dish-dot',
    'document-add',
    'dish',
    'document-checked',
    'document-copy',
    'document-delete',
    'document-remove',
    'document',
    'download',
    'drizzling',
    'edit-pen',
    'edit',
    'eleme-filled',
    'eleme',
    'expand',
    'element-plus',
    'failed',
    'female',
    'files',
    'film',
    'filter',
    'finished',
    'first-aid-kit',
    'flag',
    'fold',
    'folder-add',
    'folder-checked',
    'folder-delete',
    'folder-opened',
    'folder-remove',
    'folder',
    'food',
    'football',
    'fork-spoon',
    'fries',
    'full-screen',
    'goblet-full',
    'goblet-square-full',
    'goblet-square',
    'goblet',
    'gold-medal',
    'goods-filled',
    'goods',
    'grape',
    'grid',
    'guide',
    'handbag',
    'headset',
    'help-filled',
    'help',
    'hide',
    'histogram',
    'home-filled',
    'hot-water',
    'house',
    'ice-cream-round',
    'ice-cream-square',
    'ice-cream',
    'ice-drink',
    'ice-tea',
    'info-filled',
    'iphone',
    'key',
    'knife-fork',
    'lightning',
    'link',
    'list',
    'loading',
    'location-filled',
    'location-information',
    'coin',
    'location',
    'lollipop',
    'lock',
    'magic-stick',
    'magnet',
    'male',
    'management',
    'map-location',
    'medal',
    'memo',
    'menu',
    'message-box',
    'message',
    'mic',
    'milk-tea',
    'microphone',
    'minus',
    'money',
    'monitor',
    'moon-night',
    'moon',
    'more-filled',
    'more',
    'mostly-cloudy',
    'mouse',
    'mug',
    'mute-notification',
    'mute',
    'no-smoking',
    'notebook',
    'notification',
    'odometer',
    'office-building',
    'open',
    'operation',
    'opportunity',
    'orange',
    'paperclip',
    'partly-cloudy',
    'pear',
    'phone-filled',
    'picture-filled',
    'phone',
    'picture-rounded',
    'picture',
    'pie-chart',
    'place',
    'platform',
    'plus',
    'pointer',
    'position',
    'postcard',
    'pouring',
    'present',
    'price-tag',
    'printer',
    'promotion',
    'quartz-watch',
    'rank',
    'question-filled',
    'reading-lamp',
    'reading',
    'refresh-left',
    'refresh-right',
    'refresh',
    'refrigerator',
    'remove-filled',
    'remove',
    'right',
    'scale-to-original',
    'school',
    'scissor',
    'search',
    'select',
    'sell',
    'semi-select',
    'service',
    'set-up',
    'setting',
    'share',
    'ship',
    'shop',
    'shopping-bag',
    'shopping-cart-full',
    'shopping-cart',
    'shopping-trolley',
    'smoking',
    'soccer',
    'sold-out',
    'sort-down',
    'sort-up',
    'sort',
    'stamp',
    'star-filled',
    'star',
    'stopwatch',
    'success-filled',
    'sugar',
    'suitcase-line',
    'suitcase',
    'sunny',
    'sunrise',
    'sunset',
    'switch-button',
    'switch-filled',
    'switch',
    'takeaway-box',
    'ticket',
    'tickets',
    'timer',
    'toilet-paper',
    'tools',
    'top-left',
    'top-right',
    'top',
    'trend-charts',
    'trophy-base',
    'trophy',
    'turn-off',
    'umbrella',
    'unlock',
    'upload-filled',
    'upload',
    'user-filled',
    'user',
    'video-camera-filled',
    'video-camera',
    'van',
    'video-pause',
    'view',
    'video-play',
    'wallet-filled',
    'wallet',
    'warn-triangle-filled',
    'warning-filled',
    'warning',
    'watch',
    'watermelon',
    'wind-power',
    'zoom-in',
    'zoom-out',
  ];

  const copyFile = (v) => {
    navigator.clipboard.writeText(`<Icon iconType="${v}" size="sm"></Icon>`);
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
      {icons.map((v: IconKeysType, i) => {
        return (
          <div
            className="cursor-pointer hover:bg-gray-100 flex justify-center items-center flex-col h-[100px]"
            key={`title_${i}`}
            onClick={() => copyFile(v)}
          >
            <Icon iconType={v} size="xl"></Icon>
            <div>{v}</div>
          </div>
        );
      })}
    </div>
  );
}
