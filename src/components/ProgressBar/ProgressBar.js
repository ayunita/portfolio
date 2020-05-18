import React from 'react';
import styles from './ProgressBar.module.scss';
import Progress from './Progress/Progress';

const ProgressBar = (props) => {
    const progressBar = props.progress.map((e, index) => {
        const order = e[0];
        const prog = e[1];

        let lastChild = false;
        if (index === props.progress.length-1) lastChild = true;

        return (
            <Progress key={order} order={order} url={props.url} lastChild={lastChild}>
                {prog}
            </Progress>
        )
    });
    return (
        <div className={styles.ProgressBar}>
            {progressBar}
        </div>
    );
}

export default ProgressBar;