import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimation from "react-animate-on-scroll";

import { quotes } from "data/quotes";

const Quotes = () => {
    return (
        <section
            id="quotes"
            style={{ marginTop: -2, zIndex: 2 }}
            className="pb-5 p-4 position-relative"
        >
            <div className="container position-relative pb-5 mb-5 text-center" >
                <div className="position-relative">
                    <Swiper
                        navigation={{
                            nextEl: ".btn-next",
                            prevEl: ".btn-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        effect="cube"
                        loop
                    >
                        {quotes.map((place, index) => (
                            <SwiperSlide key={index} className="p-3 rounded-3">
                                <div className="row position-relative">
                                    <div className="position-relative col-lg-4 rounded-3 overflow-hidden">
                                        <ScrollAnimation animateOnce animateIn="fadeInLeft">
                                            <img
                                                src={place.image}
                                                alt={place.author}
                                                className="image aspect rounded-pill mb-3"
                                                style={{ verticalAlign: 'middle' }}
                                            />
                                        </ScrollAnimation>
                                    </div>
                                    <div className="px-3 col-lg-8 d-flex justify-content-center flex-column">
                                        <ScrollAnimation animateOnce animateIn="fadeInRight">
                                            <em>{place.quote}</em>
                                            <br /><br />
                                            <p className="title">
                                                <strong>{place.author} - </strong>
                                                <em>{place.description}</em>
                                            </p>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Quotes;