import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
            clickable: true,
          }}
        autoplay
        modules={[Pagination,Autoplay]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
            <img className='md:w-[1140px] w-full md:h-[500px] h-[350px] rounded  mx-auto' src="/src/assets/Slider/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='md:w-[1140px] w-full md:h-[500px] h-[350px] rounded  mx-auto' src="/src/assets/Slider/2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='md:w-[1140px] w-full md:h-[500px] h-[350px] rounded mx-auto' src="/src/assets/Slider/3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='md:w-[1140px] w-full md:h-[500px] h-[350px] rounded mx-auto' src="/src/assets/Slider/4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='md:w-[1140px] w-full md:h-[500px] h-[350px] rounded mx-auto' src="/src/assets/Slider/5.jpg" alt="" />
        </SwiperSlide>
        
        
        
      </Swiper>
    </>
  );
}
