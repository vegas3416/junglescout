import React from 'react';

import { withRouter } from 'react-router-dom';

import './homeHub.scss';

import Tile from '../../components/Tile/tile';

//FakeData
import Tiles from '../../components/Tile/tile.json';
import Recruiter from '../../components/Tile/recruiter.json';
import { useSelector } from 'react-redux';
import { IAppState } from '../../data/store';
import ExtendedTile from '../../components/Tile/ExtendedTile/entendedTile';

const HomeHub = () => {
  const gUser = (state: IAppState) => state.homeHub.user;
  const user = useSelector(gUser);

  console.log('User: ', user);
  return (
    <div className='homeHub'>
      {Tiles.map((tile, index) => {
        {
          return (
            tile.type.includes(user) && (
              <div key={index} className='homeHub-tile'>
                <Tile data={tile} />
                {/* {user === 'Recruiter' && <ExtendedTile />} */}
              </div>
            )
          );
        }
      })}
    </div>
  );
};

export default HomeHub;
