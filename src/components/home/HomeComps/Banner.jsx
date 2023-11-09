/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
          <div className="hero min-h-screen
        " style={{backgroundImage: `url(https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1798&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De.jpg)`}}>
        
          <div className="w-full h-full bg-gray-500/20 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Favorite Books</h1>
            <p className="mb-5">
            Explore a world of knowledge and imagination. 
        Dive into our extensive collection of books, 
        spanning various genres and topics. 
        Whether you're looking for a thrilling adventure 
        or a profound exploration of human history, 
        we have something for every reader.
            </p>
            <button className="btn1">Get Started</button>
          </div>
        </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="hero min-h-screen
        " style={{backgroundImage: `url(https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
        
          <div className="w-full h-full bg-gray-500/20 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Discover Your Next Literary Adventure</h1>
            <p className="mb-5">
            Indulge in the pleasure of literary exploration with our diverse collection of books, 
            covering an array of genres and themes. Whatever your taste, our carefully 
            curated selection ensures there's something to captivate every reader's imagination. 
            Get ready to embark on a reading journey that transcends time and space.
            </p>
            <button className="btn1">Get Started</button>
          </div>
        </div>
        </div>
          </SwiperSlide>
        </Swiper>
    )
};

export default Banner;