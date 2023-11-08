import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation, NavLink } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import Modal from "./each-book-comps/Modal";

const EachBook = () => {
  const location = useLocation();
  console.log(location.search);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/books${location.search}`)
      .then((data) => setBook(data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const [book, setBook] = useState({});

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-3/4 flex-col lg:flex-row gap-10">
          <div className="bg-base-100 p-4 shadow-lg">
            <img src={book.Image} className="rounded-lg h-72" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold">{book.Name}</h1>
            <h2 className="font-semibold">{book["Author Name"]}</h2>
            <p className="py-1 text-sm text-gray-600">{book.Category}</p>
            <p className="">
              <Rating
                initialRating={book.Rating}
                readonly
                className="text-xs"
                fullSymbol={<BsStarFill></BsStarFill>}
                emptySymbol={<BsStar></BsStar>}
              ></Rating>
            </p>
            <p className="flex gap-5 justify-center mt-4">
              <NavLink to={`/preview?id=${book._id}`}>
                <button className="lg:w-40 btn1 border-base-content">
                  Read
                </button>
              </NavLink>
              <Modal book={book}></Modal>
            </p>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default EachBook;
