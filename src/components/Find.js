import React from 'react';
import './Find.css';
import Card from './Card';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';


// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Find = () => {
  return (
    <div className='find'>

      <div className='heading'>
        <h1>Find your shoes</h1>
        <div className='text_bg'>
          <p>
            <span>Explore the world's largest shoes  marketplace</span>
          </p>
        </div>
      </div>

      <div className='slider_container'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={8}
          slidesPerView={3}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 210,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 3,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} > 


          <SwiperSlide>
            <Card
              image={img1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={img2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={img3}
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card
              image={img4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={img5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={img6}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={img7}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={img8}
            />
          </SwiperSlide>
        </Swiper>
      </div>


    </div>
  );
};

export default Find;