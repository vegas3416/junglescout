import React, { useState, useEffect } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './sideBar.scss';
import IconTitle from '../IconTitle/iconTitle';
import CreateNew from '../CreateNew/createNew';
import { IAppState } from '../../data/store';
import SearchBarMobile from '../searchBarMobile/searchBarMobile';
import TopNavWidgets from '../widgets/TopNavWdigets/topNavWidgets';

interface IProps extends RouteComponentProps<any> {
  tabs: Array<ArrayProps>;
  mobileView: boolean;
}

export interface ArrayProps {
  type: Array<string>;
  page?: string;
  logo: string;
  title: string;
  submenu?: Array<any>;
}

const SideBar: React.FC<IProps> = ({ tabs, mobileView }) => {
  const createIsOpen = (state: IAppState) => state.homeHub.createIsOpen;
  const createNewBarOpen = useSelector(createIsOpen);

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const updateIsOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };

  //Need this for user but probably use something like PIE instead
  const gUser = (state: IAppState) => state.homeHub.user;
  const user = useSelector(gUser);

  useEffect(() => {
    if (mobileView) {
      setSideBarOpen(mobileView);
    }
  }, [mobileView]);

  console.log('mobileview: ', mobileView);

  return (
    <div
      className={`sidebar ${sideBarOpen ? 'open' : 'closed'} ${
        mobileView ? 'mobile' : ''
      }`}
    >
      {mobileView && <SearchBarMobile />}
      <ul className='sidebar-list'>
        {tabs.map((data, index) => {
          return (
            <li key={index}>
              {index === 0 ? (
                <CreateNew data={data} sideBarOpen={sideBarOpen} />
              ) : (
                data.type.includes(user) && (
                  <IconTitle
                    data={data}
                    sideBarOpen={sideBarOpen}
                    createNewBarOpen={createNewBarOpen}
                    // activeItem={activeItem}
                    //handleActiveItem={(e: string) => toggleActive(e)}

                    //This index is used b/c of the json file uses '0' as the CreateNew Icon
                    index={index}
                  />
                )
              )}
            </li>
          );
        })}
      </ul>

      <div className='bottom-icons'>
        {mobileView && <TopNavWidgets mobile={mobileView} />}

        {!mobileView && (
          <img
            className={`expand-collapse-button ${
              sideBarOpen ? 'sideBarOpen' : ''
            }`}
            onClick={() => updateIsOpen()}
            src={require('../../images/doubleArrow.svg')}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(SideBar);
