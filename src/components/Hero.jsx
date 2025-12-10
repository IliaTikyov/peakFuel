const Hero = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      {/* Background Image */}
      <img
        src="protein.jpg"
        alt="protein"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Text Overlay */}
      <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white drop-shadow-lg">
        Join and Get 50% Off
      </h1>
    </div>
  );
};

export default Hero;
