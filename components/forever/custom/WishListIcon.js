import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { TrashIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { CartContext } from "../pages/_app";

function WishListIcon({ Icon }) {
  const [ShowWishList, setShowWishList] = useState(false);
  const [WishList, setWishList] = useState(null);
  const [ItemCount, setItemCount] = useState(0);
  const { data: session, status } = useSession();

  const { CartStatus, setCartStatus } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist/latest/product",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + session.token.token,
            },
          }
        )
          .then(
            async (res) => await res.json()
            // res.json()
          )
          .then((data) => {
            // console.log("Wish List Item Item ", data);
            setWishList(data?.data);
            // setWishListItemBadge(data?.data);
            // setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (session != null) {
      fetchData();
    }
  }, [session, CartStatus]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + session.token.token,
  //         },
  //       })
  //         .then(
  //           async (res) => await res.json()
  //           // res.json()
  //         )
  //         .then((data) => {
  //           console.log("Wish List Item Item ", data);
  //           setWishList(data?.data);
  //           setWishListItemBadge(data?.data);
  //           // setLoading(false);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (session != null) {
  //     fetchData();
  //   }
  // }, [session, CartStatus]);

  // function setWishListItemBadge(itemlist) {
  //   if (itemlist !== null) {
  //     let count = 0;
  //     itemlist.forEach((element) => {
  //       count = element?.productCount + count;
  //     });

  //     setItemCount(count);
  //   }
  // }

  async function removeFromWishlist(wishlistid, id) {
    console.log("Delete");

    if (id > 0) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          "/api/wishlist/" +
          wishlistid +
          "/" +
          id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.token.token,
          },
        }
      );
      const msg = await response.json();
      console.log("message", msg);
      if (msg.message === "success") {
        console.log("success", "Success!");
        setCartStatus(!CartStatus);
        console.log("Cart Sttatus ", CartStatus);
      } else {
        console.log("Bag Item add failed ");
      }
    } else {
      console.log("User not log in");
    }
  }

  return (
    <div className="relative">
      <div className="relative" onClick={() => setShowWishList(!ShowWishList)}>
        <Icon className="h-6 mx-4 cursor-pointer text-primary" />
        {/* {ItemCount > 0 && (
          <div className="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full right-1 -top-2">
            <p className="text-white font-semibold font-['WorkSons'] text-[12px]">
              {ItemCount}
            </p>
          </div>
        )} */}
      </div>
      {ShowWishList && (
        <div className="sm:absolute z-[101] sm:w-[440px] min-h-[250px] bg-white border border-t-4 border-t-primary  sm:right-0 sm:top-7 px-3 py-2 fixed inset-0 sm:left-auto sm:bottom-auto">
          <div
            className="fixed inset-0 w-screen h-screen bg-white/5 -z-10"
            onClick={() => setShowWishList(false)}
          ></div>
          <div className="before:contents[''] w-0 h-0 absolute border border-t-8 border-transparent border-b-8 border-r-8 top-2 -left-6"></div>
          <div className="flex items-center justify-between">
            <p className="font-['WorkSons'] text-primary text-xl font-bold pl-3 pt-2">
              Your Latest Wish List Items
            </p>
            <div onClick={() => setShowWishList(false)}>
              <XIcon className="w-8 h-8 mr-2 cursor-pointer sm:w-6 sm:h-6"></XIcon>
            </div>
          </div>
          <div className="max-h-screen px-5 overflow-y-scroll">
            <div>
              {/* Cart */}
              {WishList?.map((item, index) => {
                return (
                  <div
                    className="flex items-center justify-start w-full px-2 py-3 my-1 bg-secondary/50"
                    key={index}
                  >
                    <div>
                      <Image
                        alt="Product Image"
                        src={item?.image}
                        height={70}
                        width={70}
                        layout={"intrinsic"}
                      />
                    </div>
                    <div className="w-full pl-4 ">
                      <p className="font-['WorkSons'] text-primary text-base font-medium uppercase m-0 p-0">
                        {item?.name}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          {item?.productSize} Quantity - 1
                        </p>
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          Rs.{item?.productPrice}
                        </p>
                      </div>

                      <div
                        className="flex items-center justify-end w-full cursor-pointer group"
                        onClick={() => {
                          removeFromWishlist(wishlist?.id, item?.id);
                        }}
                      >
                        <TrashIcon className="w-5 h-5 text-primary group-hover:text-red-600" />
                        <p className="font-['WorkSons'] text-primary text-sm hover:underline pl-1 group-hover:text-red-600">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <hr />
            <div className="flex items-center justify-between mt-6">
              <p className="font-['WorkSons'] text-primary text-base font-bold uppercase">
                Total
              </p>
              <p className="font-['WorkSons'] text-primary text-base font-bold uppercase">
                Rs.{Cart && Cart?.total}
              </p>
            </div> */}
            <div className="flex items-center justify-center mt-6 mb-6 bt-5">
              <Link href={"/userprofile/wishlist"}>
                <button className="bg-primary text-base font-['WorkSons'] font-medium text-white cursor-pointer w-1/2 h-12 uppercase">
                  View Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishListIcon;
