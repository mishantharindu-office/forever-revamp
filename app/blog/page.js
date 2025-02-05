import React from 'react'

function blog() {
    return (
        <>
            <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-20 px-5 bg-white text-center">
                <div className="max-w-3xl mx-auto bg-white overflow-hidden text-center">
                    {/* Image Section */}
                    <img
                        src="/images/mt_post_placeholder.jpg" // Replace with the actual image path
                        alt="Blog Post"
                        className="w-full h-[450px] object-cover"
                    />

                    <div className="p-6 pt-0 text-center justify-center">
                        {/* Badge */}
                        <span className="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-sm uppercase font-semibold tracking-wide hover:bg-black hover:text-white">
                            Make Up
                        </span>

                        {/* Title */}
                        <h2 className="mt-2 text-3xl font-bold text-gray-800">
                            Treat Your Makeup Like Jewelry For The Face
                        </h2>

                        {/* Author & Date */}
                        <div className="flex items-center justify-center mt-3 space-x-2">
                            {/* Author Image */}
                            <img
                                src="/images/mt_author_placeholder.png" // Replace with actual author image
                                alt="Author"
                                className="w-10 h-10 object-cover rounded-full"
                            />

                            {/* Author Name, Date, and Comments */}
                            <div className="flex items-center text-gray-700 space-x-2">
                                <p className="font-semibold">By g5plusacc</p>
                                <span>&middot;</span> {/* Separator */}
                                <p className="text-gray-500 text-sm">October 1, 2021</p>
                                <span>&middot;</span> {/* Separator */}
                                <p className="text-gray-500 text-sm">0 Comments</p>
                            </div>
                        </div>


                        {/* Excerpt */}
                        <p className="mt-4 text-gray-600">
                            Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool...
                        </p>

                        {/* Read More Button */}
                        <div className="mt-4 flex justify-center">
                            <a href="#"
                                className="block max-w-[250px] px-10 text-center bg-black text-white py-2 rounded-sm hover:bg-gray-800 transition duration-300">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default blog