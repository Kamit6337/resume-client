import CustomImages from "../../../assets/images/index";

const Hero = () => {
  return (
    <section className="w-full flex mobile:flex-col mobile:gap-20  justify-center tablet:gap-6 items-center">
      <main className="uppercase">
        <p>this is me</p>
        <p className="text-6xl tablet:text-5xl font-bold tracking-wider my-6">
          Amit Kumar
        </p>
        <p className="text_para w-[80%] tablet:w-[90%]">
          a proficient in his skill and would love to collaborate with other
          peoples to make a big thing.
        </p>
      </main>

      <div className="w-[450px] shadow-xl flex justify-center">
        <img
          src={CustomImages.heroProfile}
          alt="profile"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
