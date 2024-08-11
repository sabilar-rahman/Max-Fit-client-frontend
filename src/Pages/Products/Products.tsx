// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useGetProductsQuery } from "@/redux/api/baseApi";
// import ProductsCard from "./ProductsCard";
// import { TPro } from "@/Types";
// import Loaderspinner from "@/loading/Loaderspinner";

// const Products = () => {
//   const location = useLocation();
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [sortOrder, setSortOrder] = useState<string>("");
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);

//   useEffect(() => {
//     if (location.state && (location.state as { category?: string }).category) {
//       setSelectedCategories([
//         (location.state as { category: string }).category,
//       ]);
//     }
//   }, [location.state]);

//   const { data, isLoading } = useGetProductsQuery({
//     searchTerm,
//     category: selectedCategories.join(","),
//     sortByPrice: sortOrder,
//     minPrice: priceRange[0],
//     maxPrice: priceRange[1],
//   });

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((cat) => cat !== category)
//         : [...prev, category]
//     );
//   };

//   const handleSortChange = (order: string) => {
//     setSortOrder(order);
//   };

//   const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newMaxPrice = Number(e.target.value);
//     setPriceRange([priceRange[0], newMaxPrice]);
//   };

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedCategories([]);
//     setSortOrder("");
//     setPriceRange([0, 3000]);
//   };

//   if (isLoading) {
//     return (
//       <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
//         <Loaderspinner />
//       </h1>
//     );
//   }

//   const { data: products } = data;

//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Sidebar for search, filter, and clear button */}
//         <div className="lg:w-1/4 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-xl font-bold mb-4">Filter Products</h2>

//           {/* Search Bar */}
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search products..."
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//           />

//           {/* Category Filter */}
//           <div>
//             <h3 className="font-semibold mb-2">Category</h3>
//             <div className="space-y-2">
//               {[
//                 "Leg Extension machine",
//                 "Chest press",
//                 "Lat pulldown",
//                 "Treadmill",
//                 "Dumbbells",
//                 "Rowing machine",
//                 "StairMaster",
//               ].map((category) => (
//                 <div key={category}>
//                   <input
//                     type="checkbox"
//                     checked={selectedCategories.includes(category)}
//                     onChange={() => handleCategoryChange(category)}
//                     id={category}
//                   />
//                   <label htmlFor={category} className="ml-2">
//                     {category}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Price Range Slider */}
//           <div className="mt-4">
//             <h3 className="font-semibold mb-2">Price Range</h3>
//             <input
//               type="range"
//               min={0}
//               max={3000}
//               step={10}
//               value={priceRange[1]}
//               onChange={handlePriceRangeChange}
//               className="w-full"
//             />
//             <div className="flex justify-between text-sm">
//               <span>${priceRange[0]}</span>
//               <span>${priceRange[1]}</span>
//             </div>
//           </div>

//           {/* Sorting Buttons */}
//           <div className="mt-4">
//             <h3 className="font-semibold mb-2">Sort By Price</h3>
//             <button
//               onClick={() => handleSortChange("asc")}
//               className="block w-full bg-blue-500 text-white py-2 rounded mb-2"
//             >
//               Price: Low to High
//             </button>
//             <button
//               onClick={() => handleSortChange("desc")}
//               className="block w-full bg-blue-500 text-white py-2 rounded"
//             >
//               Price: High to Low
//             </button>
//           </div>

//           {/* Clear Filter Button */}
//           <button
//             onClick={clearFilters}
//             className="mt-4 w-full bg-red-500 text-white py-2 rounded"
//           >
//             Clear Filters
//           </button>
//         </div>

//         {/* Products Grid */}
//         <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
//           {products?.map((product: TPro) => (
//             <ProductsCard key={product?._id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

{
  /*===============================================*/
}

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useGetProductsQuery } from "@/redux/api/baseApi";
// import ProductsCard from "./ProductsCard";
// import { TPro } from "@/Types";
// import Loaderspinner from "@/loading/Loaderspinner";

// const Products = () => {
  //   const location = useLocation();
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);

//   useEffect(() => {
  //     if (location.state && (location.state as { category?: string }).category) {
    //       setSelectedCategories([
//         (location.state as { category: string }).category,
//       ]);
//     }
//   }, [location.state]);

//   const { data, isLoading } = useGetProductsQuery({
  //     searchTerm,
//     category: selectedCategories.join(","),
//     sortByPrice: sortOrder,
//     minPrice: priceRange[0],
//     maxPrice: priceRange[1],
//   });

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchTerm(e.target.value);
  //   };

//   const handleCategoryChange = (category: string) => {
  //     setSelectedCategories((prev) =>
  //       prev.includes(category)
  //         ? prev.filter((cat) => cat !== category)
//         : [...prev, category]
//     );
//   };

//   const handleSortChange = (order: "asc" | "desc" | "") => {
//     setSortOrder(order);
//   };

