import React from 'react';
import SupTag from './SupTag/SupTag';

const SupTagFlag = (props) => {
    let flag = null;
    if (props.children) {
        flag = props.children.split('').map((char, index) => {
            let style = {'animationDelay': `${(0 + index / 10)}s`};
            return <SupTag key={`${char}_${index}`} style={style}>{char}</SupTag>
        });
    }

    return(
        <React.Fragment>
            <span aria-label={props.children} role='presentation' style={{'float': 'right'}}>
                {flag}
            </span>
        </React.Fragment>
    )
}

export default SupTagFlag;
