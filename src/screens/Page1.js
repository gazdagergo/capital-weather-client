import React from 'react';
import List from '../components/List';
import './screens.scss';

const Page1 = () => (
  <div className="screen">
    <List items={[{label: 'Budapest'}, {label: 'Berlin'}]} />
  </div>
)

export default Page1;
