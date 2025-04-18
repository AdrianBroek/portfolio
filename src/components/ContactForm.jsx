import React, {useState, useRef, useEffect, useContext} from "react";
import StateContext from "../components/StateContext";
// react hook form zod
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// mui
import { LoadingButton } from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// email handling
import emailjs from '@emailjs/browser';
// scroll
import { useInView } from 'react-intersection-observer';
// icons
import email from '../images/icons/email.png'
import phone from '../images/icons/telephone.png'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required"})
    .email('Invalid email address'),
  name: z
    .string()
    .min(2, {message: "Name must be at least 2 characters"}),
  content: z
    .string()
    .min(5, {message: "Message must be at least 5 characters"}),
  subject: z
    .string()
    .min(2, {message: "Subject must be at least 2 characters"}),
  agreed: z
    .literal(true, {
      errorMap: () => ({ message: "You must give your personal data consent"})
    })
});

const ContactForm = () => {
  const {activeScroll, setActiveScroll} = useContext(StateContext)
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
    console.log(e)
      if (e.target.value == 0) {
          e.target.parentNode.children[1].children[0].style.top='30px'
          e.target.parentNode.children[1].children[0].style.fontSize='1.5rem'

      } else {
          e.target.parentNode.children[1].children[0].style.top='5px'
          e.target.parentNode.children[1].children[0].style.fontSize='1.1rem'
      }
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
  const [open, setOpen] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful},
  } = useForm({
    resolver: zodResolver(schema),
  });

  // API MAIL JS
  const api_key = process.env.REACT_APP_MAIL_KEY
  const service_key = process.env.REACT_APP_SERVICE_ID
  const template_key = process.env.REACT_APP_TEMPLATE_ID
  

  const sendEmail = async () => {
    try {
      const response = await emailjs.sendForm(service_key, template_key, form.current, api_key)
      const result = response
      setOpen(true)
      // console.log(result)
    } catch (er) {
      // console.error(er)
      setOpen(true)
        setError("root", { 
          type: "manual", 
          message: `Something went wrong. Status: ${er.status}. Error text: ${er.text}`
        })
    }
    form.current.reset();
  };

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
      <form onSubmit={handleSubmit(sendEmail)} ref={form} noValidate>
        <div className="inputContainer mail">
          <input onChange={mailChange} {...register("email")} type="email" placeholder="Email" name="email" id="email" formNoValidate={false}/>
          {errors.email && (
            <div><p className="error">{errors.email.message}</p></div>
          )}
          <label className="inputLabel">
            <span className="inputSpan">Email</span>
          </label>
        </div>

        <div className="inputContainer subject">
          <input onChange={mailChange} {...register("subject")} type="text" placeholder="Subject" name="subject" id="subject"/>
          {errors.subject && (
            <div><p className="error">{errors.subject.message}</p></div>
          )}
          <label className="inputLabel">
            <span className="inputSpan">Subject</span>
          </label>
        </div>
        
        <div className="inputContainer name">
          <input onChange={mailChange} {...register("name")} type="text" name="name" id="name" placeholder="Company/Your name etc." />
          <label className="inputLabel">
            <span className="inputSpan">Company name</span>
          </label>
          {errors.name && (
            <div><p className="error">{errors.name.message}</p></div>
          )}
        </div>

        <div className="inputContainer name">
          <textarea {...register("content")} placeholder="Write your message" name="content" id="content"/>
          <label className="inputLabel">
            <span className="inputSpan">Message</span>
          </label>
          {errors.content && (
            <div><p className="error">{errors.content.message}</p></div>
          )}
        </div>

        <div className="agreedment">
            <Checkbox {...register("agreed")}/>
            <span>I consent to processing of my personal data for the contact purposes.</span>
        </div>
        {errors.agreed && (
              <div><p className="error">{errors.agreed.message}</p></div>
        )}

        <div className="btnContainer">
          <LoadingButton
            type="submit"
            size="large"
            endIcon={<SendIcon />}
            loading={isSubmitting}
            loadingPosition="end"
            variant="contained"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </LoadingButton>
        </div>

        {isSubmitSuccessful && (
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert severity="success" sx={{ width: '100%' }}>
                  Message sent successfully!
              </Alert>
          </Snackbar>
        )}
        {errors.root && (
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>               
              <Alert severity="error" sx={{ width: '100%' }}>
                {errors.root.message}
              </Alert>
          </Snackbar>
        )}
      </form>
    </section>
  );
};

export default ContactForm;