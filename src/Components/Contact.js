import React from "react";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
        const handleRegistration = (data) => console.log(data);

    return (
<form onSubmit={handleSubmit(handleRegistration)}>
        <div>
            <p>Contact Me</p>

            <input type='text' placeholder="Full Name" />
            <br>
            </br>

            <input type='text' name="email" placeholder="Email Address" {...register('email')}/>
            <br>
            </br>

            <textarea rows="4" cols="50" name="comment" placeholder="Enter Your Message ..." {...register('email',{required:"Enter Your Message"})} >
            </textarea>
<br></br>

            <button type="submit" value="Send">Send</button>
            <h1>The button form attribute</h1>
        </div>
        </form>


    )
}
export default Contact