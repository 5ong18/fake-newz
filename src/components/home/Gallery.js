import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import shuffleArray from '../../functions';

const settings = {
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    dots: true,
    infinite: true,
    pauseOnHover: false,
    slidesToScroll: 1,
    speed: 3000,
    swipe: true,
    swipeToSlide: true,
    fade: false
    /* slidesToShow: 1, */
}

const showGallery = ({latestGallery}) => {
    if (latestGallery) {
        return (
            <Slider {...settings}>
                {shuffleArray(latestGallery).map((item) => {
                    return (
                        <Link to={`/galleries/${item.id}`} key={item.id} className="slider-item">
                            <div className="image" style={{background: `url(/assets/img/galleries/${item.images[0].img})`}}>
                                <h3>{item.artist}</h3>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}

const Gallery = (props) => {
    console.log(props);
    return (
        <div className="home-gallery">
        <h2>Gallery</h2>
            {showGallery(props)}
        </div>
    )
}

export default Gallery;