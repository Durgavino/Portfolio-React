import React from "react";

const Contact = () => {
    return (

        <div>
            <p>Contact Me</p>

            <input type='text' placeholder="Full Name" />
            <br>
            </br>

            <input type='text' placeholder="Email Address" />
            <br>
            </br>

            <textarea rows="4" cols="50" name="comment" placeholder="Enter Your Message ..."  >
            </textarea>
<br></br>

            <button type="submit" value="Send">Send</button>
            <h1>The button form attribute</h1>
        </div>


    )
}
export default Contact