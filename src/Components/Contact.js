import React from "react";

const Contact = () => {
    return (

        <div>
            <p>Contact Me</p>
            <label for="fname">Name:</label><br></br>
            <input type="text" id="fname" name="fname" value="">
            </input><br></br>
            <label for="email" pattern=".+@globex\.com" size="30" required>Enter Your Email Address:</label><br></br>
            <input type="text" id="email" name="email" value="">
            </input><br></br>

            <textarea rows="4" cols="50" name="comment" form="usrform">
                Enter the Message...</textarea>


            <button type="submit" value="Send">Send</button>
            <h1>The button form attribute</h1>
</div>


    )
}
export default Contact