import React from 'react';

const MosaicGallery = () => {
  const images = [
    { src: "https://media.istockphoto.com/id/1370782450/photo/shot-of-a-muscular-young-man-using-a-cellphone-while-exercising-in-a-gym.jpg?s=612x612&w=0&k=20&c=C0FiZBW4w9gYZ1wl4d28jHy6IeFniBKCGmfvdGabXSk=", alt: "Person 1", colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: "https://img.freepik.com/premium-photo/fully-equipped-gym-happy-clients-shot-young-man-doing-inventory-while-working-gym_590464-53937.jpg", alt: "Person 2", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://www.shutterstock.com/image-photo/id-like-sign-premium-membership-600nw-2149264135.jpg", alt: "Person 3", colSpan: "col-span-1", rowSpan: "row-span-2" },
    { src: "https://media.istockphoto.com/id/1287910461/photo/cheerful-fit-couple-on-white-background.jpg?s=612x612&w=0&k=20&c=wRuD6hog_RoPPuMy3S-tpjzuY_1biPCjeAG_HBm6JTQ=", alt: "Person 4", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: "https://img.freepik.com/premium-photo/gym-smile-portrait-man-with-arms-crossed-fitness-happiness-mockup-space-exercise-workout-happy-face-bodybuilder-personal-trainer-sports-club-owner-health-training_590464-198391.jpg", alt: "Person 5", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://media.istockphoto.com/id/1290661928/photo/life-is-too-short-not-to-work-out.jpg?s=612x612&w=0&k=20&c=myFVAZfixTyzJ1Vphl66TgvsUX405qdNshYWC4LqmBo=", alt: "Person 6", colSpan: "col-span-1", rowSpan: "row-span-1" },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Happy Customers
        </h1>
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.colSpan} ${image.rowSpan} overflow-hidden rounded-lg shadow-lg`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MosaicGallery;
