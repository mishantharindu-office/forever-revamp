import React from "react";

const contactus = () => {
    return (
        <>
            {/* Section 01 */}
            <section className="relative p-5 py-10 bg-white md:pt-20 md:pb-0 md:px-5">
                <div className="container mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-semibold text-black">
                        Keep In Touch with Us
                    </h2>
                    {/* Description */}
                    <p className="max-w-2xl mx-auto mt-6 text-base text-gray-500">
                        We’re talking about clean beauty gift sets, of course – and we’ve
                        got a bouquet of beauties for yourself or someone you love.
                    </p>
                </div>
            </section>

            {/* Google Map */}
            <section className="relative w-full h-auto px-5 py-10 mx-auto bg-white md:w-full lg:w-3/5 group">
                <div className="container mx-auto mt-10">
                    <div className="relative h-[400px]">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086455483766!2d144.96305791538263!3d-37.81410727975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xff9e9ed1e4967b77!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1638852955649!5m2!1sen!2sin"
                            allowFullScreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Section 02 left side Contact */}
            <section className="relative w-full h-auto px-5 py-10 mx-auto bg-white md:w-full lg:w-3/5 group">
                <div className="p-4 md:flex">

                    {/* <!-- Left Container (3/4 width) --> */}
                    <div className="w-3/4 max-md:w-full p-4 md:pr-[15%]">
                        {/* <!-- Left content goes here --> */}
                        <div className="container">
                            <div className="container mx-auto">
                                {/* Form Title */}
                                <h2 className="mb-10 text-3xl font-semibold text-left">
                                    Send A Message
                                </h2>

                                {/* Contact Form */}
                                <form
                                    //   onSubmit={handleSubmit}
                                    className="max-w-3xl mx-auto"
                                >
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {/* Name Input */}
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name*"
                                                // value={formData.name}
                                                // onChange={handleChange}
                                                required
                                                className="w-full p-3 font-light bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email*"
                                                // value={formData.email}
                                                // onChange={handleChange}
                                                required
                                                className="w-full p-3 font-light bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Input */}
                                    <div className="mt-4">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            //   value={formData.message}
                                            //   onChange={handleChange}
                                            rows="5"
                                            className="w-full p-3 font-light bg-gray-100 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-6 text-left">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 font-light text-white transition bg-black rounded-none focus:outline-none hover:bg-gray-800"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                    <div className="mt-4 text-left text-black">
                                        Thank you! Your message has been sent.
                                    </div>
                                    {/* Message after submission
                            {submitted && (
                                <div className="mt-4 text-center text-green-600">
                                Thank you! Your message has been sent.
                                </div>
                            )} */}
                                </form>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Right Container (1/4 width) --> */}
                    <div className="w-1/4 p-4 max-md:w-full">
                        {/* <!-- Right content goes here --> */}
                        <div className="container">
                            {/* <!-- Address Section --> */}
                            <div className="md:pr-0">
                                <div className="mb-3 text-left">
                                    <h3 className="text-lg font-semibold">Address</h3>
                                </div>
                                <p className="font-light leading-7 text-gray-600">
                                    3245 Abbot Kinney BLVD - PH Venice, CA 124 <br />
                                    76 East Houston Street New York City
                                </p>
                                <a href="#" className="inline-block mt-3 font-normal text-black">Get Direction</a>
                            </div>

                            {/* <!-- Contact Section --> */}
                            <div className="md:pr-0">
                                <div className="mt-5 mb-3 text-left">
                                    <h3 className="text-lg font-semibold ">Contact</h3>
                                </div>
                                <p className="font-light leading-7 text-gray-600">
                                    Mobile: <span className="font-light text-black">068 26589 996</span><br />
                                    Hotline: <span className="font-light text-black">1900 26886</span><br />
                                    E-mail: <a href="mailto:hello@grace.com" className="font-light text-gray-600">hello@grace.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </>
    );
};

export default contactus;
