import React, {useState, useEffect, useRef} from 'react';
import styles from './Project.module.scss';
import Tags from '../../Tags/Tags';
import SupTagFlag from '../../Tags/SupTagFlag';
import ProgressBar from '../../ProgressBar/ProgressBar';
import Icon from '../../FontAwesome/Icon';

const Project = (props) => {
    const [isContentVisible, setContentVisible] = useState(false);
    const [BoxStyle, setBoxStyle] = useState([styles.Box]);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }

    const prevVisible = usePrevious(isContentVisible);
    useEffect(() => {
        if (prevVisible !== isContentVisible) {
            if (isContentVisible) {
                setBoxStyle([styles.Box, styles.Active]);
            } else {
                setBoxStyle([styles.Box]);
            }          
        }
      }, [prevVisible, isContentVisible, BoxStyle]);

    return (
        <React.Fragment>
            <div className={BoxStyle.join(' ')}>
                <div className={styles.Image}>
                    <Icon name={props.image} url={props.url} />
                </div>
                <div className={styles.Title} onClick={() => setContentVisible(a => !a)}>
                    <SupTagFlag>{props.type}</SupTagFlag>     
                    <h1>{props.title}</h1>       
                    <Tags tags={props.tags} tagType='hashtag'/>
                </div>
                <div className={styles.Tags}>
                    <Tags tags={props.tech} tagType='buttontag' />
                </div>
            </div>
            { isContentVisible ? 
                (<div className={styles.Content}>
                    <div className={styles.Text}>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.Text}>
                        <h2>Progress Meter</h2>
                    </div>
                    <ProgressBar url={props.url} progress={Object.entries(props.progress)} />
                </div>) : null
            }
        </React.Fragment>
    )
}

export default Project;