import React from 'react';
import Heading from '../../atoms/Heading/index';
import LogoIcon from '../../atoms/Icon/index';

const Logo = () => (
    <div className="logo">
        <LogoIcon alt={'logo'} className="" />
        <Heading className="" level={1}>Friend</Heading>
    </div>
);

export default Logo;