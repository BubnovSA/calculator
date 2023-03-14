import React from 'react';

import styles from './style.css';

const ResultString = (props) => {
    const {
        title = '',
        value = '',
    } = props || {};

    return (
        <div className={styles.totalItem}>
            <div className={styles.totalFieldName}>
                {
                    title
                }
            </div>
            <div className={styles.totalFieldValue}>
                {
                    value
                }
            </div>
        </div>
    );
};

export default ResultString;
