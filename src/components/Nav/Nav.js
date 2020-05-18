import React from 'react';
import styles from './Nav.module.scss';
import Scrollspy from 'react-scrollspy';

const Nav = (props) => (
    <nav>
        <Scrollspy items={ ['about', 'projects', 'contact'] } currentClassName={styles.CurrentNav}>
            <li><a href='#about'>About me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </Scrollspy>
    </nav>
)

export default Nav;