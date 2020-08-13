import React from 'react';
import Title from '../title/Title';
import Slider from "react-slick";
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.scss';

const ReviewBox = ({ name, expert, review }) => (
    <div className="testimonial__div mx-2 px-3 pb-3 o-border-purple d-flex flex-column position-relative">
        <div className="fa-quote-left text-white o-font-lg text-center o-bg-purple position-absolute rounded-circle">
            <FaQuoteLeft />
        </div>
        <strong>{name}</strong>
        <small className="text-muted mb-3">{expert}</small>
        <p className="text-justify o-font-sm">{review}</p>
    </div>
);

class Testimonial extends React.Component{

    state = {
        testimonials: [
            {
                id: 1,
                name: 'Donald Trump',
                expert: 'Client',
                review: 'A very very special boy, you could say that he is an outstanding service oriented person. Amazingly prudent and focused, he is the best, I only interact with the best so it is only natural.'
            },
            {
                id: 2,
                name: 'Mansa Musa',
                expert: 'Mentor',
                review: 'Highest Quality / Cheapest price. I wanted to pay 10 gold bars but in the end after the AI for my mansion worked out better than I expected, I decided to go with 50 golds bars and become his mentor.',
            },
            {
                id: 3,
                name: 'Elon Musk ',
                expert: 'Friend',
                review: "Tesla stonks go up just like the quality of this guy's services. You can invest in his steady rise and profit off his peak. Only Space X can get as far as your products with the help of this person",
            },
        ]
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 1000,
            autoplaySpeed: 3000,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                }
              }]
        };
        return(
            <>
                <Title>Reviews</Title>
                <div className="testimonial mb-5">
                <Slider {...settings}>
                    {
                        this.state.testimonials.map(item => (
                            <ReviewBox key={item.id} {...item} />
                        ))
                    }
                </Slider>
                </div>
            </>
        );
    }
}

export default Testimonial;