import React from 'react';
import PropTypes from 'prop-types';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
    <div className={styles.container}>
        <div className={`${styles.cardInner}`}>
        <div className={styles.img}></div>
            <div>
                <h2 className={styles.weekday}>{weekday}</h2>
                <p className="mb-0">{date}</p>
                <p className={styles.icon}>
                    <img src={locationIcon} className={styles.locationIcon} alt="location pin icon" />
                    <span className={styles.location}>{location}</span>
                </p>
            </div>
            <div>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;