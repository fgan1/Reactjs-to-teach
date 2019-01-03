import React, { Component } from 'react';

import styles from './CompanyName.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const companyName = (props) => {
    return (
        <h2 className={cx('CompanyName')}>{props.name}</h2>
    )
};

export default companyName;