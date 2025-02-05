"use client";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogPost() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id")?.toString();
  const { toast } = useToast();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/blog/front/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${session?.user?.accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log("blog", data?.data);
          setBlog(data?.data);
        } else {
          console.log("Error", data);
          toast({
            title: "Failed to fetch blogs",
            description: "Could not fetch blogs. Please try again later.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.log("Error", error);
        toast({
          title: "Network error",
          description: "Could not connect to server. Please try again later.",
          variant: "destructive",
        });
      }
    };
    fetchData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <>
      <section className="relative w-full mt-20 h-auto sm:px-5 mx-auto bg-white md:w-full lg:w-4/5 group py-10">
        <div className="max-w-5xl mx-auto bg-white overflow-hidden text-center">
          <div className="max-w-5xl m-auto p-8 pt-0 text-center justify-center">
            {/* Badge */}
            {/* <span className="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-sm uppercase font-semibold tracking-wide hover:bg-black hover:text-white">
              Make Up
            </span> */}

            {/* Title */}
            <h2 className="mt-2 text-3xl font-bold text-gray-800">
              {blog?.title}
            </h2>
            <h3 className="mt-2 text-3xl font-bold text-gray-800">
              {blog?.subTitle}
            </h3>

            {/* Author & Date */}
            <div className="flex items-center justify-center mt-3 space-x-2">
              {/* Author Image */}
              <Image
                width={100}
                height={100}
                src="/images/mt_author_placeholder.png" // Replace with actual author image
                alt="Author"
                className="w-10 h-10 object-cover rounded-full"
              />

              {/* Author Name, Date, and Comments */}
              <div className="flex items-center text-gray-700 space-x-2">
                <p className="font-semibold">By {blog?.authorId}</p>
                <span>&middot;</span> {/* Separator */}
                <p className="text-gray-500 text-sm">
                  {formatDate(blog?.createdAt)}
                </p>
                <span>&middot;</span> {/* Separator */}
                <p className="text-gray-500 text-sm">0 Comments</p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <img
            src="/images/mt_post_placeholder.jpg" // Replace with the actual image path
            alt="Blog Post"
            className="w-full object-cover"
          />
          <div className="p-6 pt-5 text-center justify-center">
            {/* Excerpt */}
            <p className="mt-4 text-gray-600">
              Awkwardness gives me great comfort. I’ve never been cool, but I’ve
              felt cool. I’ve been in the cool place, but I wasn’t really cool –
              I was trying to pass for hip or cool. It’s the awkwardness that’s
              nice. We look our best in subdued colors, sophisticated cuts, and
              a general air of sleek understatement. I like the body. I like to
              design everything to do with the body.
            </p>
            {/* Image Section */}
            <img
              src="/images/single-blog-mt.jpg" // Replace with the actual image path
              alt="Blog Post"
              className="w-auto m-auto object-cover mt-10"
            />
            <p className="mt-4 text-gray-600">
              Producing the highest quality products
            </p>
          </div>
        </div>
      </section>

      {/* share section and post tags */}
      <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto p-0 px-5 bg-white text-center">
        <div className="max-w-5xl m-auto">
          <div className="border-b border-gray-300 mt-6 py-5 flex justify-between items-center">
            {/* Hashtag Section */}
            <div className="space-x-3">
              {blog?.tags?.map((tag, index) => (
                <span key={index} className="text-gray-500">
                  #{tag?.name}
                </span>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Share:</span>
              <a href="#" className="text-black hover:text-gray-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-500">
                <i className="fab fa-tumblr"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-500">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="mt-6 pt-4 flex justify-between items-center">
            {/* Previous Page */}
            <div className="space-x-3 text-left pl-10">
              <p className="text-gray-500 text-sm font-light uppercase ml-[12px]">
                Previous
              </p>
              <h4 className="text-black text-sm font-medium m-0">
                The Best Way To Select Good High-End Cosmetic Products
              </h4>
            </div>

            {/* Next Page */}
            <div className="space-x-2 text-right pr-10">
              <p className="text-gray-500 text-sm font-light uppercase mr-[12px]">
                Next
              </p>
              <h4 className="text-black text-sm font-medium mr-[12px]">
                The Best Way To Select Good High-End Cosmetic Products
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* related posts */}
      <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-10 px-5 bg-white text-center">
        <div className="max-w-5xl m-auto border-b border-gray-300 pb-14">
          <h2 className="m-10 text-3xl font-semibold">Related Post</h2>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Blog 01 */}
              <div className="group max-w-3xl mx-auto bg-white overflow-hidden text-left">
                {/* Image Section */}
                <img
                  src="/images/blog-08-mt.jpg" // Replace with the actual image path
                  alt="Blog Post"
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-0 justify-center">
                  {/* Badge */}
                  <span className="inline-block text-sm mt-5 text-gray-500">
                    Make Up
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-base font-semibold text-gray-800">
                    Treat Your Makeup Like Jewelry For The Face
                  </h3>
                </div>
              </div>

              {/* Blog 02 */}
              <div className="group max-w-3xl mx-auto bg-white overflow-hidden text-left">
                {/* Image Section */}
                <img
                  src="/images/blog-15-mt.jpg" // Replace with the actual image path
                  alt="Blog Post"
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-0 justify-center">
                  {/* Badge */}
                  <span className="inline-block text-sm mt-5 text-gray-500">
                    Hair & Body
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-base font-semibold text-gray-800">
                    Treat Your Makeup Like Jewelry For The Face
                  </h3>
                </div>
              </div>

              {/* Blog 03 */}
              <div className="group max-w-3xl mx-auto bg-white overflow-hidden text-left">
                {/* Image Section */}
                <img
                  src="/images/blog-14-mt.jpg" // Replace with the actual image path
                  alt="Blog Post"
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-0 justify-center">
                  {/* Badge */}
                  <span className="inline-block text-sm mt-5 text-gray-500">
                    Tips
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-base font-semibold text-gray-800">
                    Treat Your Makeup Like Jewelry For The Face
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Form */}
      <section className="py-5 bg-white relative w-full md:w-full lg:w-3/5 h-auto mx-auto group px-5">
        <div className="bg-white py-10">
          <div className="container mx-auto">
            {/* Form Title */}
            <h2 className="text-3xl font-semibold text-center mb-10">
              Leave a Reply
            </h2>
          </div>

          <div className="container mt-4 text-left">
            <p className="text-gray-400 text-sm font-light my-5">
              Your email address will not be published. Required fields are
              marked *
            </p>

            {/* Contact Form */}
            <form
              //   onSubmit={handleSubmit}
              className=""
            >
              {/* Message Input */}
              <div className="mt-4">
                <textarea
                  name="comment"
                  placeholder="Comment"
                  //   value={formData.message}
                  //   onChange={handleChange}
                  rows="5"
                  className="w-full p-3 rounded-none font-light focus:outline-none focus:ring-1 focus:ring-black bg-gray-100"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-5">
                {/* Name Input */}
                <div className="">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                    className="w-full p-3 rounded-none font-light focus:outline-none focus:ring-1 focus:ring-black bg-gray-100"
                  />
                </div>

                {/* Email Input */}
                <div className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                    className="w-full p-3 rounded-none font-light focus:outline-none focus:ring-1 focus:ring-black bg-gray-100"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="mt-5">
                <input
                  type="text"
                  name="website"
                  placeholder="Web Site"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                  className="w-full p-3 rounded-none font-light focus:outline-none focus:ring-1 focus:ring-black bg-gray-100"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6 text-left">
                <button
                  type="submit"
                  className="bg-black text-white font-light px-6 py-3 rounded-none focus:outline-none hover:bg-gray-800 transition"
                >
                  Post Comment
                </button>
              </div>

              <div class="flex items-center mt-5">
                <input
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <div className="mt-4 text-black text-center">
                Thank you! Your message has been sent.
              </div>
              {/* Message after submission
          {submitted && (
            <div className="mt-4 text-green-600 text-center">
              Thank you! Your message has been sent.
            </div>
          )} */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
