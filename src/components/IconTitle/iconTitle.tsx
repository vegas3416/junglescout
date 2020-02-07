import React, { useState, useEffect } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import './iconTitle.scss';
import SubMenu from '../SubMenu/subMenu';
import { pageLocation } from '../../utilities/helperFunctions';

//Fake Data
import subMenu from '../SideBar/sideBar.json';

//Bad


interface IconProp extends RouteComponentProps<any> {
  data: IconData;
  isOpen?: Boolean;
  handleActiveItem?: Function;
  index: number;
  side: Boolean;
}

interface IconData {
  logo: String;
  title: String;
}

const IconTitle: React.FC<IconProp> = props => {
  const [visible, setVisible] = useState(false);

  const { data, isOpen, handleActiveItem, index, side } = props;

  const nextPage = () => {
    return props.history.push('/pagetwo');
  };

  return (
    <div
      className='iconTitle'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => {
        handleActiveItem(data.title);
        nextPage();
      }}
    >
      <img className='icon' src={require(`../../images/${data.logo}`)} />

      <div className='iconTitle-title'>
        <span className={`inner ${isOpen ? 'open' : ''}`}>{data.title}</span>
      </div>

      <div className='iconTitleMenu'>
        {visible && side && <SubMenu data={subMenu[index].submenu} />}
      </div>
    </div>
  );
};

export default withRouter(IconTitle);
