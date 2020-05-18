import React from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

const Recaptcha = (props) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    const clickHandler = async () => {    
        if (!executeRecaptcha) {
            return;
        }

        const token = await executeRecaptcha('homepage');

        const secret = process.env.REACT_APP_RECAPTCHA_SERVER_TOKEN;
        const result = await verifyCaptchaHandler(secret, token);
        
        if (result) {
            //console.log('[Recaptcha.js] result', result);
        }
    };

    const verifyCaptchaHandler = async (secret, response) => {
        props.load(true);
        // console.log('[Recaptcha.js] receive response', response);
        axios.post(
            `https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}`,
            {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
            },
        )
        .then(response => {
            //console.log('[Recaptcha.js] response', response);
            props.change(response);
        })
        .catch(error => {
            //console.log('[Recaptcha.js] error', error);
            props.load(false);     
        });
    }

    return (
        <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-end'}}>
            <small>This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service</a> apply.</small>
            { props.error ? <span style={{'color': 'red'}}>{props.error}</span> : '' }
            <button type='submit' onClick={clickHandler}>
               { props.loading ? 'Loading...' : 'Submit' }
            </button>
        </div>
    );
};

export default Recaptcha;