import React from "react";
import "/components/ui/button.jsx"
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <>
      <section className="relative  bg-gray-50 ">
        <div className="min-h-screen w-full md:w-full lg:w-3/4 xl:w-3/4 h-auto mx-auto pb-10 pt-40 text-left">
          {/* Main container with sidebar and content */}
          <div className="container mx-auto px-5 lg:flex gap-8">
            {/* Left sidebar */}
            <div className="w-full lg:w-1/4 bg-white rounded-lg shadow p-6 mb-6 lg:mb-0">
              <ul>
                <li className="text-lg font-semibold mb-5">ACCOUNT MAIN</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer mb-4">New Orders</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer mb-4">Order History</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer mb-4">My Wishlist</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer mb-4">Transactions</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer mb-4">Profile Settings</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer mb-4">Log Out</li>
              </ul>
            </div>

            {/* Right content */}
            <div className="w-full lg:w-3/4 bg-white rounded-lg shadow p-6">
              {/* Profile and Addresses */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Mr. Jackson Mike</h2>
                <p className="text-gray-600">Email: myusername@gmail.com, Phone: +1234567890988</p>

                <div className="lg:flex gap-4 mt-4">
                  <div className="bg-gray-100 p-3 mt-5 rounded w-full">
                    United States, 3601 Old Capitol Trail, Unit A-7, Suite
                  </div>
                  <div className="bg-gray-100 p-3 mt-5 rounded w-full">
                    Moscow city, Street name, Building lenin, House 77
                  </div>
                </div>
                <Button className="mt-5">+ Add New Address</Button>
              </div>

              {/* Orders Section */}
              <h2 className="text-lg font-semibold mb-4">Your Orders</h2>

              {/* Order 1 */}
              <div className="border border-gray-300 rounded p-4 mb-6">
                <div className="container lg:flex">
                  <div className="w-full lg:w-1/2 bg-white">
                    <h3 className="font-bold">Order ID: 8924 <span className="text-green-600 font-bold">Shipped</span></h3>
                    <p>Date: 16 December 2022</p>
                  </div>
                  <div className="w-full lg:w-1/2 bg-white">
                    <div className="flex lg:justify-end max-sm:mt-5">
                      <Button className="bg-red-500 text-white py-2 px-4 rounded mr-4"> Cancel Order</Button>
                      <Button className="bg-blue-500 text-white py-2 px-4 rounded"> Track Order</Button>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-6 py-3">
                  {/* Contact Info */}
                  <div className="pr-8">
                    <h4 className="font-semibold">Contact</h4>
                    <p>Mike Johnatan</p>
                    <p>Phone: 371-295-9131</p>
                    <p>Email: info@mywebsite.com</p>
                  </div>

                  {/* Shipping Address */}
                  <div className="pr-8">
                    <h4 className="font-semibold">Shipping address</h4>
                    <p>United States, 3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808</p>
                  </div>

                  {/* Payment Info */}
                  <div className="pr-8">
                    <h4 className="font-semibold">Payment</h4>
                    <p className="text-green-600">Visa **** 4216</p>
                    <p>Shipping fee: $56</p>
                    <p>Total paid: $456</p>
                  </div>
                </div>

                {/* Items */}
                <div className="flex space-x-4">
                  {/* Product 01 */}
                  <div className="">
                    {/* Order products */}
                    <div className="container lg:flex items-center">
                      {/* product image */}
                      <div className="w-full lg:w-2/5 bg-white p-3">
                        <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-[100px] h-[100px]" />
                      </div>
                      {/* product details */}
                      <div className="w-full lg:w-3/5 bg-white p-3">
                        <p>T-shirts with multiple colors</p>
                        <p>2x = $25.98</p>
                      </div>
                    </div>
                  </div>

                  {/* Product 02 */}
                  <div className="">
                    {/* Order products */}
                    <div className="container lg:flex items-center">
                      {/* product image */}
                      <div className="w-full lg:w-2/5 bg-white p-3">
                        <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-[100px] h-[100px]" />
                      </div>
                      {/* product details */}
                      <div className="w-full lg:w-3/5 bg-white p-3">
                        <p>T-shirts with multiple colors</p>
                        <p>2x = $25.98</p>
                      </div>
                    </div>
                  </div>

                  {/* Product 03 */}
                  <div className="">
                    {/* Order products */}
                    <div className="container lg:flex items-center">
                      {/* product image */}
                      <div className="w-full lg:w-2/5 bg-white p-3">
                        <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-[100px] h-[100px]" />
                      </div>
                      {/* product details */}
                      <div className="w-full lg:w-3/5 bg-white p-3">
                        <p>T-shirts with multiple colors</p>
                        <p>2x = $25.98</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* Order 2 */}
              <div className="border border-gray-300 rounded p-4 mb-6">
                <div className="container lg:flex">
                  <div className="w-full lg:w-1/2 bg-white">
                    <h3 className="font-bold">Order ID: 9088 <span className="text-red-600 font-bold">Pending</span></h3>
                    <p>Date: 16 December 2022</p>
                  </div>
                  <div className="w-full lg:w-1/2 bg-white">
                    <div className="flex lg:justify-end max-sm:mt-5">
                      <Button className="bg-red-500 text-white py-2 px-4 rounded mr-4"> Cancel Order</Button>
                      <Button className="bg-blue-500 text-white py-2 px-4 rounded"> Track Order</Button>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-6 py-3">
                  {/* Contact Info */}
                  <div className="pr-8">
                    <h4 className="font-semibold">Contact</h4>
                    <p>Mike Johnatan</p>
                    <p>Phone: 371-295-9131</p>
                    <p>Email: info@mywebsite.com</p>
                  </div>

                  {/* Shipping Address */}
                  <div className="pr-8">
                    <h4 className="font-semibold">Shipping address</h4>
                    <p>United States, 3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808</p>
                  </div>

                  {/* Payment Info */}
                  <div className="pr-8">
                    <h4 className="font-semibold">Payment</h4>
                    <p className="text-green-600">Visa **** 4216</p>
                    <p>Shipping fee: $56</p>
                    <p>Total paid: $456</p>
                  </div>
                </div>

                {/* Items */}
                <div className="flex space-x-4">
                  {/* Product 01 */}
                  <div className="">
                    {/* Order products */}
                    <div className="container lg:flex items-center">
                      {/* product image */}
                      <div className="w-full lg:w-2/5 bg-white p-3">
                        <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-[100px] h-[100px]" />
                      </div>
                      {/* product details */}
                      <div className="w-full lg:w-3/5 bg-white p-3">
                        <p>T-shirts with multiple colors</p>
                        <p>2x = $25.98</p>
                      </div>
                    </div>
                  </div>

                  {/* Product 02 */}
                  <div className="">
                    {/* Order products */}
                    <div className="container lg:flex items-center">
                      {/* product image */}
                      <div className="w-full lg:w-2/5 bg-white p-3">
                        <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-[100px] h-[100px]" />
                      </div>
                      {/* product details */}
                      <div className="w-full lg:w-3/5 bg-white p-3">
                        <p>T-shirts with multiple colors</p>
                        <p>2x = $25.98</p>
                      </div>
                    </div>
                  </div>

                  {/* Product 03 */}
                  <div className="">
                    {/* Order products */}
                    <div className="container lg:flex items-center">
                      {/* product image */}
                      <div className="w-full lg:w-2/5 bg-white p-3">
                        <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-[100px] h-[100px]" />
                      </div>
                      {/* product details */}
                      <div className="w-full lg:w-3/5 bg-white p-3">
                        <p>T-shirts with multiple colors</p>
                        <p>2x = $25.98</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>


  );
};

export default Dashboard;
