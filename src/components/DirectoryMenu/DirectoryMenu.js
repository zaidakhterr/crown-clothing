import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './DirectoryMenu.scss';

export class DirectoryMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;

    const menuItems = sections.map(({ id, title, imageUrl, size }) => (
      <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
    ));

    return <div className='directory-menu'>{menuItems}</div>;
  }
}

export default DirectoryMenu;
