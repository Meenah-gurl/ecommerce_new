


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-3">
           <div  className="bg-[#f2f1ec] rounded-3xl  overflow-hidden">
                <section>
                    <div className="flex justify-end">
                        <div>
                            <img className="-mt-4 pl-20" src="/landing-slider-4.png" alt="" />
                        </div>
                        <div className="flex justify-end items-center">
                            <img className="w-[130vh] -mt-32 -ml-56 -mr-24 -rotate-12  flex justify-end items-end" src="/landing-slider-5.png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-4xl  mx-auto">
                        <div className="flex">
                            <div className="content -mt-28">
                                <h3  className="text-3xl">Confectionery</h3>
                                <p className="lg:max-w-xs  text-6xl text-black">Make your Baking Better Tasting</p>
                            </div>
                            <div>
                                <img className="w-80 relative right-24" src="/baked.png" alt="" />
                            </div>
                            <div>
                                <img className="relative w-64 right-44 top-14" src="/bannerImage.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 -mt-5">
                                <span>
                                    <img className="w-28 -mt-7" src="/landing-slider-1.png" alt="" />
                                </span>
                                <span className="flex flex-col">
                                    <h4 className="text-3xl font-semibold font-sans">Chocolate Cake</h4>
                                    <p className="text-md max-w-xs">The quick, brown fox jumpz over a lazy dog. Djx flock by</p>
                                </span>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="lg:flex-row sm:flex-col lg:gap-5">
                                <button id="" className="w-48 py-3 px-6 bg-[#f4952c] rounded-full text-white  transition duration-300 ease-in-out cursor-pointer hover:bg-black text-md">Shop Now</button>
                                <button id="" className="w-48 py-3 px-6 rounded-full text-white  transition duration-300 ease-in-out cursor-pointer bg-black hover:bg-[#f4952c] text-md">Customer Order</button>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="flex gap-2 justify-center items-center">
                        <div>
                            <img className="w-60 mt-10" src="/landing-slider-9.png" alt="" />
                        </div>
                    </div>
                </section>
                
           </div>
        </div>
    )

}

export default Home;