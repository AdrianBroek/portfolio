import React, {useRef} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const api_key = process.env.REACT_APP_MAIL_KEY
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lszkfl4', 'template_o44dgag', form.current, api_key)
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <section>
            <form ref={form} onSubmit={sendEmail}>
            <input minLength='3' required type="text" name="user_name" id="user_name" />
            <input required type="email" name="user_email" id="user_email"/>
            <input required type="checkbox"/>
            <textarea maxLength="1000" minLength='20' placeholder="Wiadomość" required name="message" />
            <input 
                            type="submit" 
                            value="">
                        </input>
            </form>
        </section>
    )

}

export default Contact