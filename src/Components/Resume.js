import React from "react";
//import resume from ""
const Resume=()=>{
return(
    <div class="resumediv">
<p className="resume">
   
<a className="resume" href={process.env.PUBLIC_URL + "/assets/Durgadevi Baskaran resume-2023.pdf"} download  >Download Resume</a>
</p>
<h1>Developer Proficiencies</h1>
{/* <ul class="resumeprof">
   <li>Html</li> 
   <li>css</li> 
   <li>Javascript</li>
   <li>NodeJS</li>
   <li>ExpressJS</li>
   <li>MySQL</li>
   <li>MongoDB</li>
   <li>React</li>
   <li>API</li>
</ul> */}
<ol className="resumeprof">
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