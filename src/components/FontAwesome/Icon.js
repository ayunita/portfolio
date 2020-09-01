import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faFilePrescription, faWeight, faLaptopCode, faCoffee, faStickyNote, faPalette } from '@fortawesome/free-solid-svg-icons';

library.add(
    fab,
    faDatabase,
    faFilePrescription,
    faWeight,
    faLaptopCode,   
    faCoffee,
    faStickyNote,
    faPalette);

const Icon = (props) => (
    <div>
        <a href={props.url} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={props.name} />
        </a>
    </div>
)

export default Icon;