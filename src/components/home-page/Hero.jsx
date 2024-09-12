const HeroSection = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">
        Life Planning, Making <br /> Easy to Turn Dreams a Reality.
      </h1>
      <p className="text-gray-600 mb-8">
        Get Exclusive offers on purchase of any plans
      </p>
      <div className="flex justify-center items-center space-x-2">
        <input
          type="email"
          placeholder="Your Email"
          className="border px-4 py-2 rounded-full outline-none"
        />
        <button className="px-6 py-2 bg-black text-white rounded-full">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
