import React from 'react';
import styles from './styles.css';

const imgPath = '../../../assets/icons/';

// プレゼンテーショナルコンポーネント
export const IconPresenter = ({
    iconName,
    alt='',
    height=20,
    width=20,
    ...props
}) => (
    <img 
        src={`${process.env.PUBLIC_URL}/${iconName}.svg`}
        alt={alt}
        height={height}
        width={width}
        {...props}
    />
);

// コンテナコンポーネント
export const IconContainer = ({
    presenter,
    onClick,
    className='',
    ...props
}) => {
    if(onClick) className += ` ${styles.clickable}`;
    return presenter({onClick, className, ...props});
};

//  アイコンファクトリー関数
//  引数: アイコンのファイル名
export const iconFactory = iconName => props => (
    <IconContainer
         presenter={presenterProps => <IconPresenter {...presenterProps} />}
        {...{iconName, ...props}}
    />
);


export const LogoIcon = iconFactory('logo');
export default LogoIcon;