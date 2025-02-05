"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Blog() {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/blog/front/all?page=0&size=10`,
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
          console.log("blogs", data?.data);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Blog 01 */}
          {blog?.list &&
            blog?.list.map((item, index) => (
              <div
                key={index}
                className="group max-w-3xl mx-auto bg-white overflow-hidden text-center border border-gray-200 hover:border-black"
              >
                <Image
                  src={item.thumbnail} // Replace with the actual image path
                  alt="Blog Post"
                  width={600}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <div className="p-6 pt-0 text-center justify-center">
                  {/* <span className="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-sm uppercase font-semibold tracking-wide hover:bg-black hover:text-white">
                    Make Up
                  </span> */}
                  <h2 className="mt-5 text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <div className="flex items-center justify-center mt-3 space-x-2">
                    <div className="flex items-center text-gray-700 space-x-2">
                      <p className="font-light text-sm hover:text-black">
                        {item.authorId}
                      </p>
                      <span>&middot;</span>
                      <p className="text-gray-500 text-sm hover:text-black">
                        {formatDate(item.createdAt)}
                        {/* October 1, 2021 */}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="default"
                  onClick={() =>
                    router.push({
                      pathname: `/blog2/blog`,
                      query: { id: item.id },
                    })
                  }
                  className="mb-2"
                >
                  Read More
                </Button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
