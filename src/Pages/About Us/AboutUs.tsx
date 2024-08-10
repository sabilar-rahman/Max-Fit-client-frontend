

const AboutUs = () => {
  return (
    <div className="container mx-auto">
    <div className=" items-center  bg-gray-100">
      <div className="max-w w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to Max Fit!</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in [Year], Max Fit started with a simple idea: to make fitness accessible and enjoyable for everyone. Whether you are a seasoned athlete or just beginning your fitness journey, we are here to support you every step of the way. Our founders, [Founder's Name] and [Founder's Name], envisioned a place where people could find everything they need to succeed in their fitness endeavors, all in one convenient location.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Strength Training Equipment: From dumbbells and barbells to home gym systems, we have everything you need to build muscle and strength.</li>
            <li>Cardio Machines: Treadmills, exercise bikes, rowing machines, and ellipticals to keep your heart healthy and your body in top shape.</li>
            <li>Fitness Accessories: Yoga mats, resistance bands, foam rollers, and more to complement your workout routine and enhance your fitness experience.</li>
            <li>Wearable Tech: Fitness trackers, smartwatches, and other gadgets to monitor your progress and keep you motivated.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Quality Products: We carefully select and test all our products to ensure they meet the highest standards of quality and durability.</li>
            <li>Expert Advice: Our team of fitness experts is always available to provide guidance, answer your questions, and help you choose the right equipment for your needs.</li>
            <li>Customer Satisfaction: Your satisfaction is our top priority. We are committed to providing excellent customer service and support, from the moment you browse our website to the delivery of your order.</li>
            <li>Community Focus: We believe in the power of community. Join our online community to connect with fellow fitness enthusiasts, share your progress, and stay motivated.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            At Max Fit, we are committed to promoting a healthy lifestyle and helping you achieve your fitness goals. We continually strive to bring you the latest innovations in fitness equipment and accessories, ensuring that you have access to the best tools to enhance your workout experience.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Become a part of the Max Fit family today and take the first step towards a healthier, more active life. Explore our website to discover our wide range of fitness products, and let us help you reach your full potential.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions or need assistance? Our friendly customer service team is here to help. Feel free to reach out to us at <a href="mailto:[Email Address]" className="text-blue-500">[sabilarrahman36@gmail.com]</a> or call us at <a href="tel:[Phone Number]" className="text-blue-500">[+8801874736061]</a>. You can also follow us on social media for the latest updates, fitness tips, and exclusive offers.
          </p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;