/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthProvider } from "../../../context/AuthContext";

const Borrowed = () => {
  const { user } = useContext(AuthProvider);

  const [allBooks, setAllBooks] = useState([]);
  const [borrowedInfo, setBorrowedInfo] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/books`)
      .then(data => setAllBooks(data.data))
      .catch(err => console.log(err));

    axios.get(`http://localhost:4000/borrowedInfo?email=${user.email}`)
      .then(data => setBorrowedInfo(data.data))
      .catch(err => console.log(err));
  }, [user.email]);

  useEffect(() => {
    const updatedBorrowedBooks = borrowedInfo.map(borrowedBook =>
      allBooks.find(book => book._id === borrowedBook.bookID)
    );
    setBorrowedBooks(updatedBorrowedBooks);
  }, [allBooks, borrowedInfo]);

  const HandleDelete = (_id, bookID, quantity) => {
    console.log(_id);
    axios.delete(`http://localhost:4000/borrowedInfo?id=${_id}`)
      .then((deleteInfo) => {
        toast("Removed from cart");
        console.log(deleteInfo);
        const remaining = borrowedBooks.filter(book => book._id !== bookID);
        setBorrowedBooks(remaining);
        axios.put(`http://localhost:4000/books?id=${bookID}`, { Quantity: quantity + 1 })
          .then(data => console.log(data.data))
          .catch(err => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-4 lg:px-24 min-h-screen">
      <h2 className="text-center font-bold text-2xl mb-12">Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="font-semibold text-2xl">
            You Haven't Borrowed Any Books Yet <br />
            <p className="text-base mt-3 font-medium underline text-center">
              <NavLink to="/allBooks">Add Books</NavLink>
            </p>
          </div>
        </div>
      ) : (
        borrowedBooks.map((each) => {
          const bookInfo = borrowedInfo.find(info => info.bookID === each?._id);
          return (
            <div
              key={each?._id}
              className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-5 py-4 px-6 rounded-none"
            >
              <figure>
                <img
                  className="h-40"
                  src={each?.Image}
                  alt={each?.Name}
                />
              </figure>
              <div className="card-body flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="w-5/6">
                  <h2 className="card-title">{each?.Name}</h2>
                  <p>{each?.["Author Name"]}</p>
                  <p className="text-gray-600 text-sm">{each?.Category}</p>
                  <p className="text-xs flex flex-col lg:flex-row gap-2 mt-3" >
                    <span>Borrow Date: {bookInfo?.borrowedDate}</span>
                    <span>Return Date: {bookInfo?.returnDate}</span>
                  </p>
                </div>
                <div className="my-2">
                  <button onClick={() => HandleDelete(bookInfo?._id, bookInfo?.bookID, each?.Quantity)} className="btn1 border-base-content">
                    Return
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
      <Toaster></Toaster>
    </div>
  );
};

export default Borrowed;
