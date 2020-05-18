import React from 'react';
import Project from './Project/Project';
import projectList from '../../data/projects.json';

const Projects = (props) => {
    const data = projectList.map(p => (
        <Project key={p.slug} 
                title={p.title} 
                description={p.description}
                image={p.image}
                url={p.url}
                tags={p.tags}
                tech={p.tech}
                type={p.type}
                progress={p.progress} />
    ));

    return (
        <React.Fragment>
            {data}
        </React.Fragment>
    );
}

export default Projects;