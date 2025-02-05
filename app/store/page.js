import React from "react";

function store() {
    return (
        <>
            {/* Section 01 */}
            <section className="relative bg-white pt-20 px-5">
                <div className="container mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-semibold text-black">
                        Find a Store
                    </h2>
                    {/* Description */}
                    <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-base">
                        We’re talking about clean beauty gift sets, of course – and we’ve got a
                        bouquet of beauties for yourself or someone you love.
                    </p>
                </div>
            </section>

            {/* Section 02 Left Text Right Image*/}
            <section className="py-10 bg-white relative w-full md:w-full lg:w-3/4 h-auto mx-auto group ">
                <div className="flex flex-wrap h-[500px] m-5">

                    {/* <!-- Left Container --> */}
                    <div className="w-7/12 border-0 border-red-500 overflow-hidden">
                        <img
                            src="/images/mt-store-01.jpg" // Replace with the correct image URL
                            alt="Uploaded Image"
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* <!-- Right Container --> */}
                    <div className="w-5/12 border-0 border-red-500 p-2">
                        <div className="ml-14 pb-10 pt-5">
                            <h2 className="text-3xl font-semibold text-black">
                                New York Store
                            </h2>
                        </div>
                        {/* <!-- Right container grid (2 rows, 2 columns) --> */}
                        <div className="grid grid-cols-2 gap-2  ml-14">
                            {/* <!-- Each of the four sections inside the right container --> */}
                            <div className="border-0 border-black bg-white">
                                {/* <!-- Address Section --> */}
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Address</h3>
                                    </div>
                                    <p className="text-gray-600 font-light text-sm leading-7">
                                        3245 Abbot Kinney BLVD - PH Venice, CA 124
                                    </p>
                                    <a href="#" className="text-black font-normal mt-3 inline-block text-sm">Get Direction</a>
                                </div>
                            </div>
                            <div className="border-0 border-black bg-white">
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Hour of operation</h3>
                                    </div>
                                    <p className="text-black font-light text-sm leading-7">
                                        Mon - Fri: <span className="text-gray-600 font-light pl-7">08:30 - 20:00</span><br />
                                        Sat & Sun: <span className="text-gray-600 font-light pl-7">09:30 - 21:30</span>
                                    </p>
                                </div>
                            </div>
                            <div className="border-0 border-black bg-white">
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Contact</h3>
                                    </div>
                                    <p className="text-gray-600 font-light text-sm leading-7">
                                        Mobile: <span className="text-black font-light">068 26589 996</span><br />
                                        Hotline: <span className="text-black font-light">1900 26886</span><br />
                                        E-mail: <a href="mailto:hello@grace.com" className="text-gray-600 font-light">hello@grace.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="border-0 border-black bg-white">
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Social media</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 02 Left Image Right Text*/}
            <section className="py-10 bg-white relative w-full md:w-full lg:w-3/4 h-auto mx-auto group">
                <div className="flex flex-wrap h-[500px] m-5">

                    {/* <!-- Left Container --> */}
                    <div className="w-5/12 border-0 border-red-500 p-2">
                        <div className="mr-14 pb-10 p-5">
                            <h2 className="text-3xl font-semibold text-black">
                                New York Store
                            </h2>
                        </div>
                        {/* <!-- Right container grid (2 rows, 2 columns) --> */}
                        <div className="grid grid-cols-2 gap-2  mr-14">
                            {/* <!-- Each of the four sections inside the right container --> */}
                            <div className="border-0 border-black bg-white">
                                {/* <!-- Address Section --> */}
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Address</h3>
                                    </div>
                                    <p className="text-gray-600 font-light text-sm leading-7">
                                        3245 Abbot Kinney BLVD - PH Venice, CA 124
                                    </p>
                                    <a href="#" className="text-black font-normal mt-3 inline-block text-sm">Get Direction</a>
                                </div>
                            </div>
                            <div className="border-0 border-black bg-white">
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Hour of operation</h3>
                                    </div>
                                    <p className="text-black font-light text-sm leading-7">
                                        Mon - Fri: <span className="text-gray-600 font-light pl-7">08:30 - 20:00</span><br />
                                        Sat & Sun: <span className="text-gray-600 font-light pl-7">09:30 - 21:30</span>
                                    </p>
                                </div>
                            </div>
                            <div className="border-0 border-black bg-white">
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Contact</h3>
                                    </div>
                                    <p className="text-gray-600 font-light text-sm leading-7">
                                        Mobile: <span className="text-black font-light">068 26589 996</span><br />
                                        Hotline: <span className="text-black font-light">1900 26886</span><br />
                                        E-mail: <a href="mailto:hello@grace.com" className="text-gray-600 font-light">hello@grace.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="border-0 border-black bg-white">
                                <div className="p-5">
                                    <div className="flex justify-center md:justify-start items-center mb-3">
                                        <h3 className="text-lg font-semibold">Social media</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right Container --> */}
                    <div className="w-7/12 border-0 border-red-500 overflow-hidden">
                        <img
                            src="/images/mt-store-02.jpg" // Replace with the correct image URL
                            alt="Uploaded Image"
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>
            </section>

        </>


    );
}

export default store;
