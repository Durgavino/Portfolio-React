import React from "react";
import Bangé from '../images/Bangé.PNG';
import codequiz from '../images/codequiz.png';
import htmlchallenge from '../images/htmlchallenge.png';
import weather from '../images/weather.png';
import workdayscheduler from '../images/workdayscheduler.png';
import texteditor from '../images/texteditor.png';

const Portfolio =()=>{
return(
    <>
    <img src={Bangé} alt="Bangé" />
    <img src={weather} alt="weather" />
    <img src={htmlchallenge} alt="htmlchallenge" />
    <img src={workdayscheduler} alt="workdayscheduler" />
    <img src={texteditor} alt="texteditor" />
    <img src={codequiz} alt="codequiz" />
    </>
)
}
export default Portfolio