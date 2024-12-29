const Hero = () => {
    return (
      <>
        <section className="bg-bgColor text-white relative">
          <div className="mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            {/* Image positioned absolutely */}
            <img
              src="star-1.svg"
              alt=""
              className="absolute left-1/3 transform -translate-x-1/2 w-99 h-99"
            />
  
            {/* Text content */}
            <div className="relative mx-auto max-w-6xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-9xl text-white">
                I'M A FRONTEND
                <span className="sm:block"> DESIGNER </span>
              </h1>
            </div>

            {/* <img src="author.png" alt="" /> */}
          </div>
        </section>
      </>
    );
  };
  
  export default Hero;
  