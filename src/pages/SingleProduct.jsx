import Burger from "../assets/img/Burger.jpg";

const SingleProduct = () => {
  return (
    <div>
      <div className="p-3 max-w-7xl m-auto mb-96">
        <div className="mt-6 sm:mt-10">
          <div>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6 h-max">
              <div className="overflow-hidden rounded-xl">
                <img src={Burger} alt="Burger" className="w-full" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                    Burger
                  </h1>
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                    facilisis mauris sit amet
                  </p>
                  <span className="my-3 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        key={index}
                        fill="gold"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    ))}
                  </span>
                  <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                    $20
                  </span>
                </div>
                <div className=" ">
                  <div className="text-left flex flex-col gap-2 w-full">
                    <label className="font-semibold">Quantity</label>
                    <input
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                      type="number"
                      defaultValue="1"
                      required
                    />
                  </div>
                  <div className="w-full text-left my-4">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span>Confirm Order</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
