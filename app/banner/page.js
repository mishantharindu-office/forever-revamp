import React from "react";

const banner = () => {
    return (
        <>
            {/* 01 - 3 column banner   */}
            <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-10 pt-10 px-5 bg-white text-center">
                <div className="my-12">
                    <h2 className="text-center text-4xl font-bold mb-8">Banner</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-05.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-semibold">Autumn Skincare</h3>
                                <a
                                    href="#"
                                    className="mt-2 text-sm font-medium flex items-center"
                                >
                                    Discover Now <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-03.jpg"
                                alt="Anti-aging Cream"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-semibold">Anti-aging Cream</h3>
                                <a
                                    href="#"
                                    className="mt-2 text-sm font-medium flex items-center"
                                >
                                    Buy 1 Get 1 <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-04.jpg"
                                alt="Sale Up To 40% Off"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-semibold">Sale Up To 40% Off</h3>
                                <a
                                    href="#"
                                    className="mt-2 text-sm font-medium flex items-center"
                                >
                                    Shop Sale <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 - 2 column banner   */}
            <section className="relative bg-gray-50 py-10 px-5">
                <div className="my-12 w-full md:w-full lg:w-3/4 h-auto mx-auto  text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-01.jpg"
                                alt="Autumn Skincare"
                                className="w-auto h-[420px] object-cover"
                            />
                            <div className="absolute top-10 lg:left-16 left-5 text-black max-w-[350px]">
                                <p className="pt-5 pb-3">NEW COLLECTION</p>
                                <h3 className="text-3xl font-semibold leading-[50px]">
                                    Intensive Glow C+ Serum
                                </h3>
                                {/* Read More Button */}
                                <div className="mt-4 flex justify-start">
                                    <a
                                        href="#"
                                        className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                    >
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-02.jpg"
                                alt="Autumn Skincare"
                                className="w-auto h-[420px] object-cover"
                            />
                            <div className="absolute top-10 lg:left-16 left-5 text-black max-w-[350px]">
                                <h3 className="text-3xl font-semibold leading-[50px]">
                                    25% off Everything
                                </h3>
                                <p className="pt-5 pb-3 text-sm max-w-[250px]">
                                    Makeup with extended range in colors for every human.
                                </p>
                                {/* Read More Button */}
                                <div className="mt-4 flex justify-start">
                                    <a
                                        href="#"
                                        className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                    >
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03 - 3 column banner   */}
            <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-10 pt-10 px-5 bg-white text-left">
                <div className="my-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-08.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-10 text-black">
                                <h3 className="text-3xl font-semibold leading-[60px]">
                                    Autumn Skincare
                                </h3>
                                <p className="font-medium text-base">Starting at $17.99</p>
                            </div>

                            <div className="absolute bottom-6 left-10 text-black">
                                <a
                                    href="#"
                                    className="mt-2 text-base font-medium flex items-center"
                                >
                                    Shop Now <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-06.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-10 text-black">
                                <h3 className="text-3xl font-semibold leading-[60px]">
                                    What’s New?
                                </h3>
                                <p className="font-medium text-base">Get the glow</p>
                            </div>

                            <div className="absolute bottom-6 left-10  text-black">
                                <a
                                    href="#"
                                    className="mt-2 text-base font-medium flex items-center"
                                >
                                    Discover Now <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-07.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-10 text-black">
                                <h3 className="text-3xl font-semibold leading-[60px]">
                                    Buy 1 Get 1
                                </h3>
                                <p className="font-medium text-base">Starting at $7.99</p>
                            </div>

                            <div className="absolute bottom-6 left-10 text-black">
                                <a
                                    href="#"
                                    className="mt-2 text-base font-medium flex items-center"
                                >
                                    Discover Now <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 04 -  2 Column Left Lager */}
            <section className="relative pb-10 pt-10 px-5 bg-gray-50">
                <div className="w-full md:w-full lg:w-3/4 h-auto mx-auto">
                    <div className="container py-10">
                        <div className="flex justify-between space-x-8">
                            {/* Left Banner Card */}
                            <div className="relative w-full md:w-full lg:w-4/6">
                                <img
                                    src="images/banner-mt-10.jpg" // Replace with actual image link
                                    alt="Autumn Skincare"
                                    className="w-full h-[420px] object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-start p-10 lg:pr-[60%] ">
                                    <div>
                                        <p className="text-base text-black mb-2">NEW COLLECTION</p>
                                        <h2 className="text-4xl text-black font-medium leading-[50px]">
                                            Discover Our Autumn Skincare
                                        </h2>
                                        {/* Read More Button */}
                                        <div className="mt-4 flex justify-start">
                                            <a
                                                href="#"
                                                className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                            >
                                                Explore More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Banner Card */}
                            <div className="relative w-full md:w-full lg:w-2/6 ">
                                <img
                                    src="images/banner-mt-09.jpg" // Replace with actual image link
                                    alt="25% off Everything"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-start p-10 ">
                                    <div>
                                        <h2 className="text-4xl text-black font-medium leading-[50px]">
                                            25% off Everything
                                        </h2>
                                        <p className="text-sm text-black mt-2 mb-2 p-10 lg:pr-[40%]">
                                            Makeup with extended range in colors for every human
                                        </p>
                                        {/* Read More Button */}
                                        <div className="mt-4 flex justify-start">
                                            <a
                                                href="#"
                                                className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                            >
                                                Explore More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 05 - 2 column banner   */}
            <section className="relative bg-white py-10 px-5">
                <div className="my-12 w-full md:w-full lg:w-3/4 h-auto mx-auto  text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="relative text-center">
                            <img
                                src="/images/banner-mt-12.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[420px] object-cover"
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-13.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[420px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 06 - 3 column banner   */}
            <section className="relative pb-10 pt-10 px-5 bg-gray-50 text-center">
                <div className="my-12 w-full md:w-full lg:w-3/5 h-auto mx-auto ">
                    <div className="my-12">
                        <h2 className="text-center text-4xl font-medium mb-3">
                            Featured Collection
                        </h2>
                        <p className="text-center text-base font-light mb-8 text-gray-500">
                            Our products are designed for everyone.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-25.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-10 left-0 right-0">
                                {/* Read More Button */}
                                <div className="mt-4 flex justify-center">
                                    <a
                                        href="#"
                                        className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                    >
                                        Repair Serum
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-23.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-10 left-0 right-0">
                                {/* Read More Button */}
                                <div className="mt-4 flex justify-center">
                                    <a
                                        href="#"
                                        className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                    >
                                        Anti-aging Cream
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-24.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-10 left-0 right-0">
                                {/* Read More Button */}
                                <div className="mt-4 flex justify-center">
                                    <a
                                        href="#"
                                        className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                    >
                                        Essenstial Items
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 07 -  Section 2 By 3 */}
            <section className="relative bg-white py-10 px-5">
                <div className="my-12 w-full md:w-full lg:w-3/4 h-auto mx-auto  text-center">
                    <div className="my-12">
                        <h2 className="text-center text-4xl font-medium mb-3">
                            Shop by Categories
                        </h2>
                        <p className="text-center text-base font-light mb-8 text-gray-500">
                            Our products are designed for everyone.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Card */}
                        <div className="relative text-center">
                            <img
                                src="/images/banner-mt-18.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-10 left-0 right-0">
                                {/* Read More Button */}
                                <div className="mt-4 flex justify-center">
                                    <a
                                        href="#"
                                        className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                    >
                                        Skincare
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Right 1 Row card 01 */}
                                <div className="relative text-center">
                                    <img
                                        src="/images/banner-mt-15.jpg"
                                        alt="Autumn Skincare"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-10 left-0 right-0">
                                        {/* Read More Button */}
                                        <div className="mt-4 flex justify-center">
                                            <a
                                                href="#"
                                                className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                            >
                                                Bodaycare
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right 1 Row card 02 */}
                                <div className="relative">
                                    <img
                                        src="/images/banner-mt-16.jpg"
                                        alt="Autumn Skincare"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-10 left-0 right-0">
                                        {/* Read More Button */}
                                        <div className="mt-4 flex justify-center">
                                            <a
                                                href="#"
                                                className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                            >
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right 2 Row card 01 */}
                            <div className="relative mt-5">
                                <img
                                    src="/images/banner-mt-17.jpg"
                                    alt="Autumn Skincare"
                                    className="w-full h-[420px] object-cover"
                                />
                                <div className="absolute bottom-10 left-0 right-0">
                                    {/* Read More Button */}
                                    <div className="mt-4 flex justify-center">
                                        <a
                                            href="#"
                                            className="block max-w-[250px] px-10 text-center bg-white text-black py-2 rounded-sm hover:bg-black hover:text-white transition duration-300 shadow-2xl"
                                        >
                                            Haircare
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 08 - 3 column banner   */}
            <section className="relative pb-10 pt-10 px-5 bg-gray-50 text-left">
                <div className="my-12 w-full md:w-full lg:w-3/4 h-auto mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-29.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[420px] object-cover"
                            />

                            <div className="absolute bottom-6 left-10 text-black max-w-[150px]">
                                <h3 className="text-3xl font-semibold leading-[40px]">
                                    Essenstial
                                    Items
                                </h3>
                                <a
                                    href="#"
                                    className="mt-2 text-base font-medium flex items-center"
                                >
                                    Get 1 Buy 1  <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-30.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[420px] object-cover"
                            />

                            <div className="absolute bottom-6 left-10 text-black max-w-[150px]">
                                <h3 className="text-3xl font-semibold leading-[40px]">
                                    Save
                                    on Sets
                                </h3>
                                <a
                                    href="#"
                                    className="mt-2 text-base font-medium flex items-center"
                                >
                                    Save $15.99  <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative">
                            <img
                                src="/images/banner-mt-31.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[420px] object-cover"
                            />

                            <div className="absolute bottom-6 left-10 text-black max-w-[150px]">
                                <h3 className="text-3xl font-semibold leading-[40px]">
                                    25% off
                                    Everything
                                </h3>
                                <a
                                    href="#"
                                    className="mt-2 text-base font-medium flex items-center"
                                >
                                    Shop Sale  <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default banner;
