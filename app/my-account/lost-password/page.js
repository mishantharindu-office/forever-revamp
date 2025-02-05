import React from 'react'
import 'components/ui/button'
import { Button } from 'components/ui/button'

function lostpassword() {
    return (
        <>
            <section className="relative w-full h-auto px-5 py-40 mx-auto bg-white md:w-full lg:w-3/5 group">
                <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className=" w-full space-y-8">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-semibold">My account</h1>
                        </div>
                        <div className="bg-white px-8 ">
                            <form className="space-y-6" action="#" method="POST">
                                {/* Username or Email Field */}
                                <div className="space-y-2">
                                    <p className="text-gray-600 py-5">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                    <label htmlFor="email" className="block text-xs font-normal text-gray-700 uppercase">
                                        Username or Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="appearance-none rounded w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <Button type="submit" className="w-[25%] flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800">
                                        Reset Password
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default lostpassword