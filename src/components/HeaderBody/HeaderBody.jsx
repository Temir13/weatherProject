import React from 'react';

import styles from './HeaderBody.module.css';

const HeaderBody = () => (
    <h1 className={styles.heading}>
        <span className={styles.light}></span> Weather
    </h1>
);

export default HeaderBody;