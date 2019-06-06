import React from 'react';
import List from '../components/List';
import './screens.scss';

const Page1 = () => (
  <div className="screen">
    <List items={[{label: 'Budapest', href: 'city/budapest'}, {label: 'Berlin', href: 'city/berlin'}]} />
  </div>
)

export default Page1;
