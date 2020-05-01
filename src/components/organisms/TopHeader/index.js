/* eslint-disable import/first */
import React from 'react';
import styles from './styles.css';
import Heading from '../../atoms/Heading/index';
import Header from '../../molecules/Header/index';
import Logo from '../../molecules/Logo/index';

const TopHeader = () => (
    <Header>
        <Logo />
        <Heading className="heading" level={1}>考え方で繋がろう</Heading>
    </Header>
);

export default TopHeader;