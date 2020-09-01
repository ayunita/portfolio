import React from 'react';
import styles from './About.module.scss';
import Icon from '../FontAwesome/Icon';

const About = (props) => (
    <div className={styles.About}>
        <div>
            <p>Hello! My name is Yunita. I am a Software Developer and a UI/UX Enthusiast from Edmonton, Canada.</p>
            <p>I did my diploma in Computer Programming from Humber College in 2013 and my undergraduate degree in Computing Science from University of Alberta in 2018.</p>
            <p>I have 4 years experience in developing software for healthcare research, such as patient education tool, data collection tool, and clinician portal.</p>
            <p>I enjoy designing and building small to large scale web apps with C#, ASP.NET, JavaScript, and (recently) React.</p>
            <p>Want to know how I may help your project? Check out my <a href='#projects'>Projects</a>.</p>
        </div>
        
        <div style={{'textAlign': 'center'}}>
            <p>I would love to work with (but not limited to):</p>
            <div className={styles.Interest}>
                <Icon name={['fab', 'html5']} />
                <Icon name={['fab', 'sass']} />
                <Icon name={['fab', 'js']} />
                <Icon name={['fab', 'react']} />
                <img alt='c sharp logo' src="data:image/png;base64,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"></img>
                <Icon name={['fab', 'php']} />
                <Icon name={['fab', 'java']} />
                <Icon name={['fab', 'python']} />
                <Icon name='database' />
                <Icon name={['fab', 'git-square']} />
                {/* <img src={myImage} alt="Yunita's icon" /> */}
            </div>
        </div>
    </div>
)

export default About;