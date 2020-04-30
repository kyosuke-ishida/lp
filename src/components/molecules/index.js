/* eslint-disable import/first */
import React from 'react';
import styles from './styles.css';

export const  Header = ({
    children,
    className,
    ...props
}) => (
<header className={[styles.header]}>{children}</header>
);

export default Header;