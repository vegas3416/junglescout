import React from 'react';
import './subMenu.scss';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppEvents } from '../../data/events';
import { NavLocation } from '../../data/reducers/homeHub';

interface SMProps extends RouteComponentProps<any> {
  data: Array<any>;
  parentTitle?: string;
  advancedMenu?: Boolean;
  activeItem?: NavLocation;
}

const SubMenu: React.FC<SMProps> = props => {
  const { data, parentTitle, advancedMenu, activeItem } = props;
  const dispatch = useDispatch();

  const handleActiveItem = (item: string) => {
    if (!advancedMenu) {
      dispatch({
        type: AppEvents.SET_ACTIVE_ITEM,
        payload: { main: parentTitle, sub: item }
      });
    }
  };

  return (
    <ul className={`subMenu ${advancedMenu ? 'advanced' : ''}`}>
      {data.map((item, index) => {
        return (
          <li
            key={index}
            className={`subMenu-item ${
              activeItem && activeItem.sub && item.title === activeItem.sub
                ? 'active'
                : ''
            }`}
            onClick={e => {
              e.stopPropagation();
              handleActiveItem(item.title);
              props.history.push(item.page);
            }}
          >
            {/* <Link
              className='subMenu-item-link'
              to='/viewCandidates'
              aria-label={!advancedMenu ? item : ''}
            >
              {advancedMenu && (
                <img
                  className='logo'
                  src={require(`../../images/${item.logo}`)}
                />
              )}
              <span className={`label ${advancedMenu ? 'advanced' : ''}`}>
                {advancedMenu ? item.title : item}
              </span>
            </Link> */}
            <div className='subMenu-item-link'>
              {advancedMenu && (
                <img
                  className='logo'
                  src={require(`../../images/${item.logo}`)}
                />
              )}
              <span className={`label ${advancedMenu ? 'advanced' : ''}  `}>
                {item.title}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(SubMenu);
