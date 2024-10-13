import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className="lg:w-full lg:h-full md:w-full md:h-full flex justify-center items-center lg:mt-10 md:mt-10 mt-0">
        <div className="w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] md:w-[60%] md:h-[60%] rounded-xl text-center lg:bg-white md:bg-white px-16 lg:py-20 md:py-20">
          <p className="w-40 mx-auto rounded-full p-2 my-5 bg-cyan-100 text-accent">
            29 January 2024
          </p>
          <h1 className="lg:text-4xl md:text-4xl text-xl w-full">The Rise of Quantum Computing</h1>
          <p className="lg:text-gray-400 md:text-gray-400 text-base-100 lg:mt-3 md:mt-3 mt-16 lg:w-3/4 md:w-3/4 mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
