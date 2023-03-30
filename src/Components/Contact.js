import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);
    const [email, setEmail] = useState("");
    
    const [message, setMessage] = useState("");

    const emailvalidation = () => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)) {
            setMessage("Enter the Valid Input")
        }
    }
    const handleonchange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="contactdiv">
                <p className="contacthead">Contact Me</p>

                <input type='text' placeholder="Full Name" />
                <br>
                </br>
      
                {/* <input type='text' name="email" value={email} onChange={handleonchange} placeholder="Email Address" {...register('email')} /> */}
                <input type='text' name="email" value={email} onChange={handleonchange} placeholder="Email Address" register={email} />
                <br>
                </br>
               
                <textarea className="comment" rows="4" cols="50" name="comment" placeholder="Enter Your Message ..." {...register('comment', { required: "Enter Your Message" })} >
                </textarea>
                <br></br>
                

                <button onClick={emailvalidation} type="submit" value="Send">Send</button>
                {message}
            </div>
        </form>


    )
}
export default Contact