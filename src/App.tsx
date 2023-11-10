function App() {
  return (
    <>
      <div className="bg-s_deepBlue">
        <div className="banner w-full flex bg-[url('/space.jpg')] bg-no-repeat bg-cover justify-center">
          <div className="banner__wrapper flex flex-col-reverse md:flex-row items-center justify-between md:px-10 lg:px-20 min-h-screen md:min-h-[600px] w-full max-w-[1366px] py-6">
            <div className="banner__text flex flex-col gap-2 justify-center w-full md:w-1/2 h-full px-4 md:px-0">
              <div className="banner__text__title  font-black text-3xl text-white drop-shadow-[0_0_10px_#1347f3]">
                <h1>Don't Get Lost.</h1>
              </div>
              <div className="banner__text__subtitle text-s_yellow font-black text-5xl drop-shadow-[0_0_10px_#1347f3]">
                <span>Be Productive!</span>
              </div>
              <div className="banner__text__description text-white font-bold text-md pr-4 drop-shadow-[0_0_3px_#eee]">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi quibusdam est recusandae magni temporibus modi nulla
                  blanditiis dignissimos sequi non!
                </span>
              </div>
              <div className="banner__text__button text-white font-bold text-md pr-4 mt-6 flex gap-4">
                <button className="bg-s_spaceBlue px-8 py-2 rounded-full shadow-lg">
                  Get Started
                </button>
                <button className="bg-s_purple px-8 py-2 rounded-full shadow-lg">
                  Let's Go!
                </button>
              </div>
            </div>
            <div className="banner__image flex items-center justify-center w-2/3 md:w-1/2 px-4 py-4 md:px-6">
              <img
                width={400}
                className="drop-shadow-[0_0_10px_#1347f3]"
                src="/chill_astronaut.png"
                alt="Astronaut in the moon."
              />
            </div>
          </div>
        </div>
        <div className="highlight w-full flex justify-center">
          <div className="highlight__wrapper min-h-[150px] md:px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center w-full max-w-[1366px]">
            <div className="highlight__item flex flex-col gap-4 text-center p-4">
              <div className="highlight__item__title text-white font-bold text-2xl ">
                <h4>Dreams</h4>
              </div>
              <hr />
              <div className="highlight__item__desc text-white">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro, eveniet?
                </span>
              </div>
            </div>
            <div className="highlight__item flex flex-col gap-4 text-center p-4">
              <div className="highlight__item__title text-white font-bold text-2xl ">
                <h4>Ambitions</h4>
              </div>
              <hr />
              <div className="highlight__item__desc text-white">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro, eveniet?
                </span>
              </div>
            </div>
            <div className="highlight__item flex flex-col gap-4 text-center p-4">
              <div className="highlight__item__title text-white font-bold text-2xl ">
                <h4>Hard Works</h4>
              </div>
              <hr />
              <div className="highlight__item__desc text-white">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro, eveniet?
                </span>
              </div>
            </div>
            <div className="highlight__item flex flex-col gap-4 text-center p-4">
              <div className="highlight__item__title text-white font-bold text-2xl ">
                <h4>Consitency</h4>
              </div>
              <hr />
              <div className="highlight__item__desc text-white">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro, eveniet?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
