import { LightMode } from '@chakra-ui/react';
import './MyWork.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../Data.jsx'

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

var settings = {
    centerPadding: "60px",
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    speed: 500,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
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
                                <div className='card-status'>
                                <h1>status : {d.status}</h1>
                                    <img className='card-img-in' src={d.img} />
                                </div>
                            </div>

                            <div className='card-dis'>
                                <p className='card-Name'><h1>{d.name}</h1></p>
                                <p className='card-disc'>{d.dis}</p>
                                <a href={d.link}  target="_blank" >
                                    <button className='card-button'>LINK</button>
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