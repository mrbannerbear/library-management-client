import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/categories")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false)

  const HandleShowAll = () => {
    setShowAll(!showAll)
  }
  console.log(data.map(each => each.category))

  const categoriesData = showAll ? data : data.slice(0, 6)

  return (
    <div className="px-4 lg:px-12 py-12">
      <h1 className="text-center text-2xl font-semibold my-8">
        Browse Your Favorite Categories
      </h1>

{data.length == 0 ? <div className="min-h-[40vh] flex justify-center items-center">
<span className="loading loading-spinner loading-lg"></span>
</div> :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {categoriesData.map((each) => (
          <div
            key={each._id}
            className="relative grid h-[20rem] w-96 lg:w-96 md:w-80
                    flex-col items-end justify-center overflow-hidden rounded-none bg-white bg-clip-border text-center text-gray-700"
          >
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent 
                  ] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
              style={{
                backgroundImage: `url(${each.image})`,
              }}
            >
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                {each.category}
              </h2>
              <NavLink to={`/categories?category=${each.category}`}>
                <button className="btn1 text-white">Browse</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    }

    <div className="w-full flex justify-center my-4">
        <button className="btn1" onClick={HandleShowAll}>
            {
                !showAll ? "Show All" : "Show Less"
            }
        </button>
    </div>
    </div>
  );
};

export default Categories;
