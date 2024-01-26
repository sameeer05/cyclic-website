import React from 'react';
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from '../responsive';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonials.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Testimonials() {
  return (
    <Container>
      <Title>Testimonials</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1, 
            spaceBetween: 20,
            navigation: false,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            navigation: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderItems.map((item) => (
        <SwiperSlide>
            <ImgContainer>
                <Image src={item.img} alt='' ></Image>
            </ImgContainer>
            <Name>{item.name}</Name>
            <Desc>{item.desc}</Desc>
        </SwiperSlide>
        ))}
      </Swiper>
      </Container>
  );
}

const Container = styled.div`
  /* width: 100vw; */
  /* padding: 20px 80px; */
  ${mobile({padding: '20px 0px'})}
`;

const ImgContainer = styled.div`
  width: 50%;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 10px 80px 20px;
  ${mobile({ margin: '20px' })}
`;

const Name = styled.h3`
  margin: 0;
`;

const Desc = styled.p`
  margin: 10px 25px;
`;