import React from "react";
import Bangé from '../images/Bangé.PNG';
import codequiz from '../images/codequiz.png';
import htmlchallenge from '../images/htmlchallenge.png';
import weather from '../images/weather.png';
import workdayscheduler from '../images/workdayscheduler.png';
import texteditor from '../images/texteditor.png';

const Portfolio = () => {
    return (
        <>


            <a href=' https://durgavino.github.io/Banger-FoodandMovieapp/index.html' target="_blank" rel='noreferrer'>
                <img src={Bangé} alt="Bangé" style={{
                    width
                        : '50%', height: 'auto'
                }} />
            </a>
            <a href='https://github.com/Durgavino/Banger-FoodandMovieapp'>Github</a>



            <a href='https://durgavino.github.io/weatherapi-UsinghtmlcssjsAPI/' target="_blank" rel='noreferrer'>
                <img src={weather} alt="weather" style={{
                    width
                        : '50%', height: 'auto'
                }} />
            </a>
            <a href='https://github.com/Durgavino/weatherapi-UsinghtmlcssjsAPI'>Github</a>

            <a href='https://durgavino.github.io/htmlchallenge/' target="_blank" rel='noreferrer'>
                <img src={htmlchallenge} alt="htmlchallenge" style={{
                    width
                        : '50%', height: 'auto'
                }} />
            </a>
            <a href='https://github.com/Durgavino/htmlchallenge'>Github</a>

            <a href='https://guarded-dusk-61621.herokuapp.com/' target="_blank" rel='noreferrer'>
                <img src={workdayscheduler} alt="workdayscheduler" style={{
                    width
                        : '50%', height: 'auto'
                }} />
            </a>
            <a href='https://github.com/Durgavino/workdayplanner-usinghtmlcssjs'>Github</a>

            <a href='https://guarded-dusk-61621.herokuapp.com/' target="_blank" rel='noreferrer'>
                <img src={texteditor} alt="texteditor" style={{
                    width
                        : '50%', height: 'auto'
                }} />
            </a>
            <a href='https://github.com/Durgavino/Progressive-Web-Applications-PWA-Text-Editor'>Github</a>

            <a href='https://durgavino.github.io/codequizchallengewithtimer-usinghtmlcssjs/' target="_blank" rel='noreferrer'>
                <img src={codequiz} alt="codequiz" style={{
                    width
                        : '50%', height: 'auto'
                }} />
            </a>
            <a href='https://github.com/Durgavino/codequizchallengewithtimer-usinghtmlcssjs'>Github</a>
        </>
    )
}
export default Portfolio