import image1 from "../../assets/image/catagories/leg.png";
import image2 from "../../assets/image/catagories/chest.png";
import image3 from "../../assets/image/catagories/Latpulldown.png";
import image4 from "../../assets/image/catagories/Treadmill.png";
import image5 from "../../assets/image/catagories/Dumbbells.png";
import image6 from "../../assets/image/catagories/Rowingmachine.png";
import image7 from "../../assets/image/catagories/StairMaster.png";

import { Link } from "react-router-dom";

const categories = [
  { image: image1, label: "Leg Extension machine" },
  { image: image2, label: "Chest press" },
  { image: image3, label: "Lat pulldown" },
  { image: image4, label: "Treadmill" },
  { image: image5, label: "Dumbbells" },
  { image: image6, label: "Rowing machine" },
  { image: image7, label: "StairMaster" },
  //   { image: cImg7, label: "Workout Gloves" },
];

const Categories = () => {
  return (
    <div className="container mx-auto">
      <div className="section-gap">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
          {categories.map((category, index) => (
            <Link
              to={"/products"}
              state={category.label}
              key={index}
              className="group flex flex-col items-center justify-between bg-secondaryColor hover:bg-secondaryColor600 rounded-lg p-5 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <img
                src={category.image}
                alt={category.label}
                className="  object-contain object-center  lg:w-full rounded-t-md lg:h-72 dark:bg-gray-500"
              />
              <p className="text-opacity-50 font-bold text-black group-hover:text-primaryColor200 mt-auto transition duration-300 no-underline group-hover:underline">
                {category.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