//   const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newMaxPrice = Number(e.target.value);
//     setPriceRange([priceRange[0], newMaxPrice]);
//   };

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedCategories([]);
//     setSortOrder("");
//     setPriceRange([0, 3000]);
//   };

//   if (isLoading) {
  //     return (
    //       <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
    //         <Loaderspinner />
//       </h1>
//     );
//   }

//   const { data: products } = data;

//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Sidebar for search, filter, and clear button */}
//         <div className="lg:w-1/4 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-xl font-bold mb-4">Filter Products</h2>

//           {/* Search Bar */}
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search products..."
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//           />

//           {/* Category Filter */}
//           <div>
//             <h3 className="font-semibold mb-2">Category</h3>
//             <div className="space-y-2">
//               {[
  //                 "Leg Extension machine",
//                 "Chest press",
//                 "Lat pulldown",
//                 "Treadmill",
//                 "Dumbbells",
//                 "Rowing machine",
//                 "StairMaster",
//               ].map((category) => (
  //                 <div key={category}>
  //                   <input
  //                     type="checkbox"
  //                     checked={selectedCategories.includes(category)}
  //                     onChange={() => handleCategoryChange(category)}
//                     id={category}
//                   />
//                   <label htmlFor={category} className="ml-2">
//                     {category}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Price Range Slider */}
//           <div className="mt-4">
//             <h3 className="font-semibold mb-2">Price Range</h3>
//             <input
//               type="range"
//               min={0}
//               max={3000}
//               step={10}
//               value={priceRange[1]}
//               onChange={handlePriceRangeChange}
//               className="w-full"
//             />
//             <div className="flex justify-between text-sm">
//               <span>${priceRange[0]}</span>
//               <span>${priceRange[1]}</span>
//             </div>
//           </div>

//           {/* Sorting Buttons */}
//           <div className="mt-4">
//             <h3 className="font-semibold mb-2">Sort By Price</h3>
//             <button
//               onClick={() => handleSortChange("asc")}
//               className="block w-full bg-blue-500 text-white py-2 rounded mb-2"
//             >
//               Price: Low to High
//             </button>
//             <button
//               onClick={() => handleSortChange("desc")}
//               className="block w-full bg-blue-500 text-white py-2 rounded"
//             >
//               Price: High to Low
//             </button>
//           </div>

//           {/* Clear Filter Button */}
//           <button
//             onClick={clearFilters}
//             className="mt-4 w-full bg-red-500 text-white py-2 rounded"
//           >
//             Clear Filters
//           </button>
//         </div>

//         {/* Products Grid */}
//         <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
//           {products?.map((product: TPro) => (
  //             <ProductsCard key={product?._id} product={product} />
  //           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;




{
  /*===============AGAIN TRY================================*/
}


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductsCard from "./ProductsCard";
import { TPro } from "@/Types";
import Loaderspinner from "@/loading/Loaderspinner";

const Products = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);

  useEffect(() => {
    if (location.state && (location.state as { category?: string }).category) {
      setSelectedCategories([(location.state as { category: string }).category]);
    }
  }, [location.state]);

  const { data, isLoading } = useGetProductsQuery({
    searchTerm,
    category: selectedCategories.join(","),
    sortByPrice: sortOrder,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(e.target.value);
    setPriceRange([priceRange[0], newMaxPrice]);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSortOrder(undefined);
    setPriceRange([0, 3000]);
  };

  if (isLoading) {
    return (
      <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
        <Loaderspinner />
      </h1>
    );
  }

  const { data: products } = data;
  // flex flex-col lg:flex-row
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar for search, filter, and clear button */}
        <div className="lg:w-1/4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Filter Products</h2>

          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="space-y-2">
              {[
                "Leg Extension machine",
                "Chest press",
                "Lat pulldown",
                "Treadmill",
                "Dumbbells",
                "Rowing machine",
                "StairMaster",
              ].map((category) => (
                <div key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    id={category}
                  />
                  <label htmlFor={category} className="ml-2">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input
              type="range"
              min={0}
              max={3000}
              step={10}
              value={priceRange[1]}
              onChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Sorting Buttons */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Sort By Price</h3>
            <button
              onClick={() => handleSortChange('asc')}
              className="block w-full bg-blue-500 hover:bg-slate-600 text-white py-2 rounded mb-2"
            >
              Low to High
            </button>
            <button
              onClick={() => handleSortChange('desc')}
              className="block w-full bg-blue-500 hover:bg-slate-600  text-white py-2 rounded"
            >
              High to Low
            </button>
          </div>

          {/* Clear Filter Button */}
          <button
            onClick={clearFilters}
            className="mt-4 w-full bg-red-500 hover:bg-red-800 text-white py-2 rounded"
          >
            Clear Filters
          </button>
        </div>

        {/* Products Grid */}
        <div>
          <hr />

        </div>
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products?.map((product: TPro) => (
            <ProductsCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
