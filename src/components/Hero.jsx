const Hero = () => {
  return (
    <>
      <section className="bg-bgColor text-white relative">
        <div className="mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative">
          {/* Star image */}
          <img
            src="star-1.svg"
            alt=""
            className="absolute left-1/3 transform -translate-x-1/2 w-99 h-99"
          />

          {/* Text content */}
          <div className="relative mx-auto max-w-6xl text-center">
            {/* Author image positioned above text */}
            <img
              src="author.png"
              alt="Author"
              className="absolute top-[-250px] left-1/2 transform -translate-x-1/2"
            />

            {/* Text */}
            <h1 className="text-3xl font-extrabold sm:text-9xl text-white">
              I'M A FRONTEND
              <span className="sm:block"> DEVELOPER </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
