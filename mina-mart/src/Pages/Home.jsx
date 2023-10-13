


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-3">
           <div  className="bg-[#f2f1ec] rounded-3xl lg:px-0 px-4 overflow-hidden">
                <section>
                    <div className="flex justify-end">
                        <div>
                            <img className="lg:-mt-4 sm:mt-7 pl-20" src="/landing-slider-4.png" alt="" />
                        </div>
                        <div className="flex justify-end items-center">
                            <img className="lg:w-[130vh] sm:w-fit -mt-32 -ml-56 -mr-24 -rotate-12  flex justify-end items-end" src="/landing-slider-5.png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-4xl  mx-auto">
                        <div className="flex lg:flex-row sm:flex-col">
                            <div className="content lg:-mt-40 sm:mt-6">
                                <h3  className="text-3xl">Confectionery</h3>
                                <p className="lg:max-w-xs sm:max-w-md   lg:text-6xl sm:text-4xl text-black">Make your Baking Better Tasting</p>
                            </div>
                            <div>
                                <img className="lg:w-80 md:w-80 sm:w-60 relative lg:right-24 sm:right-24" src="/baked.png" alt="" />
                            </div>
                            <div>
                                <img className="relative lg:w-64 sm:w-56 lg:right-44 top-14 sm:to" src="/bannerImage.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="flex lg:flex-row sm:flex-col gap-2 lg:-mt-16 sm:mt-16">
                                <span>
                                    <img className="w-28 -mt-7" src="/landing-slider-1.png" alt="" />
                                </span>
                                <span className="flex flex-col">
                                    <h4 className="text-3xl font-semibold font-sans z-20">Chocolate Cake</h4>
                                    <p className="text-md max-w-xs">The quick, brown fox jumpz over a lazy dog. Djx flock by</p>
                                </span>
                            </div>
                        </div>
                        <div className="pt-8  ">
                            <div className=" lg:flex sm:block lg:justify-start sm:justify-center sm:items-center lg:flex-row sm:flex-col space-x-4 lg:space-y-0 sm:space-y-2">
                                <button id="" className="w-48 py-3 px-6 bg-[#f4952c] rounded-full text-white  transition duration-300 ease-in-out cursor-pointer hover:bg-black text-md">Shop Now</button>
                                <button id="" className="w-48 py-3 px-6 rounded-full text-white  transition duration-300 ease-in-out cursor-pointer bg-black hover:bg-[#f4952c] text-md">Customer Order</button>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="overflow-hidden">
                    <div className="flex gap-2 justify-center items-center">
                        <div className="relative top-14">
                            <img className="w-60" src="/landing-slider-9.png" alt="" />
                        </div>
                        <div className="relative lg:top-36 top-24">
                            <img src="/landing-slider-7.png" alt="no image" />
                        </div>
                    </div>
                </section>
                
           </div>
        </div>
    )

}

export default Home;