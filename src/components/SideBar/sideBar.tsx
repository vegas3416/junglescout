import React, { useState } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './sideBar.scss';
import IconTitle from '../IconTitle/iconTitle';
import CreateNew from '../CreateNew/createNew';
import * as TYPES from '../../actions/types.js';

export interface IProps extends RouteComponentProps<any> {
  tabs: Array<any>;
}

const SideBar: React.FC<IProps> = props => {
  const { tabs } = props;

  const dispatch = useDispatch();
  //const activeItem = useSelector<ReduxState>(state => state.homeHub.activeItem);
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleActive = (e: string) => {
    console.log('Active Item: ', e);
    dispatch({ type: TYPES.SET_ACTIVE_ITEM, payload: e });
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul className='sidebar-list'>
        {tabs.map((data, index) => {
          return (
            <li key={index}>
              {data.type === '0' ? (
                <CreateNew data={data} isOpen={isOpen} />
              ) : (
                <IconTitle
                  data={data}
                  isOpen={isOpen}
                  // activeItem={activeItem}
                  handleActiveItem={(e: string) => toggleActive(e)}
                />
              )}
            </li>
          );
        })}
      </ul>

      <img
        className={`expand-collapse-button ${isOpen ? 'open' : ''}`}
        onClick={() => updateIsOpen()}
        src={require('../../images/doubleArrow.png')}
      />
    </div>
  );
};

export default withRouter(SideBar);
