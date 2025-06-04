import { useEffect, useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./styles.css"; 

export default function Index() {
  const form = useRef(null);
  const contactWrapper = useRef(null);
  const [isSendingMsg, setIsSendingMsg] = useState(false);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isMsgNotSent, setIsMsgNotSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingMsg(true);

    emailjs
      .sendForm(
        "service_pji78yp",
        "template_t5i64ih",
        form.current,
        "XuRBbkZ5LQxg-_J1g"
      )
      .then(
        () => {
          e.target.reset();
          setIsSendingMsg(false);
          setIsMsgSent(true);
          setTimeout(() => {
            setIsMsgSent(false);
          }, 3000);
        },
        (error) => {
          setIsMsgNotSent(true);
          console.log(error.text);
          setTimeout(() => {
            setIsMsgNotSent(false);
          }, 3000);
        }
      );

    setIsMsgSent(false);
  };

  return (
    <div ref={contactWrapper} className="contact-wrapper">
      <div>
        <div className="contact-item">
          <p>visit us</p>
          <p>
            Kazanchis, Palace Commercial Center 1st Floor
            <br /> Addis Abeba, Ethiopia
          </p>
        </div>
        <div className="contact-item">
          <p>call us</p>
          <p>
            Mon-Fri from 9AM to 5PM <br />
            +251 1 557 34 58 / +251 911 20 20 81
          </p>
        </div>
        <div className="contact-item">
          <p>chat to us</p>
          <a href="mailto:info@asaitaproperties.com">
            info@rainbowstacomp.com
          </a>
          <br />
        </div>
        <div className="contact-item">
          <p>social media</p>
          <div className="socials-wrapper">
            <a
              href="https://www.facebook.com/profile.php?id=61559384081074"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/asaita00/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/Asaita00"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="user-info">
          <div className="form-group">
            <label htmlFor="user_name">name</label>
            <input id="user_name" type="text" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">email</label>
            <input id="user_email" type="text" name="user_email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">subject</label>
          <input id="subject" type="text" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_message">message</label>
          <textarea
            id="user_message"
            name="user_message"
            rows={1}
            cols={45}
            required
          ></textarea>
        </div>
        <button className="button">send message</button>
      </form>
      {(isSendingMsg || isMsgSent || isMsgNotSent) && (
        <div className="snackbar">
          <div>
            {isSendingMsg && "Sending message..."}
            {isMsgSent && "Message sent!"}
            {isMsgNotSent && "Message not sent!"}
          </div>
        </div>
      )}
    </div>
  );
}
