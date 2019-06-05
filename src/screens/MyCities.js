import React from 'react';
import List from '../components/List';
import './screens.scss';

const MyCities = () => (
  <div className="screen">
    <List items={[{label: 'bar'}]} />
  </div>
)

export default MyCities;
