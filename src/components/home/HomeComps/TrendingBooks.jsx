/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsStar, BsStarFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Rating from "react-rating";

const TrendingBooks = () => {

    useEffect( () => {
        axios.get("https://lib-management-server.vercel.app/books")
        .then(data => setBooks(data.data))
        .catch(err => console.log(err))
    } , [])
    const [books, setBooks] = useState([])

  return (
    <>
    <div className="mt-8 lg:mt-20 px-4 lg:px-12 hidden lg:block">
      <h1 className="text-center text-3xl mb-6">Editor's Picks for You</h1>

      <Swiper
        slidesPerView={4}
        loop:true
        // centeredSlides={true}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {books.filter(book => book.Rating >= 4.5 ).slice(0, 12).map(book =>
        <SwiperSlide key={book._id}>
           <div
            className="relative flex flex-col text-gray-700 bg-white shadow-md w-[15rem] bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-[15rem] bg-clip-border">
                <img
                  src={book.Image}
                  className="w-full h-full object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 h-12 flex items-end">
                    {book.Name}
                  </p>
                </div>

                <p className="block font-sans antialiased font-medium leading-relaxed text-blue-gray-900 text-sm h-5">
                        {book["Author Name"]}
                </p>

                <p className="block font-sans antialiased font-medium leading-relaxed text-gray-500 text-sm">
                        {book.Category}
                </p>
                <p className="mt-4">
                    <Rating initialRating={book.Rating} readonly 
                    className="text-xs"
                    fullSymbol={<BsStarFill></BsStarFill>}
                    emptySymbol={<BsStar></BsStar>}
                    ></Rating>
                </p>
              </div>
              <div className="p-6 pt-0 flex justify-between items-center gap-5">
               <NavLink to={`/books?id=${book._id}`}>
               <button
                  className="btn1
                  block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Details
                </button>
               </NavLink>
              </div>
            </div>
        </SwiperSlide>
        )}
       
      </Swiper>
    </div>
    </>
  );
};

export default TrendingBooks;
