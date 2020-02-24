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
  showMobileSideBar: boolean;
}

export interface ArrayProps {
  type: Array<string>;
  page?: string;
  logo: string;
  title: string;
  submenu?: Array<any>;
}

const SideBar: React.FC<IProps> = ({ tabs, mobileView, showMobileSideBar }) => {
  const createIsOpen = (state: IAppState) => state.homeHub.createIsOpen;
  const createNewBarOpen = useSelector(createIsOpen);

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const updateIsOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };

  //Need this for user but probably use something like PIE instead
  const gUser = (state: IAppState) => state.homeHub.user;
  const user = useSelector(gUser);

  console.log('MobileViewProfile: ', mobileView);

  return (
    <div
      className={`sidebar ${
        mobileView && !showMobileSideBar
          ? 'mobile'
          : mobileView && showMobileSideBar
          ? 'openMobile'
          : sideBarOpen
          ? 'open'
          : ''
      }`}
    >
      {mobileView && <SearchBarMobile showMobileSideBar={showMobileSideBar} />}
      <ul className='sidebar-list'>
        {tabs.map((data, index) => {
          return (
            <li key={index}>
              {index === 0 ? (
                <CreateNew
                  data={data}
                  sideBarOpen={sideBarOpen}
                  showMobileSideBar={showMobileSideBar}
                />
              ) : (
                data.type.includes(user) &&
                (showMobileSideBar &&
                (data.title === 'Manager' ||
                  data.title === 'Recruiter' ||
                  data.title === 'Admin') ? null : (
                  <IconTitle
                    data={data}
                    sideBarOpen={sideBarOpen}
                    createNewBarOpen={createNewBarOpen}
                    showMobileSideBar={showMobileSideBar}
                    user={user}
                    // activeItem={activeItem}
                    //handleActiveItem={(e: string) => toggleActive(e)}

                    //This index is used b/c of the json file uses '0' as the CreateNew Icon
                    index={index}
                  />
                ))
              )}
            </li>
          );
        })}
      </ul>

      <div className={`bottom-icons ${showMobileSideBar ? 'mobile' : ''}`}>
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
