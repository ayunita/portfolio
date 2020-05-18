import React from 'react';
import styles from './Progress.module.scss';

const Progress = (props) => (
    <React.Fragment>
        <div className={styles.Wrapper} onClick={() => { return props.lastChild ? window.open(props.url) : 0 }}>
            <div className={styles.Circle}>
                {props.order}
            </div>
            <div className={styles.Text}>
                {props.children}
            </div>
        </div>
        <div className={styles.Line}></div>
    </React.Fragment>
)

export default Progress;