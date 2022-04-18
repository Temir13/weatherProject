import React from 'react';
import PropTypes from 'prop-types';

import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

import styles from './CurrentDayDescription.module.css';

const CurrentDayDescription = ({ forecast }) => (
    <div className={styles.container}>
        <div className={styles.info}>
            {forecast.map(item => (
                <CurrentDayDescriptionItem {...item} key={item.name} />
            ))}
        </div>
    </div>
);

CurrentDayDescription.propTypes = {
    forecast: PropTypes.array,
};

export default CurrentDayDescription;