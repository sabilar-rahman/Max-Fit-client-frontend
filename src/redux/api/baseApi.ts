// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// interface GetProductsQueryParams {
//     searchTerm?: string;
//     category?: string;
//     sortByPrice?: 'asc' | 'desc';
//     minPrice?: number;
//     maxPrice?: number;
//   }
  

  

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        // GET API

        // getProducts: builder.query({
        //     query: () => ({
        //         method: "GET",
        //         url: "/products",
        //     }),
        //     providesTags: ["products"],
        // }),





        // getProducts: builder.query({
        //     query: ({ searchTerm, category, sortByPrice }) => {
        //         // Build query string based on the provided parameters
        //         const params = new URLSearchParams();

        //         if (searchTerm) params.append('searchTerm', searchTerm);
        //         if (category) params.append('category', category);
        //         if (sortByPrice) params.append('sortByPrice', sortByPrice);

        //         return {
        //             url: `/products?${params.toString()}`,
        //             method: 'GET',
        //         };
        //     },
        //     providesTags: ['products'],
        // }),




        // Define the query parameters interface on the up side

//   getProducts: builder.query({
//     query: ({ searchTerm, category, sortByPrice, minPrice, maxPrice }: GetProductsQueryParams) => {
//       // Build query string based on the provided parameters
//       const params = new URLSearchParams();
  
//       if (searchTerm) params.append('searchTerm', searchTerm);
//       if (category) params.append('category', category);
//       if (sortByPrice) params.append('sortByPrice', sortByPrice);
//       if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
//       if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());
  
//       return {
//         url: `/products?${params.toString()}`,
//         method: 'GET',
//       };
//     },
//     providesTags: ['products'],
//   }),

//  ok ok ?
getProducts: builder.query({
    query: ({ searchTerm, category, sortByPrice, minPrice, maxPrice }) => {
      const params = new URLSearchParams();
      
      if (searchTerm) params.append('searchTerm', searchTerm);
      if (category) params.append('category', category);
      if (sortByPrice) params.append('sortByPrice', sortByPrice);
      if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
      if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());

      return {
        url: `/products?${params.toString()}`,
        method: 'GET',
      };
    },
    providesTags: ['products'],
  }),









        // GET SINGLE Products api
        getSingleProducts: builder.query({
            query: (id) => {
                console.log(id);
                return {
                    method: "GET",
                    url: `/products/${id}`,
                };
            },
            providesTags: ["products"],
        }),

        // CREATE Products api
        addProducts: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    method: "POST",
                    url: "/products",
                    body: data,
                };
            },
            invalidatesTags: ["products"],
        }),

        // DELETE Products api
        deleteProducts: builder.mutation({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["products"],
        }),

        // UPDATE Products api
        updateProducts: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `/products/${id}`,
                    method: "PUT",
                    body: data,
                };
            },
            invalidatesTags: ["products"],
        }),

        // ORDER PART START 
        createOrder: builder.mutation({
            query:(orderData)=>{
                return{
                    url:`/orders`,
                    method:"POST",
                    body:orderData,
                }
            },
            invalidatesTags: ["products"],
        })
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProductsQuery,
    useAddProductsMutation,
    useGetSingleProductsQuery,
    useDeleteProductsMutation,
    useUpdateProductsMutation,
    useCreateOrderMutation
} = baseApi;
