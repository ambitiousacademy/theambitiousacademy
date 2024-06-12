"use client"
import Image from "next/image";
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={3}
                isPlaying={true}
                infinite={true}
                interval={2000}

            >
                <Slider>
                    <Slide index={0}>
                        <div>
                            <Image src="https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill />
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div>
                            <Image src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill />
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div>
                            <Image src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill />
                        </div>
                    </Slide>
                </Slider>
                {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
            </CarouselProvider>
        );
    }
}