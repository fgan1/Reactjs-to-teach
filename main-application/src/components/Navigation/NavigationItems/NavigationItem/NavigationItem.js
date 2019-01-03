import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const navigationItem = ( props ) => (
    <li className={cx('NavigationItem')}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={cx('active')}>{props.children}</NavLink>
    </li>
);

export default navigationItem;