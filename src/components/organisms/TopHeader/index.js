/* eslint-disable import/first */
import React from 'react';
import styles from './styles.css';
import Heading from '../../atoms/Heading/index';
import Header from '../../molecules/Header/index';

const TopHeader = () => (
    <Header className={styles.header}>
        <Heading className={styles.heading}>Friend</Heading>
    </Header>
);

export default TopHeader;