import React from 'react';

import './homeHub.scss';

import Tile from '../../components/Tile/tile';

//FakeData
import Tiles from '../../components/Tile/tile.json';

const HomeHub = () => {
  return (
    <div className='homeHub'>
      {Tiles.map((tile, index) => {
        return <Tile key={index} data={tile} />;
      })}
    </div>
  );
};

export default HomeHub;
