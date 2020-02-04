import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import MenuDropdownItem from './menuDropdownItem';
import './menuItem.scss';
import classNames from 'classnames';

const MenuItem = (props) => {
    const { navItem, handleActive, isActive, activeItem, navSetup, updatePageToShow } = props;
    const hasDropdown = navItem.dropdownItems !== undefined;
    const [isOpen, setMenuState] = useState(false);

    const node = useRef();

    const dropdownClassNames = classNames('menuItem', {
        'has-dropdown': hasDropdown,
        isOpen: isOpen && hasDropdown && navSetup !== 'leftNav',
    });

    return (
        <ul className={dropdownClassNames}>
            <li
                data-itemname={navItem.displayName}
                className={`menuItem-text menuItem-parent ${isActive ? 'active' : ''} ${
                    isOpen && hasDropdown ? 'isViewing' : ''
                }`}
                ref={node}
                onClick={(e) => {
                    if (!hasDropdown) {
                        console.log(`Event: ${navItem.navItem}`);
                        console.log();
                        handleActive(navItem.navItem);
                        if (navItem.link !== null) {
                            updatePageToShow(navItem.link);
                        }
                    }
                }}
            >
                <span className="displayName">{navItem.displayName} </span>
            </li>
            {navItem.menu && (
                <li className={`menuItem-list ${activeItem === navItem.navItem ? 'isOpen' : ''}`}>
                    <ul className="menuItem-list-items">
                        {navItem.menu &&
                            navItem.navItem === activeItem &&
                            navItem.menu.map((item, index) => {
                                return (
                                    <MenuDropdownItem
                                        key={`${item.name}-${index}`}
                                        parentName={item.displayName}
                                        displayText={
                                            navItem.navItem === item.type ? item.displayName : null
                                        }
                                        disabled={item.disabled}
                                        activeItem={activeItem}
                                        link={item.href}
                                        setMenuState={setMenuState}
                                        handleActive={handleActive}
                                        navItem={navItem.navItem === item.type ? item : null}
                                        isOpen={isOpen}
                                        navSetup={navSetup}
                                        updatePageToShow={updatePageToShow}
                                    />
                                );
                            })}
                    </ul>
                </li>
            )}
        </ul>
    );
};

export default withRouter(MenuItem);
