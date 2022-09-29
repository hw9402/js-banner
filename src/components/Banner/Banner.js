import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from './assets/img1.jpg';
import './style.css';

export default () => {
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
      <SwiperSlide className='img-size'>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide className='img-size'>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide className='img-size'>
        <img src={img1} />
      </SwiperSlide>
      ...
    </Swiper>
  );
};