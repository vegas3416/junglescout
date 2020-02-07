import React, { useState, useEffect } from 'react';
import { Switch, Link, withRouter, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import './homeHub.scss';

//import * as TYPES from 'Src/actions/types';
import { useDispatch } from 'react-redux';
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

// logo: String;
//   title: String;
//   subtitle: String;
//   widgetData: Array<MiniData>;
//   links: Array<any>;
