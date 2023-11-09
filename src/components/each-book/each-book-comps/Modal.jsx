/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../../../context/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ book }) => {
  const { user } = useContext(AuthProvider);

  const { register, handleSubmit } = useForm();
  console.log(book._id);

  let date = new Date();
  let borrowedDate = date.toLocaleDateString();
  const handleBorrow = (d) => {
    let userName = d.Name;
    let email = user.email;
    let returnDate = d.Date;
    console.log(book.Quantity);
    axios
      .get(`http://localhost:4000/borrowedInfo?email=${email}&id=${book._id}`)
      .then((data) => {
        console.log(data);
        if (data.data.length == 0) {
          axios
            .post(
              `http://localhost:4000/borrowedInfo?email=${email}&id=${book._id}`,
              { userName, email, borrowedDate, returnDate, bookID: book._id }
            )
            .then((data) => {
              let quantity = book.Quantity;
              if (book.Quantity <= 0) {
                quantity = book.Quantity;
              } if(book.Quantity > 1){
                quantity = book.Quantity - 1;
              } if (book.Quantity == 1){
                quantity == 0
              }
              axios
                .put(`http://localhost:4000/books?id=${book._id}`, {
                  Quantity: parseInt(quantity),
                })
                .then((data) => console.log(data.data))
                .catch((err) => console.log(err));
              toast("You have borrowed this book");
            })
            .catch((err) => console.log(err));
        } else {
          toast("You have already borrowed this book");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="lg:w-40 btn1 border-base-content"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Borrow
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box rounded-none">
          <form className="card-body" onSubmit={handleSubmit(handleBorrow)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("Name")}
                type="text"
                defaultValue={user.displayName}
                className="input input-bordered  rounded-none focus:outline-none"
                readOnly
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("Email")}
                type="email"
                defaultValue={user.email}
                className="input input-bordered  rounded-none focus:outline-none"
                readOnly
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Return Date</span>
              </label>
              <input
                {...register("Date")}
                type="date"
                className="input input-bordered  rounded-none focus:outline-none outline-none"
                required
              />
            </div>

            <div className="modal-action">
              <button className="btn1 border-base-content w-24">Submit</button>
              <form method="dialog">
                <button className="btn1 border-base-content w-24">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
      <Toaster></Toaster>
    </div>
  );
};

export default Modal;
