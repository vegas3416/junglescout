import React, { useState } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './sideBar.scss';
import IconTitle from '../IconTitle/iconTitle';
import CreateNew from '../CreateNew/createNew';
import * as TYPES from '../../data/events';
import { IAppState } from '../../data/store';

export interface IProps extends RouteComponentProps<any> {
  tabs: Array<any>;
}

const SideBar: React.FC<IProps> = props => {
  const { tabs } = props;

  const dispatch = useDispatch();

  const createIsOpen = (state: IAppState) => state.homeHub.createIsOpen;
  const createNewBarOpen = useSelector(createIsOpen);

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const updateIsOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };

  // const toggleActive = (e: string) => {
  //   console.log('Active Item: ', e);
  //   dispatch({ type: TYPES.AppEvents.SET_ACTIVE_ITEM, payload: e });
  // };

  return (
    <div className={`sidebar ${sideBarOpen ? 'open' : 'closed'}`}>
      <ul className='sidebar-list'>
        {tabs.map((data, index) => {
          return (
            <li key={index}>
              {data.type === '0' ? (
                <CreateNew data={data} sideBarOpen={sideBarOpen} />
              ) : (
                <IconTitle
                  data={data}
                  sideBarOpen={sideBarOpen}
                  createNewBarOpen={createNewBarOpen}
                  // activeItem={activeItem}
                  //handleActiveItem={(e: string) => toggleActive(e)}

                  //This index is used b/c of the json file uses '0' as the CreateNew Icon
                  index={index}
                />
              )}
            </li>
          );
        })}
      </ul>

      <img
        className={`expand-collapse-button ${sideBarOpen ? 'sideBarOpen' : ''}`}
        onClick={() => updateIsOpen()}
        src={require('../../images/doubleArrow.png')}
      />
    </div>
  );
};

export default withRouter(SideBar);
