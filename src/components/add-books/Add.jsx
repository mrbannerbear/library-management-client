import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Add = () => {
  const { register, handleSubmit } = useForm();

  const addBook = d => {
    axios.post("http://localhost:4000/books", d, {withCredentials: true})
    .then(data => {
      console.log(data);
      toast("Book added successfully")
    })
    .catch(err => {
      console.log(err);
      toast("Could not add book")
    })
  }

  return (
    <div className="min-h-screen bg-base-300 py-8">
             <h1 className="text-3xl text-center">
            Add a Book
        </h1>
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-2xl bg-base-100 rounded-none">
          <form className="card-body"
          onSubmit={handleSubmit(addBook)}>

            <div className="flex flex-col md:flex-row gap-5">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("Name")}
                  type="text"
                  placeholder="Book Name"
                  className="input input-bordered  rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  {...register("Author Name")}
                  type="text"
                  placeholder="Author Name"
                  className="input input-bordered  rounded-none"
                  required
                />
              </div>

            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                {...register("Image")}
                type="text"
                placeholder="Image URL"
                className="input input-bordered  rounded-none"
                required
              />
            </div>

<div className="flex flex-col md:flex-row gap-5">
<div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                {...register("Quantity", {
                  valueAsNumber: true
                })}
                type="number"
                placeholder="Quantity"
                className="input input-bordered  rounded-none"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                    {...register("Category")}
                    className="input input-bordered  rounded-none"
                    required
                  >
                    <option>Career</option>

                    <option>Science Fiction</option>

                    <option>Biography</option>

                    <option>Thriller</option>

                    <option>Fiction</option>

                    <option>Cooking</option>

                    <option>Horror</option>

                    <option>History</option>

                    <option>Romance</option>

                    <option>Self-Help</option>
                  </select>
            </div>
</div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea {...register("Short description")}
                placeholder="Short Description"
                className="input input-bordered  rounded-none"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input min="1" max="5" step="0.1"
                {...register("Rating")}
                type="number"
                placeholder="Rating"
                className="input input-bordered  rounded-none"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn1">Add Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Toaster></Toaster>
 </div>
  );
};

export default Add;
