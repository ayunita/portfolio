import React from 'react';
import styles from './Tag.module.scss';

const Tag = (props) => {
    let tag = (<div className={styles.Tag}>{props.tagName}</div>);
    if (props.type === 'hashtag') {
        tag = (<div className={styles.HashTag}>{props.tagName}</div>);
    }
    
    return (
        <React.Fragment>
            {tag}
        </React.Fragment>
    )
}


export default Tag;