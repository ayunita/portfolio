import React from 'react';
import styles from './Loading.module.scss';

const Loading = ({children}) => {
    let load = null;
    if (children) {
        let dot_count = 0;
        load = children.split('').map((char, index) =>{
            let style =  {'animationDelay': '0'};
            let classN = '';
            if (char === '.') {
                classN = styles.Dot;
                style = {'animationDelay': `${(++dot_count / 10)}s`};
            }
             
            return (
                <span key={`${char}_${index}`} 
                    className={classN}
                    style={style}>
                        {char}
                </span>
            )
        });
    }
    return (
        <div className={styles.Wrapper}>
            {load}
        </div>
    );
}

export default Loading;