import { Section } from 'lucide-react'
import React from 'react'
import 'components/ui/button'
import { Button } from 'components/ui/button'

function login
  () {
  return (
    <>
      <section className="relative w-full h-auto px-5 py-10 mx-auto bg-white md:w-full lg:w-3/5 group">
        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
          <div className=" w-full space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold">My account</h1>
            </div>

            <div className="text-left">
              <h2 className="text-4xl font-semibold text-left my-6">Login</h2>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg px-8 py-10">
              <form className="space-y-6" action="#" method="POST">
                {/* Username or Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-normal text-gray-700 uppercase">
                    Username or Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-xs font-normal text-gray-700 uppercase">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Remember Me and Log In Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800">
                    Log In
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-left">
                <a href="#" className="font-medium text-black hover:text-gray-800">
                  Lost your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default login
