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
<h1>Developer Proficiencies</h1>
<ol>
   <li>Html</li> 
   <li>css</li> 
   <li>Javascript</li>
   <li>NodeJS</li>
   <li>ExpressJS</li>
   <li>MySQL</li>
   <li>MongoDB</li>
   <li>React</li>
   <li>API</li>
</ol>
    </div>
)
}

export default Resume;