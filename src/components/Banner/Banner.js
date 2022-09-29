import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BannerImage from '../../pages/Main/banner.json';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';
import img3 from './assets/img3.jpg';
import './style.css';

export default (props) => {
  console.log(BannerImage.banners);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        BannerImage.banners?.map(index => {
          return (
            <div key={index.id}>
              <SwiperSlide className='img-size'>
                <img src={index.img} />
              </SwiperSlide>
            </div>
          )
        })
      }
      ...
    </Swiper>
  );
};