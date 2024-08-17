import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitle from "@/PageTitleHelmet/PageTitle";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageTitle title="About Us | Max Fit" />

      {/* Company Overview */}
      <section className="mb-16" data-aos="fade-up">
        <div className="  py-12 px-8 " data-aos="fade-right">
          <h1 className="text-4xl font-bold mb-4 text-[#02c39a]">
            Company Overview
          </h1>
          <p className="text-lg leading-relaxed text-justify">
            Founded in 2024, <span className="text-[#02c39a]">Max Fit</span> has
            been at the forefront of gym equipment innovation. Our mission is to
            provide high-quality, cutting-edge fitness solutions that enhance
            performance and promote a healthy lifestyle. Our vision is to
            revolutionize the fitness industry by offering products that combine
            durability, functionality, and style. From humble beginnings to
            becoming a leader in fitness equipment, we are committed to
            excellence, customer satisfaction, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="mb-16" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Team</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div
            className="w-full sm:w-1/2 md:w-1/4 p-4 text-center"
            data-aos="fade-up"
          >
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Godisable Jacob"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">Godisable Jacob</h2>
            <h3 className="text-lg font-medium text-gray-600">CEO & Founder</h3>
            <p className="text-gray-800 mt-2">
              Godisable Jacob is the visionary behind Max Fit, dedicated to
              leading the team towards innovative fitness solutions and
              exceptional customer experiences.
            </p>
          </div>

          <div
            className="w-full sm:w-1/2 md:w-1/4 p-4 text-center"
            data-aos="fade-up"
          >
            <img
              src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8="
              alt="John Smith"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">John Smith</h2>
            <h3 className="text-lg font-medium text-gray-600">
              Head of Product Development
            </h3>
            <p className="text-gray-800 mt-2">
              John leads the product development team, ensuring that every piece
              of equipment meets the highest standards of quality and
              performance.
            </p>
          </div>

          <div
            className="w-full sm:w-1/2 md:w-1/4 p-4 text-center"
            data-aos="fade-up"
          >
            <img
              src="https://images.unsplash.com/photo-1648415041078-d5b259c683be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Emily Johnson"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">Emily Johnson</h2>
            <h3 className="text-lg font-medium text-gray-600">
              Marketing Director
            </h3>
            <p className="text-gray-800 mt-2">
              Emily drives our marketing strategy, connecting with customers and
              promoting the Max Fit brand through creative and impactful
              campaigns.
            </p>
          </div>

          <div
            className="w-full sm:w-1/2 md:w-1/4 p-4 text-center"
            data-aos="fade-up"
          >
            <img
              src="https://www.everypixel.com/preview_collections/20231129/people_of_the_world_vol.3_95"
              alt="Michael Brown"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">Michael Brown</h2>
            <h3 className="text-lg font-medium text-gray-600">
              Customer Support Manager
            </h3>
            <p className="text-gray-800 mt-2">
              Michael ensures that our customers receive top-notch support,
              addressing their needs and providing solutions with a friendly and
              professional approach.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-16" data-aos="fade-up">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-12 px-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">
            What Our Customers Say
          </h1>
          <div className="flex flex-col items-center space-y-6">
            <blockquote className="border-l-4 border-gray-300 pl-4 text-left max-w-lg">
              <p className="text-xl italic">
                "Max Fit has completely transformed my fitness routine. The
                equipment is top-notch, and the customer service is outstanding.
                I highly recommend them to anyone looking to elevate their
                workout experience!"
              </p>
              <footer className="mt-2 text-gray-300">- Alex Johnson</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-4 text-left max-w-lg">
              <p className="text-xl italic">
                "I've been using Max Fit products for several months now, and
                I've been incredibly impressed with their durability and
                performance. The quality is unmatched, and the team behind the
                brand is incredibly supportive and knowledgeable."
              </p>
              <footer className="mt-2 text-gray-300">- Sarah Williams</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-4 text-left max-w-lg">
              <p className="text-xl italic">
                "From the moment I ordered to the delivery of my equipment, the
                experience with Max Fit was smooth and professional. The
                products are fantastic, and they have truly helped me achieve my
                fitness goals!"
              </p>
              <footer className="mt-2 text-gray-300">- Michael Brown</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section data-aos="fade-up">
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white py-12 px-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <p className="text-lg leading-relaxed mb-6 text-center">
            If you have any questions or feedback, feel free to reach out to us.
            We are here to help!
          </p>
          <ul className="text-center text-lg mb-6 space-y-2">
            <li>
              <strong>Email:</strong> support@maxfit.com
            </li>
            <li>
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 Fitness Lane, Health City, HC 45678
            </li>
          </ul>
          {/* <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2 text-gray-700">Name:</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg shadow-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2 text-gray-700">Email:</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg shadow-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2 text-gray-700">Message:</label>
              <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-lg shadow-sm" required></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Send</button>
          </form> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

{
  /* <div className=" items-center  bg-gray-100">
  <div className="max-w w-full bg-white shadow-md rounded-lg p-6">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Welcome to Max Fit!
    </h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
      <p className="text-gray-600 leading-relaxed">
        Founded in [Year], Max Fit started with a simple idea: to make fitness
        accessible and enjoyable for everyone. Whether you are a seasoned
        athlete or just beginning your fitness journey, we are here to support
        you every step of the way. Our founders, [Founder's Name] and [Founder's
        Name], envisioned a place where people could find everything they need
        to succeed in their fitness endeavors, all in one convenient location.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        What We Offer
      </h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>
          Strength Training Equipment: From dumbbells and barbells to home gym
          systems, we have everything you need to build muscle and strength.
        </li>
        <li>
          Cardio Machines: Treadmills, exercise bikes, rowing machines, and
          ellipticals to keep your heart healthy and your body in top shape.
        </li>
        <li>
          Fitness Accessories: Yoga mats, resistance bands, foam rollers, and
          more to complement your workout routine and enhance your fitness
          experience.
        </li>
        <li>
          Wearable Tech: Fitness trackers, smartwatches, and other gadgets to
          monitor your progress and keep you motivated.
        </li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Why Choose Us?
      </h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>
          Quality Products: We carefully select and test all our products to
          ensure they meet the highest standards of quality and durability.
        </li>
        <li>
          Expert Advice: Our team of fitness experts is always available to
          provide guidance, answer your questions, and help you choose the right
          equipment for your needs.
        </li>
        <li>
          Customer Satisfaction: Your satisfaction is our top priority. We are
          committed to providing excellent customer service and support, from
          the moment you browse our website to the delivery of your order.
        </li>
        <li>
          Community Focus: We believe in the power of community. Join our online
          community to connect with fellow fitness enthusiasts, share your
          progress, and stay motivated.
        </li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Our Commitment
      </h2>
      <p className="text-gray-600 leading-relaxed">
        At Max Fit, we are committed to promoting a healthy lifestyle and
        helping you achieve your fitness goals. We continually strive to bring
        you the latest innovations in fitness equipment and accessories,
        ensuring that you have access to the best tools to enhance your workout
        experience.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join Us</h2>
      <p className="text-gray-600 leading-relaxed">
        Become a part of the Max Fit family today and take the first step
        towards a healthier, more active life. Explore our website to discover
        our wide range of fitness products, and let us help you reach your full
        potential.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        Have questions or need assistance? Our friendly customer service team is
        here to help. Feel free to reach out to us at{" "}
        <a href="mailto:[Email Address]" className="text-blue-500">
          [sabilarrahman36@gmail.com]
        </a>{" "}
        or call us at{" "}
        <a href="tel:[Phone Number]" className="text-blue-500">
          [+8801874736061]
        </a>
        . You can also follow us on social media for the latest updates, fitness
        tips, and exclusive offers.
      </p>
    </section>
  </div>
</div>; */
}
