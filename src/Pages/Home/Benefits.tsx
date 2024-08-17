
import AOS from 'aos';
import 'aos/dist/aos.css';

import  { useEffect } from 'react';

const Benefits = () => {

  useEffect(()=>{
    AOS.init({duration:1200})
  })




  const benefits = [
    {
      title: "High Quality Materials",
      description:
        "Our gym products are crafted from top-notch materials, ensuring durability and a longer lifespan. Perfect for intense workouts.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
    },
    {
      title: "Enhanced Performance",
      description:
        "Improve your workouts with products designed to boost your performance. Feel the difference with every session.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Affordable Pricing",
      description:
        "Get premium quality without breaking the bank. Our products offer the best value for your money.",
      image: "https://images.csmonitor.com/csm/2015/11/947221_1_1111-%20Gym_standard.jpg?alias=standard_900x600",
    },
    {
      title: "User-Friendly Design",
      description:
        "Our products are designed with ease of use in mind, making them suitable for all fitness levels.",
      image: "https://www.garagegymreviews.com/wp-content/uploads/best-home-gym.png",
    },
    {
      title: "Versatile Usage",
      description:
        "Whether you're a beginner or a pro, our gym products are versatile enough to meet your needs.",
      image: "https://basebangkok.com/app/uploads/2020/03/slam--1024x683.jpg",
    },
    {
      title: "Compact and Portable",
      description:
        "Take your fitness journey anywhere. Our products are lightweight and portable, perfect for on-the-go workouts.",
      image: "https://www.garagegymreviews.com/wp-content/uploads/DSC06229-1024x576.jpg",
    },
  ];

  return (
    <div className=""  data-aos="fade-right">
      <div className="container mx-auto px-6">
        {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Benefits of Using Our Gym Products
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-6 text-center overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${benefit.image})` }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2"  data-aos = "fade-right">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;





