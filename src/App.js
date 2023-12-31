import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


import './App.css';
import car from './chr.jpg'
import mar from './marcedes.webp'
import chr from './tucson.png'
import tuc from './tucson.jpg'
// import required modules

import Header from './component/Header';
import Main from './component/Main';
import Categ from './component/Categ';
import Footer from './component/Footer';
export default function App() {
  return (
    <div>
    <Header />
    <Main 
      quant="4"
      categ="Car"
    />
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
      <div  id="sec">
        <SwiperSlide>
        <Categ  
       profile=" Dagi.W"
       image={car}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={tuc}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={mar}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ  
       profile=" Fikir.E"
       image={car}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={chr}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={mar}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ  
       profile=" Dagi.W"
       image={car}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={tuc}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={mar}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ  
       profile=" Dagi.W"
       image={car}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={chr}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        <SwiperSlide>
        <Categ 
       profile=" Dagi.W"
       image={mar}
       model="Tucson"
       price="$200"
       location="Harer"
    />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
    <Footer />
    </div>
  );
}
