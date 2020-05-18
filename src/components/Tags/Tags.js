import React from 'react';
import Tag from './Tag/Tag';

const Tags = (props) => {
    const tags = props.tags.map((t,index) => (
        <Tag key={index} type={props.tagType} tagName={t} />
    ));
    return (
        <React.Fragment>
            {tags}
        </React.Fragment>
    );
}

export default Tags;