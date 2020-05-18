import React from 'react';
import styles from './SupTag.module.scss';

const SupTag = (props) => (
    <React.Fragment>
        <span className={styles.SupTag} style={props.style}>{props.children}</span>
    </React.Fragment>
)

export default SupTag;