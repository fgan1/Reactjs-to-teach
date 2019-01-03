import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    const navItemConfig = <NavigationItem link="/config">Configuration</NavigationItem>;
    const navItemOrder = props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null;
    const navItemAuth = !props.isAuthenticated
        ? <NavigationItem link="/auth">Authenticate</NavigationItem>
        : <NavigationItem link="/logout">Logout</NavigationItem>;

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            {navItemConfig}
            {navItemOrder}
            {navItemAuth}
        </ul>
    );
};

export default navigationItems;