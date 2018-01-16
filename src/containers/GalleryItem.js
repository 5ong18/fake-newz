import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';

// likes counter
import Counter from './LikesCounter';

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

class GalleryItem extends Component {

    componentDidMount() {
        this.props.selectedGallery(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearSelectedGallery();
    }

    renderSlider = ({selected}) => {
        if (selected) {
            const gallery = selected[0]

            return (
                <div className="slide-item">
                    <h3>The best of {gallery.artist}</h3>
                    <Slider {...settings}>
                        {gallery.images.map((item, index) => {
                            return (
                                <div key={index} className="slide-item">
                                    <div>
                                        <div className="image" style={{background: `url(/assets/img/galleries/${item.img})`}}></div>
                                        <div className="description">
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    <div>
                        <Counter section="galleries" type="HANDLE_LIKES_GALLERY" galleryId={gallery.id} likes={gallery.likes[0]} dislikes={gallery.likes[1]}/>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="slide-item-wrap">
                {this.renderSlider(this.props.gallery)}
            </div>
        );
    }
}

function mapStateToProps (state) {
    console.log(state)
    return {
        gallery: state.gallery
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({selectedGallery, clearSelectedGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);