import React from 'react';
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f744715d-8021-44a4-b163-45aea30338b9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message)
            event.target.reset();
        } else {
            console.log("Error", data);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="decorative theme pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="email icon" />
                            <p>haque.siam99@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="phone icon" />
                            <p>01871407742</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location icon" />
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        id="name"
                        placeholder='Enter your name' 
                        name='name' 
                        required 
                    />
                    <label htmlFor="email">Your Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder='Enter your email' 
                        required 
                    />
                    <label htmlFor="message">Write your message here</label>
                    <textarea 
                        name="message" 
                        id="message"
                        rows='8' 
                        placeholder='Enter your message'
                        required
                    ></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;