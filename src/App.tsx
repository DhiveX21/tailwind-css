function App() {
  return (
    <>
      <div className="bg-[url('/space.jpg')] bg-no-repeat bg-cover">
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
        <div className="highlight w-full flex justify-center bg-s_deepBlue backdrop-blur-3xl">
          <div className="highlight__wrapper min-h-[150px] md:px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center w-full max-w-[1366px]">
            <div className="highlight__item flex flex-col gap-4 text-center p-4 hover:drop-shadow-[0_0_10px_#eee] duration-300">
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
            <div className="highlight__item flex flex-col gap-4 text-center p-4 hover:drop-shadow-[0_0_10px_#eee] duration-300">
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
            <div className="highlight__item flex flex-col gap-4 text-center p-4 hover:drop-shadow-[0_0_10px_#eee] duration-300">
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
            <div className="highlight__item flex flex-col gap-4 text-center p-4 hover:drop-shadow-[0_0_10px_#eee] duration-300">
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
        <div className="product w-full flex justify-center  ">
          <div className="product__wrapper min-h-[150px] md:px-10 lg:px-20 flex flex-col justify-center items-center w-full max-w-[1366px] py-4 gap-4 my-10 mx-4">
            <div className="product__title text-white font-black text-2xl text-center mb-4">
              <h3>There is what you need.</h3>
              <hr />
              <p className="text-sm font-medium text-s_yellow">
                be Wise with your needs.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="product__item flex flex-col gap-4 bg-s_deepBlue/30 p-4 rounded-xl backdrop-blur-sm hover:scale-105 duration-300">
                <div className="product__item__title text-s_yellow font-bold text-2xl ">
                  <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="product__item__desc text-white text-sm">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati fuga voluptatem commodi dignissimos ut quam
                    inventore cum non! Nam, velit.
                  </p>
                </div>
                <div className="product__item__button text-white font-bold bg-s_purple rounded-xl px-4 py-2 w-1/3 hover:shadow-[0_0_10px_#eee] duration-100">
                  <button className="text-center w-full">Detail</button>
                </div>
              </div>
              <div className="product__item flex flex-col gap-4 bg-s_deepBlue/30 p-4 rounded-xl backdrop-blur-sm hover:scale-105 duration-300">
                <div className="product__item__title text-s_yellow font-bold text-2xl ">
                  <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="product__item__desc text-white text-sm">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati fuga voluptatem commodi dignissimos ut quam
                    inventore cum non! Nam, velit.
                  </p>
                </div>
                <div className="product__item__button text-white font-bold bg-s_purple rounded-xl px-4 py-2 w-1/3 hover:shadow-[0_0_10px_#eee] duration-100">
                  <button className="text-center w-full">Detail</button>
                </div>
              </div>
              <div className="product__item flex flex-col gap-4 bg-s_deepBlue/30 p-4 rounded-xl backdrop-blur-sm hover:scale-105 duration-300">
                <div className="product__item__title text-s_yellow font-bold text-2xl ">
                  <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="product__item__desc text-white text-sm">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati fuga voluptatem commodi dignissimos ut quam
                    inventore cum non! Nam, velit.
                  </p>
                </div>
                <div className="product__item__button text-white font-bold bg-s_purple rounded-xl px-4 py-2 w-1/3 hover:shadow-[0_0_10px_#eee] duration-100">
                  <button className="text-center w-full">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_detail w-full flex justify-center  ">
          <div className="product_detail__wrapper min-h-[150px] md:px-10 lg:px-20 flex flex-col justify-center items-center w-full max-w-[1366px] py-4 gap-4 my-10 mx-4">
            <div className="product_detail__title text-white font-black text-2xl text-center mb-4">
              <h3>There is what you need.</h3>
              <hr />
              <p className="text-sm font-medium text-s_yellow">
                be Wise with your needs.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="product_detail__image w-full md:w-1/2 p-4 flex items-center justify-center">
                <img className="w-1/2" src="/rocket.png" alt="product 1" />
              </div>
              <div className="product_detail__text w-full md:w-1/2 p-4">
                <div className="product_detail__title text-white font-black text-3xl">
                  <h4>Lorem ipsum dolor sit.</h4>
                </div>
                <div className="product_detail__desc text-white font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur earum nisi maxime, consectetur corrupti
                  necessitatibus nesciunt. Pariatur ad quam reprehenderit
                  impedit cumque, nesciunt commodi iure nihil nam excepturi
                  accusantium dolores ullam nisi aspernatur corrupti
                  voluptatibus quos consectetur ea sint eligendi rerum. Totam
                  modi magni aliquam nemo ea! Magni, omnis minima?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_detail w-full flex justify-center  ">
          <div className="product_detail__wrapper min-h-[150px] md:px-10 lg:px-20 flex flex-col justify-center items-center w-full max-w-[1366px] py-4 gap-4 my-10 mx-4">
            <div className="product_detail__title text-white font-black text-2xl text-center mb-4">
              <h3>There is what you need.</h3>
              <hr />
              <p className="text-sm font-medium text-s_yellow">
                be Wise with your needs.
              </p>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-4 items-center">
              <div className="product_detail__image w-full md:w-1/2  p-4 flex items-center justify-center">
                <img className="w-1/2" src="/rocket.png" alt="product 1" />
              </div>
              <div className="product_detail__text w-full md:w-1/2  p-4">
                <div className="product_detail__title text-white font-black text-3xl">
                  <h4>Lorem ipsum dolor sit.</h4>
                </div>
                <div className="product_detail__desc text-white font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur earum nisi maxime, consectetur corrupti
                  necessitatibus nesciunt. Pariatur ad quam reprehenderit
                  impedit cumque, nesciunt commodi iure nihil nam excepturi
                  accusantium dolores ullam nisi aspernatur corrupti
                  voluptatibus quos consectetur ea sint eligendi rerum. Totam
                  modi magni aliquam nemo ea! Magni, omnis minima?
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer w-full flex justify-center  bg-gradient-to-r from-s_deepPurple to-s_purple rounded-t-[50%]">
          <div className="product_detail__wrapper min-h-[150px] md:px-10 lg:px-20 flex flex-col justify-center items-center w-full max-w-[1366px] py-4 gap-4 my-10 mx-4">
            <div className="footer__wrapper flex justify-evenly w-full text-center">
              <div className="footer__item  font-bold text-white">
                <div>
                  <div className="footer__item__title mb-2 underline">
                    <a href="">Footer 1 Title:</a>
                  </div>
                </div>
                <div className="footer__item__name flex-col flex gap-4">
                  <a href="">footer 1</a>
                  <a href="">footer 2</a>
                  <a href="">footer 3</a>
                </div>
              </div>
              <div className="footer__item  font-bold text-white">
                <div>
                  <div className="footer__item__title mb-2 underline">
                    <a href="">Footer 1 Title:</a>
                  </div>
                </div>
                <div className="footer__item__name flex-col flex gap-4">
                  <a href="">footer 1</a>
                  <a href="">footer 2</a>
                  <a href="">footer 3</a>
                </div>
              </div>
              <div className="footer__item  font-bold text-white">
                <div>
                  <div className="footer__item__title mb-2 underline">
                    <a href="">Footer 1 Title:</a>
                  </div>
                </div>
                <div className="footer__item__name flex-col flex gap-4">
                  <a href="">footer 1</a>
                  <a href="">footer 2</a>
                  <a href="">footer 3</a>
                </div>
              </div>
            </div>
            <div className="footer__acc flex gap-4 mt-4  items-center justify-center">
              <div className="footer__desc text-white w-1/2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                nam aperiam pariatur sunt! Recusandae error impedit, iure
                commodi at exercitationem possimus, modi sapiente, molestiae
                amet incidunt obcaecati soluta reiciendis nam!
              </div>
              <div className="w-1/2">
                <form
                  action=""
                  className="flex justify-center flex-col items-center"
                >
                  <label htmlFor="search" className="text-white font-bold">
                    Search...
                  </label>
                  <div className="flex w-1/2">
                    <input className="w-4/5 rounded-l-lg h-10" type="text" />
                    <button className="w-1/5 bg-s_yellow rounded-r-lg">
                      Go.
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
