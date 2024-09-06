import { LightMode } from '@chakra-ui/react';
import './MyWork.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../Data.js'

var settings = {
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };


function MyWork(){
    return(
        <>
        <section class="mywork">
            <h1>MY WORK</h1>
            <br/>
            <div className='slide-Card'>
                <div className='card'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='card-Inside'>
                            <div className='card-Img'>
                                <img src={d.img} />
                            </div>

                            <div className='card-dis'>
                                <p>{d.name}</p>
                                <p>{d.dis}</p>
                                <a href={d.link}  target="_blank" >
                                    <button className='card-button'>GITHUB</button>
                                </a>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        <br/>
        </section>
        </>
    );
}

export default MyWork;