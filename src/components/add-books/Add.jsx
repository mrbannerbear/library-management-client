import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit } = useForm();

  const addBook = d => {
    console.log(d)
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
                  {...register("name")}
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
                {...register("quantity")}
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
              <input
                {...register("category")}
                type="text"
                placeholder="Category"
                className="input input-bordered  rounded-none"
                required
              />
            </div>
</div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea {...register("description")}
                placeholder="Short Description"
                className="input input-bordered  rounded-none"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                {...register("rating")}
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
 </div>
  );
};

export default Add;
