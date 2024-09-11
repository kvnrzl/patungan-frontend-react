import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    src: "https://asset.ayobantu.com/banner/FtpzK8Q2NC_1694166225.png",
    // src: "/src/assets/tim-marshall-cAtzHUz7Z8g-unsplash.jpg",
    link: "/",
  },
  {
    id: 2,
    src: "https://asset.ayobantu.com/banner/W5SEE6TLoe_1715881971.jpg",
    // src: "/src/assets/ben-white-PAiVzSmYy-c-unsplash.jpg",
    link: "/",
  },
  // { id: 3, src: "https://via.placeholder.com/800x400?text=Slide+3", link: "/" },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const history = useHistory();

  // Function to handle click and navigate to the image link
  // const handleImageClick = (link) => {
  //   history.push(link);
  // };

  // Auto-slide functionality with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to manually change slide using the pagination dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-5 w-full overflow-hidden">
      {/* Hero Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 px-10">
            <img
              src={image.src}
              alt={`Slide ${image.id}`}
              className="w-full h-97 object-cover cursor-pointer rounded-lg"
              // onClick={() => handleImageClick(image.link)}
            />
          </div>
        ))}
      </div>

      {/* Slider Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
