/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const Borrowed = () => {

    axios
    .get(
      `http://localhost:4000/borrowedInfo`
    )
    .then(data => setBooks(data.data))
    .catch(err => console.log(err))

    const [books, setBooks] = useState([])

        
            return (
                <div className="p-4 lg:px-24 min-h-screen">
                    <h2 className="text-center font-bold text-2xl mb-12">Borrowed Books</h2>
                    {books.length == 0 ? <div className="min-h-[50vh] flex items-center justify-center">
                        <div className="font-semibold text-2xl">
                            You Haven't Borrowed Any Books Yet <br />
                            <p className="text-base mt-3 font-medium underline text-center">
                                <NavLink to="/allBooks">Add Books</NavLink>
                            </p>
                        </div>
                    </div>
                    :
                    books.map(each => (
                        <div key={each.book._id}
                          className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-5 py-4 px-6 rounded-none">
                            {/* <NavLink to={`/products/${each.book.brand}/${each.book._id}`}> */}
                            <figure><img className="h-40"
                        src={each.book.Image} alt={each.book.Name}/></figure>
                            {/* </NavLink> */}
                        <div className="card-body flex flex-col md:flex-row items-center text-center md:text-left">
                            <div className="w-5/6">
                            <h2 className="card-title">{each.book.Name}</h2>
                          <p>{each.book["Author Name"]}</p>
                          <p className="text-gray-600 text-sm">{each.book.Category}</p>
                            </div>
                          <div className="">
                            <button className="mb-2">Proceed</button>
                            {/* <button onClick={() => HandleDelete(each.book._id)}
                            className="">Remove</button> */}
                          </div>
                        </div>
                      </div>
                    ))}
                    <Toaster></Toaster>
                </div>
            );
        
};

export default Borrowed;