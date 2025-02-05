import React from "react";

function tips() {

    return (
        <>
            <section className="relative w-full h-auto px-5 py-40 mx-auto md:w-full lg:w-3/5  bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold my-5">TIPS & ADVICE</h1>
                    <p className="text-base font-light">
                        We will not only provide the best products for your perosnal care,
                        but also help you with small tips and advices to maintain a healthy
                        skin and hair.
                    </p>
                </div>
            </section>

            {/* Face Tips */}
            <section className="bg-green-900 py-10 px-6">
                <div className="container mx-auto">
                    <h2 className="text-white text-3xl font-bold mb-8">FACECARE TIPS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/face-mt-001.jpeg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/face-mt-001.jpeg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/face-mt-001.jpeg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skincare Tips */}
            <section className="bg-gray-200 py-10 px-6">
                <div className="container mx-auto">
                    <h2 className="text-black uppercase text-3xl font-bold mb-8">Skincare Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/skin-mt.jpg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body Care Tips */}
            <section className="bg-green-900 py-10 px-6">
                <div className="container mx-auto">
                    <h2 className="text-white uppercase text-3xl font-bold mb-8">Body Care Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/body-mt.jpg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Haircare Tips */}
            <section className="bg-gray-200 py-10 px-6">
                <div className="container mx-auto">
                    <h2 className="text-black uppercase text-3xl font-bold mb-8">Haircare Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/hair-mt.jpg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-cover bg-center overflow-hidden w-full h-96"
                            style={{ backgroundImage: `url('/images/face-mt-001.jpeg')` }}
                        >
                            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-4">
                                <div>
                                    <p className="text-white mb-4">
                                        Do you know there are several types of acne that range from mild to severe.
                                    </p>
                                    <button className="flex items-center bg-black text-white px-4 py-2 hover:bg-black">
                                        <span>Watch Now</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default tips;
