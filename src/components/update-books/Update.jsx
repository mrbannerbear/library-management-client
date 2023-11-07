import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const Update = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();

  console.log(location.search);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/books${location.search}`)
      .then((data) => setData(data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState({});

  const UpdateBook = (d) => {
    axios.put(`http://localhost:4000/books${location.search}`, d)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  };

  return (
    <div className="min-h-screen bg-base-300 py-8">
      <h1 className="text-3xl text-center">Update a Book</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-2xl bg-base-100 rounded-none">
            <form className="card-body" onSubmit={handleSubmit(UpdateBook)}>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name")}
                    defaultValue={data.Name}
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
                    {...register("author")}
                    defaultValue={data["Author Name"]}
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
                  {...register("image")}
                  defaultValue={data.Image}
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered  rounded-none"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                {...register("quantity")}
                defaultValue={data.Quantity}
                type="number"
                placeholder="Quantity"
                className="input input-bordered  rounded-none"
                required
              />
            </div> */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>

                  <select
                    {...register("category")}
                    value={data.Category}
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
                <textarea
                rows="20"
                defaultValue={data["Short description"]}
                  {...register("description")}
                  placeholder="Short Description"
                  className="input input-bordered  rounded-none text-sm textarea-lg"
                  required
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input min="1" max="5" step="0.1"
                defaultValue={data.Rating}
                  {...register("rating")}
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered  rounded-none"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn1">Update Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
