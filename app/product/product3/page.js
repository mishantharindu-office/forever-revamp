import React from "react";

function Product3() {
    return (
        <>
            {/* Product Images */}
            <section className="relative w-full md:w-full lg:w-3/4 xl:w-3/5 h-auto mx-auto pb-10 pt-40 px-5 bg-white text-center lg:text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Main product image and thumbnails */}
                    <div className="flex flex-col items-start">
                        <img
                            src="/images/mt-product-07-1.jpg"
                            alt="Perfecting Facial Oil"
                            className="w-auto h-[720px] object-cover"
                        />
                        <div className="flex mt-4 space-x-4">
                            {/* Thumbnails */}
                            <img
                                src="/images/mt-product-07-1.jpg"
                                alt="Thumbnail 1"
                                className="w-[100px] h-[134px] object-cover border border-gray-300"
                            />
                            <img
                                src="/images/mt-product-07-2.jpg"
                                alt="Thumbnail 2"
                                className="w-[100px] h-[134px] object-cover border border-gray-300"
                            />
                            <img
                                src="/images/mt-product-07-3.jpg"
                                alt="Thumbnail 3"
                                className="w-[100px] h-[134px] object-cover border border-gray-300"
                            />
                            <img
                                src="/images/mt-product-07.jpg"
                                alt="Thumbnail 3"
                                className="w-[100px] h-[134px] object-cover border border-gray-300"
                            />
                        </div>
                    </div>

                    {/* Right: Product details */}
                    <div className="text-left xl:pr-[10%]">
                        <p className="text-xl text-black mt-2 font-medium">$20.00</p>
                        <h1 className="text-3xl font-semibold mt-3">Perfecting Facial Oil</h1>

                        <div className="flex items-center mt-2">
                            <span className="text-green-500 font-semibold">★★★★★</span>
                            <p className="text-gray-500 ml-2"> | (1 customer review)</p>
                        </div>
                        <p className="text-gray-500 mt-4">This is a simple product.</p>

                        {/* Product Additional Details  */}
                        <div className="mb-5">

                            {/* 1st Selection */}
                            <div className="space-y-4 my-5">

                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        value=""
                                        onChange=""
                                        className="text-center bg-gray-100 max-w-[250px] h-[55px] mr-2"
                                        min="1"
                                    />
                                    <label htmlFor="color" className="text-base font-medium mb-1 w-[250px] pl-5">Enriched Hand Wash</label>
                                    <span className="text-base text-black font-semibold">$10.00</span>
                                </div>
                            </div>

                            {/* 2st Selection */}
                            <div className="space-y-4 my-5">

                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        value=""
                                        onChange=""
                                        className="text-center bg-gray-100 max-w-[250px] h-[55px] mr-2"
                                        min="1"
                                    />
                                    <label htmlFor="color" className="text-base font-medium mb-1 w-[250px] pl-5">Vital Eye Cream</label>
                                    <span className="text-base text-black font-semibold">$20.00</span>
                                </div>
                            </div>

                            {/* 3st Selection */}
                            <div className="space-y-4 my-5">

                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        value=""
                                        onChange=""
                                        className="text-center bg-gray-100 max-w-[250px] h-[55px] mr-2"
                                        min="1"
                                    />
                                    <label htmlFor="color" className="text-base font-medium mb-1 w-[250px] pl-5">Perfecting Facial Oil</label>
                                    {/* Prices */}
                                    <div className="mb-2">
                                        <span className="text-gray-500 line-through mr-2">$25.00</span>
                                        <span className="text-black font-bold">$23.00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="w-full py-3 bg-black text-white text-lg font-semibold  hover:bg-gray-800">
                                Add To Cart
                            </button>

                        </div>


                        {/* Wishlist and Sharing Options */}
                        <div className="flex items-center mt-4">
                            <button className="text-gray-500 hover:text-black flex items-center space-x-2">
                                <span>☆</span> <span>Add to wishlist</span>
                            </button>
                            <span className="mx-4">|</span>
                            <button className="text-gray-500 hover:text-black">Share</button>
                        </div>

                        {/* Product Info: SKU, Category, Tags */}
                        <div className="mt-8 text-gray-600">
                            <span className="block mb-2">
                                <label className="inline-block min-w-[100px] text-black text-sm font-medium">SKU: </label>
                                <span className="text-sm font-normal text-gray-500">woo-polo</span>
                            </span>
                            <span className="block mb-2">
                                <label className="inline-block min-w-[100px] text-black text-sm font-medium">Category: </label>
                                <span className="text-sm font-normal text-gray-500">Skincare</span>
                            </span>
                            <span className="block mb-2">
                                <label className="inline-block min-w-[100px] text-black text-sm font-medium">Tags: </label>
                                <span className="text-sm font-normal text-gray-500">Coffee Bean, Eye Cream, Healthy</span>
                            </span>
                        </div>

                        {/* Social Sharing Buttons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-500 hover:text-black">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black">
                                <i className="fab fa-tumblr"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </section>

            {/* Product Description */}
            <section className="relative w-full md:w-full lg:w-3/5 h-auto mx-auto pb-10 pt-10 lg:pt-40 px-5 bg-white text-left">
                {/* Discription */}
                <div>
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </div>

                {/* Additional information */}
                <div>
                    <h2 className="text-xl font-semibold">Additional information</h2>
                    <p>Color</p>
                </div>

                {/* Reviews */}
                <div>
                    <h2 className="text-xl font-semibold">Reviews</h2>
                    <div className="p-0">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-5">01 review for Perfecting Facial Oil</h3>
                            <div key="" className="pb-4 mb-4">
                                <div className="flex ">
                                    <img className="w-[80px] h-[80px] rounded-full" src="/images/banner-mt-01.jpg" />
                                    <div className="container pl-5">
                                        <div className="text-yellow-500 text-base">
                                            ★★★★★
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-black font-semibold">John   </span>
                                            <span className="text-sm text-gray-500">  - 2024-09-30</span>
                                        </div>
                                        <p>Good</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Add a review</h3>
                            <p className="text-gray-400 my-5">Your email address will not be published. Required fields are marked *</p>
                            <form onSubmit="" className="space-y-4">
                                <div>
                                    <label className="block mb-2 font-medium">Your rating *</label>
                                    <div className="flex space-x-2">
                                        <button
                                            type="button"
                                            key=""
                                            className=""
                                            onClick=""
                                        >
                                            ★
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">Your review *</label>
                                    <textarea
                                        name="comment"
                                        value=""
                                        onChange=""
                                        required
                                        className="w-full p-2 bg-gray-100"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block mb-2 font-medium">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value=""
                                            onChange=""
                                            required
                                            className="w-full p-2 bg-gray-100"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block mb-2 font-medium">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value=""
                                            onChange=""
                                            required
                                            className="w-full p-2 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-black text-white py-3 px-8 font-medium hover:bg-gray-800"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

            {/* Related Product */}
            <section className="relative w-full md:w-full lg:w-3/5 h-auto mx-auto pb-10 pt-10 px-5 bg-white text-center">
                <h2 className="text-4xl text-black font-bold my-5">Related products</h2>
                <div className="my-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                        {/* Card 1 */}
                        <div className="relative pb-5 text-center">
                            <img
                                src="/images/product-03.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[350px] object-cover"
                            />

                            {/* Discount */}
                            <div className="absolute w-[60px] top-3 left-3 py-1 px-4 bg-green-900 rounded">
                                <span className="text-white text-sm font-semibold">3%</span>
                            </div>

                            <div className="relative py-2 mb-5 text-black text-center">
                                {/* Prices */}
                                <div className="mb-2">
                                    <span className="text-gray-500 line-through mr-2">$25.00</span>
                                    <span className="text-black font-bold">$23.00</span>
                                </div>
                                {/* Product deatils */}
                                <p className="font-normal text-base">Supreme Polishing Treatment</p>
                                <div className="text-green-900">
                                    ★★★★★
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative pb-5 text-center">
                            <img
                                src="/images/product-04.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[350px] object-cover"
                            />

                            <div className="relative py-2 mb-5 text-black">
                                {/* Prices */}
                                <div className="mb-2">
                                    <span className="text-black font-bold mr-2">$25.00</span>
                                    <span className="text-black font-bold">$23.00</span>
                                </div>
                                <p className="font-normal text-base">Supreme Polishing Treatment</p>
                                <div className="text-green-900">
                                    ★★★★★
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative pb-5 text-center">
                            <img
                                src="/images/product-13.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[350px] object-cover"
                            />
                            <div className="relative py-2 mb-5 text-black">
                                <h3 className="text-base font-semibold">
                                    $45.00
                                </h3>
                                <p className="font-normal text-base">Supreme Polishing Treatment</p>
                                <div className="text-green-900">
                                    ★★★★★
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative pb-5 text-center">
                            <img
                                src="/images/product-16.jpg"
                                alt="Autumn Skincare"
                                className="w-full h-[350px] object-cover"
                            />
                            <div className="relative py-2 mb-5 text-black">
                                <h3 className="text-base font-semibold">
                                    $45.00
                                </h3>
                                <p className="font-normal text-base">Supreme Polishing Treatment</p>
                                <div className="text-green-900">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Product3;
