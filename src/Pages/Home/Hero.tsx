

const Hero = () => {
  return (
    <div>


<section>
	<div className=" hero min-h-screen bg-[url(https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
   <div className="hero-overlay inset-0 bg-gradient-to-r from-black to-transparent"></div>
   <div>

   </div>
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
        
			<p className="text-2xl lg:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-[#02c39a]">  Make a move and</p>
			<p className="text-2xl lg:text-5xl font-extrabold leading-none sm:text-6xl xl:max-w-3xl text-[#02c39a]">Get your healthy Body</p>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">  Discover a supportive Community of fitness Equipments.</p>
			<div className="flex flex-wrap justify-center">
        <a href={`/products`}>
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#02c39a] text-gray-50">Get started</button>
        
        </a>
        <a href={`/aboutUS`}>
        
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-[#02c39a]">Learn more</button>
        </a>
			</div>
		</div>
	</div>

</section>



      {/* <section className="relative bg-[url(https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat  ">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
       
          <div className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Make a move and
                <strong className="block font-extrabold text-[#02c39a]">
                  {" "}
                  Get your healthy Body{" "}
                </strong>
              </h1>

              <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                Discover a supportive Community of fitness Equipments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-[#02c39a] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#00a896] focus:outline-none focus:ring active:bg-[#00a896] sm:w-auto"
                >
                  Get Started
                </a>

                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#02c39a] shadow hover:text-[#00a896] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
       
      </section> */}


    </div>
  );
};

export default Hero;
