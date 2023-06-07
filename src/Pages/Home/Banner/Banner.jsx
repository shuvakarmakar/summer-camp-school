// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../../assets/Banner/camp1.jpg'
import img2 from '../../../assets/Banner/camp2.jpg'
import img3 from '../../../assets/Banner/camp3.jpg'
import img4 from '../../../assets/Banner/camp4.jpg'
import img5 from '../../../assets/Banner/camp5.jpg'
import img6 from '../../../assets/Banner/camp6.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
const Banner = () => {

    return (
        <div className='carousel w-full h-[600px] relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Banner 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Banner 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="Banner 6" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;


