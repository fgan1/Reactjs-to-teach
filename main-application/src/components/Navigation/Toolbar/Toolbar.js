import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import CompanyName from '../../CompanyName/CompanyName'
import styles from './Toolbar.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const toolbar = ( props ) => (
    <header className={cx('Toolbar')}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={cx('Logo')}>
            <Logo />
        </div>
        <div>
            <CompanyName name='MakeMyBurguer'></CompanyName>
        </div>        
        <nav className={cx('DesktopOnly')}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;