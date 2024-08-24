import { LightMode } from '@chakra-ui/react';
import './MyWork.css'
import GitHubCalendar from 'react-github-calendar';

function MyWork(){
    return(
        <>
        <section class="mywork">
            <div className='github-Calender'>
                <GitHubCalendar username="thwdog" />
            </div>
        </section>
        </>
    );
}

export default MyWork;