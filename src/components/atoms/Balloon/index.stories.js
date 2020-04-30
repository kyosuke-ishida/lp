import React from 'react';
import { storiesOf } from '@storybook/react';
import Balloon from './index.js';

storiesOf('Balloon', module)
    .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
    .add('4文字ラベル', () => <Balloon>削除する</Balloon>);