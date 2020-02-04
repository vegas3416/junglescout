import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';

const MenuDropdownItem = (props) => {
    const { displayText, navItem, parentName, updatePageToShow } = props;
    const [openState, setOpenState] = useState(false);
    const hasDropdownItems = navItem && navItem.dropdownItems;

    const node = useRef();

    const handleMouseOver = () => {
        setOpenState(true);
    };

    const handleMouseOut = () => {
        setOpenState(false);
    };

    return (
        <li
            className={`menuItem-dropdown-item 
             ${hasDropdownItems ? 'hasDropdown' : ''} ${openState ? 'isOpen' : ''}`}
            onMouseOver={() => handleMouseOver()}
            onMouseLeave={() => handleMouseOut()}
        >
            <span ref={node} data-itemname={parentName} className="menuItem-dropdown-item-text">
                {displayText}
            </span>

            {hasDropdownItems && (
                <ul>
                    {navItem.dropdownItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                data-itemname={parentName}
                                className="menuItem-dropdown-item-nestedItem"
                                onClick={(e) => {
                                    updatePageToShow(item.href);
                                }}
                            >
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
};

export default withRouter(MenuDropdownItem);
