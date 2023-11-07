import axios from "axios";
import { CiFilter } from "react-icons/ci"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"

const AllBooks = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/books")
      .then((data) => setBooks(data.data))
      .catch((err) => console.log(err));
  }, []);

  const [books, setBooks] = useState([]);
  const [ filtered, setFiltered ] = useState(false)

  const HandleFilter = e => {
    e.target.value == "available" && setFiltered(true);
    e.target.value == "all" && setFiltered(false)
  }

  const filteredBooks = !filtered ? books : books.filter(book => book.Quantity > 0)


  return (
    <div className="min-h-screen bg-base-300 py-8 px-4 lg:px-12">
      <h1 className="text-3xl text-center mb-4">All Books</h1>
      <p className="flex justify-center items-center mb-8 text-2xl gap-1">
        <CiFilter></CiFilter>
        <select name="" id="" className="text-base outline-none"
        onChange={HandleFilter}>
            <option value="all">All</option>
            <option value="available">Available</option>
        </select>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {filteredBooks.map((book) => (

            <div key={book._id}
            className="relative flex flex-col text-gray-700 bg-white shadow-md w-56 bg-clip-border">
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
              </div>
              <div className="p-6 pt-0 flex justify-between items-center gap-5">
                <button
                  className="btn1
                  block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Details
                </button>

                <NavLink to="/updateBook">
                <button
                  className="btn1
                  block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Update
                </button>
                </NavLink>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

/**
 - Image
- Name
- Author Name
- Category
- Rating [use React Rating package or any relevant package]
- Update button
 */

export default AllBooks;
