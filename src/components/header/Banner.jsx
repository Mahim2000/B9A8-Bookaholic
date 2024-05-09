import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex justify-center mb-11">
      <div className="lg:w-[1280px] lg:h-[550px] w-full rounded-[32px] bg-center bg-cover">
        <div className="flex items-center justify-center w-full h-full rounded-[32px] bg-[#1f1f1f0d] bg-opacity-35 py-12">
          <div className="w-full text-center">
            <div className="container px-4 flex items-center justify-around">
              <div className="max-w-[450px] text-left">
                <h2 className="mt-8 mb-11 text-4xl lg:text-6xl font-bold text-black times-new-roman">
                  Books to freshen up your Bookshelf
                </h2>
                <div>
                <Link to='/list' className="btn w-[180px] h-[56px] px-[25px] py-[16px] border-green-500 bg-green-500 hover:bg-green-600 focus:bg-green-600 text-white">
                            View The List
                            </Link>
                </div>
              </div>
              <div className="text-xl font-medium lg:w-[350px] lg:h-[500px] flex justify-around items-center w-full rounded-[32px] bg-center bg-cover">
                <img
                  src="/banner-book.png"
                  alt="Banner Book"
                  className="w-[70%] h-[70%] object-cover rounded-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
