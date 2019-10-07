import React from 'react';
import DirectoryMenu from '../../components/DirectoryMenu/DirectoryMenu';

import './HomePage.scss';

export default function HomePage() {
  return (
    <div className='home-page'>
      <h1>Welcome to my Homepage</h1>
      <DirectoryMenu />
    </div>
  );
}
