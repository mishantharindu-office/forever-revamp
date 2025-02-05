import React from "react";
import 'components/ui/button';
import { Button } from "components/ui/button";

function createaccount() {
    return (
        <>
            <section className="relative w-full h-auto px-5 py-40 mx-auto bg-white md:w-full lg:w-3/5">
                <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h2 className="text-black text-3xl font-semibold ">
                            CREATE ACCOUNT
                        </h2>
                    </div>

                    <div className="w-full space-y-8 bg-white border border-gray-200 rounded-lg p-10">
                        <div className="flex justify-between my-4">
                            <button className="w-1/2 py-2 mr-2 bg-gray-100 text-black rounded border">
                                <i className="fab fa-google mr-2"></i>
                                Create with Google
                            </button>
                            <button className="w-1/2 py-2 bg-blue-600 text-white rounded border">
                                <i className="fab fa-facebook-f mr-2"></i>
                                Create with Facebook
                            </button>
                        </div>
                        <div className="text-center my-4 text-gray-500">Or</div>

                        <form className="space-y-4">
                            {/* First Name and Last Name */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-700">First Name *</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Last Name *</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email and Confirm Email */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Email Address *</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700">
                                        Confirm Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password and Confirm Password */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Password *</label>
                                    <input
                                        type="password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700">
                                        Repeat Password *
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Country Code and Phone Number */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Country Code *</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    >
                                        <option value="Sri Lanka (+94)">Sri Lanka (+94)</option>
                                        <option value="US (+1)">United States (+1)</option>
                                        <option value="UK (+44)">United Kingdom (+44)</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Phone Number *</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Notification Preferences */}
                            <div className="my-4">
                                <p className="text-gray-700">
                                    Please tick your preferred notification option/s if you like
                                    to hear about inspiration, New Arrivals and Latest Offers from
                                    us.
                                </p>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="text-green-500" />
                                        <span>Email</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="text-green-500" />
                                        <span>SMS</span>
                                    </label>
                                </div>
                            </div>

                            {/* Terms of Service Agreement */}
                            <div className="flex items-center my-4">
                                <input
                                    type="checkbox"
                                    className="text-green-500 mr-2"
                                    required
                                />
                                <label className="text-gray-700">
                                    I confirm that I am over the age of 16 and have read and
                                    agreed to the{" "}
                                    <a href="#" className="text-green-600">
                                        Terms of Service
                                    </a>
                                    .
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <Button type="submit"
                                    className="w-full py-3 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-600">
                                    CREATE ACCOUNT
                                </Button>
                            </div>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-gray-700">
                                Don t have an account?
                                <a href="#" className="text-green-600">
                                    SIGN IN
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default createaccount;
