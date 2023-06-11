import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

import './Banner.css';
import img1 from '../../../assets/Banner/camp1.jpg';
import img2 from '../../../assets/Banner/camp2.jpg';
import img3 from '../../../assets/Banner/camp3.jpg';
import img4 from '../../../assets/Banner/camp4.jpg';
import img5 from '../../../assets/Banner/camp5.jpg';
import img6 from '../../../assets/Banner/camp6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] relative">
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
                <SwiperSlide className="relative">
                    <img src={img1} alt="Banner 1" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="text-white text-center space-y-7">
                            <h2 className="text-4xl md:text-6xl font-bold">Adventure Awaits</h2>
                            <p>Experience the thrill of outdoor camping.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img2} alt="Banner 2" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="text-white text-center space-y-7">
                            <h2 className="text-4xl md:text-6xl font-bold">Nature Exploration</h2>
                            <p>Discover the wonders of the natural world.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img3} alt="Banner 3" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="text-white text-center space-y-7">
                            <h2 className="text-4xl md:text-6xl font-bold">Outdoor Activities</h2>
                            <p>Engage in exciting adventures and outdoor sports.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img4} alt="Banner 4" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="text-white text-center space-y-7">
                            <h2 className="text-4xl md:text-6xl font-bold">Unwind in Nature</h2>
                            <p>Escape the busy city life and relax in serene surroundings.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img5} alt="Banner 5" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="text-white text-center space-y-7">
                            <h2 className="text-4xl md:text-6xl font-bold">Wildlife Encounters</h2>
                            <p>Observe fascinating wildlife up close in their natural habitats.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img6} alt="Banner 6" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="text-white text-center space-y-7">
                            <h2 className="text-4xl md:text-6xl font-bold">Wilderness Adventures</h2>
                            <p>Embark on thrilling journeys in untamed landscapes.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
