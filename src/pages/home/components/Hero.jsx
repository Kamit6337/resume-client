const Hero = () => {
  return (
    <section className="w-full flex mobile:flex-col  justify-between tablet:gap-6 items-center">
      <main className="uppercase basis-1/2">
        <p>this is me</p>
        <p className="text-6xl tablet:text-5xl font-bold tracking-wider my-6">
          Amit Kumar
        </p>
        <p className="text_para w-[80%] tablet:w-[90%]">
          a proficient in his skill and would love to collaborate with other
          peoples to make a big thing.
        </p>
      </main>
      <div className="flex-1 mobile:w-full mobile:basis-72 mobile:flex mobile:justify-center mobile:items-center ">
        myImage
      </div>
    </section>
  );
};

export default Hero;
