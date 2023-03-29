import React from "react";
//import resume from ""
const Resume=()=>{
return(
    <div>
<button className="resume">
   
    {/* <a href="../assets/Durgadevi Baskaran resume-2023.pdf" download="Durgadevi Baskaran resume-2023.pdf"
    >Download Resume</a> */}

<a href={process.env.PUBLIC_URL + "/assets/Durgadevi Baskaran resume-2023.pdf"} download  >Download Resume</a>
</button>


    </div>
)
}

export default Resume;