import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Recaptcha from '../Recaptcha/Recaptcha';
import axios from 'axios';

const Contact = (props) => {
    const [email, setEmail] = useState({
        name: '',
        email: '',
        message: 'Hi, Yunita! How is going?',
        sent: false,
        error: ''
    });

    const [loading, setLoading] = useState(false);

    const changeHandler = e => {
        const { name, value } = e.target;
        setEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const [result, setResult] = useState(null);

    // const usePrevious = (value) => {
    //     const ref = useRef();
    //     useEffect(() => {
    //       ref.current = value;
    //     });
    //     return ref.current;
    // }

    const captchaHandler = (value) => {
        // setResult(value);
        if (value) {
            if (value.data.success && value.data.score > 0.5) {
                sendEmail(value);
            }  else {
                setEmail(prevState => ({...prevState, error: 'Are you a robot?'}));
                setLoading(false);
            } 
        }
    }

    // const prevResult = usePrevious(result);

    const jsonEscape = (str) => {
        return str.replace(/\n/g, " ").replace(/\r/g, " ").replace(/\t/g, " ");
    }

    const sendEmail = (value) => {
        if (!email.name || !email.email || !email.message) {
            setLoading(false);
            return;
        }

        let post_data = { ...email, message: jsonEscape(email.message) }
        axios.post(
            `${process.env.REACT_APP_EMAIL_API_PATH}`, post_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )
        .then(response => {
            //console.log('[Contact.js] sendEmail response', response);
            setEmail(prevState => ({
                ...prevState,
                sent: response.data.sent,
                error: response.data.error
            }))
            setLoading(false);
        })
        .catch(error => {
            //console.log('[Contact.js] sendEmail error', error);
            setEmail(prevState => ({
                ...prevState,
                sent: false,
                error: 'Something went wrong...'
            }))
            setLoading(false);
        });
    }

    return (
        <div className={styles.Wrapper}>      
            <form className={styles.ContactForm} onSubmit={e => {e.preventDefault();}}>
                <fieldset disabled={email.sent}>
                    <input id='name' name='name' type='text' placeholder='Your name here...'
                        value={email.name} onChange={changeHandler} required />
                    <input id='email' name='email' type='email' placeholder='Your email here...'
                        value={email.email} onChange={changeHandler} required />
                    <textarea name='message' cols='40'rows='5' 
                        value={email.message} onChange={changeHandler} required >               
                    </textarea>
                    <GoogleReCaptchaProvider
                        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_CLIENT_TOKEN}
                        language={process.env.REACT_APP_RECAPTCHA_LANG}>
                        <Recaptcha change={captchaHandler} load={setLoading} loading={loading} error={email.error} />
                    </GoogleReCaptchaProvider>
                </fieldset>
            </form>  
            {
                email.sent ? <div className={styles.SuccessMsg}>Sent</div> : null
            }
        </div>     
    );
}

export default Contact;