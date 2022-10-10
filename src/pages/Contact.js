import React, {useEffect, useRef, useState, useContext} from "react";
import emailjs from '@emailjs/browser';

import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";
// icons
import paperplane from '../images/icons/paper-plane.png'
import email from '../images/icons/email.png'
import phone from '../images/icons/telephone.png'
// mui
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';


const Contact = () => {
    const {activeScroll, setActiveScroll} = useContext(StateContext)
    const [text, setText] = useState()
    const [text2, setText2] = useState()
    const { ref, inView,  } = useInView({
        threshold: 0,
    });

    useEffect(()=>{
        if(inView){
            const d = document.getElementById("aboutMe");
            const topPos = d.offsetTop;
            // console.log(topPos)
            setActiveScroll('contact')
            // console.log(activeScroll)
        }
    }, [inView])

    function mailChange(e) {
        console.log(e.target.value)
        if (e.target.value == 0) {
            e.target.parentNode.children[1].children[0].style.top='30px'
            e.target.parentNode.children[1].children[0].style.fontSize='1.5rem'

        } else {
            e.target.parentNode.children[1].children[0].style.top='5px'
            e.target.parentNode.children[1].children[0].style.fontSize='1.1rem'
        }
    }

    useEffect(()=> {
        setText2()
    }, [text2])

    // button
    const [loading, setLoading] = useState(false);
    function handleClick() {

        setLoading(true);
        console.log('click')
    }

    // form
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
        <section id="contact" ref={ref} className="contact container style">
            <h1 className="name">Contact me</h1>
            <aside>
                <div>
                    <img src={email} />
                    <p><a href='mailto: Adrianbro96@gmail.com'>Adrianbro96@gmail.com</a></p>
                </div>
                <div>
                    <img src={phone} />
                    <p><a href="callto: +48664824854">+48 664 824 854</a></p>   
                </div>
            </aside>
            <form ref={form} onSubmit={sendEmail}>
                <div className="inputContainer name">
                    <input minLength='3' required type="text" name="user_name" id="user_name" />
                    <label className="inputLabel">
                        <span className="inputSpan">Name</span>
                    </label>
                </div>
                
                <div className="inputContainer mail">
                    <input onChange={mailChange} required type="email" name="user_email" id="user_email"/>
                    <label className="inputLabel">
                        <span className="inputSpan">Email</span>
                    </label>
                </div>
                <div className="agreedment">
                    <Checkbox required />
                    <span>I consent to processing of my personal data by Adrian Brożek for the contact purposes.</span>
                </div>
                <div className="inputContainer">
                    <textarea maxLength="1000" minLength='10' placeholder="Type a message" required name="message" />
                </div>
                <div className="btnContainer">
                    <LoadingButton
                        type="submit"
                        size="large"
                        // onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                    Send
                    </LoadingButton>
                </div>
            </form>
        </section>
    )

}

export default Contact