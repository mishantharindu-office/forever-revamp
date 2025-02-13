import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { TrashIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { CartContext } from "../pages/_app";

function CartIcon({ Icon }) {
  const [ShowCart, setShowCart] = useState(false);
  const [Cart, setCart] = useState(null);
  const { data: session, status } = useSession();

  const { CartStatus, setCartStatus } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/shoppingbag", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.token.token,
          },
        })
          .then(
            async (res) => await res.json()
            // res.json()
          )
          .then((data) => {
            console.log("Cart Item ", data);
            setCart(data.data);
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

  async function removeFromcart(id) {
    console.log("Delete");

    if (id > 0) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/shoppingbag/" + id,
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
  async function removeGiftCardFromcart(id) {
    console.log("Delete");

    if (id > 0) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/shoppingbag/card/" + id,
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
  async function removeGiftPackFromcart(id) {
    console.log("Delete");

    if (id > 0) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/shoppingbag/pack/" + id,
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
      <div className="relative" onClick={() => setShowCart(!ShowCart)}>
        <Icon className="h-6 mx-4 cursor-pointer text-primary" />
        {(Cart?.products?.length > 0 ||
          Cart?.giftPacks?.length > 0 ||
          Cart?.giftCards?.length > 0) && (
          <div className="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full right-1 -top-2">
            <p className="text-white font-semibold font-['WorkSons'] text-[12px]">
              {Cart?.products?.length +
                Cart?.giftPacks?.length +
                Cart?.giftCards?.length}
            </p>
          </div>
        )}
      </div>
      {ShowCart && (
        <div className="sm:absolute z-[101] sm:w-[440px] min-h-[250px] bg-white border border-t-4 border-t-primary  sm:right-10 sm:top-7 px-3 py-2 fixed inset-0 sm:left-auto sm:bottom-auto">
        {/* <div className="sm:absolute z-[101] sm:w-[440px] min-h-[250px] bg-white border border-t-4 border-t-primary  sm:right-10 sm:top-7 px-3 py-2 fixed inset-0"> */}
        {/*  <div className="absolute z-50 w-[440px] min-h-[250px] bg-white border border-t-4 border-t-primary  right-0 top-7 px-3 py-2"> */}
          <div
            className="fixed inset-0 w-screen h-screen bg-white/5 -z-10"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="flex items-center justify-between">
            <p className="font-['WorkSons'] text-primary text-2xl font-bold pl-3 pt-2">
              Your Shopping Bag
            </p>
            <div onClick={() => setShowCart(false)}>
              <XIcon className="w-8 h-8 mr-2 cursor-pointer sm:w-6 sm:h-6"></XIcon>
            </div>
          </div>
          <div className="px-5">
            <p className="font-['WorkSons'] text-primary text-base font-medium">
              Item(s)
            </p>
            <hr />
            <div>
              {/* Cart */}
              {Cart &&
                Cart?.products.map((cartitem, index) => (
                  <div
                    className="flex items-center justify-start w-full px-2 py-3 my-1 bg-secondary/50"
                    key={index}
                  >
                    <div>
                      <Image
                        alt="Product Image"
                        src={cartitem?.images}
                        height={70}
                        width={70}
                        layout={"intrinsic"}
                      />
                    </div>
                    <div className="w-full pl-4 ">
                      <p className="font-['WorkSons'] text-primary text-base font-medium uppercase m-0 p-0">
                        {cartitem?.productName}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          {cartitem?.productSize} Quantity -{cartitem?.quantity}
                        </p>
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          Rs.{parseFloat(cartitem?.price)*cartitem?.quantity}
                        </p>
                      </div>

                      <div
                        className="flex items-center justify-end w-full cursor-pointer group"
                        onClick={() =>
                          removeFromcart(cartitem?.productHasProductSizeId)
                        }
                      >
                        <TrashIcon className="w-5 h-5 text-primary group-hover:text-red-600" />
                        <p className="font-['WorkSons'] text-primary text-sm hover:underline pl-1 group-hover:text-red-600">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              {/* Gift Packs */}
              {Cart &&
                Cart?.giftPacks.map((cartitem, index) => (
                  <div
                    className="flex items-center justify-start w-full px-2 py-3 my-1 bg-secondary/50"
                    key={index}
                  >
                    <div>
                      <Image
                        alt="Product Image"
                        src={cartitem?.images[0].image}
                        height={70}
                        width={70}
                        layout={"intrinsic"}
                      />
                    </div>
                    <div className="w-full pl-4 ">
                      <p className="font-['WorkSons'] text-primary text-base font-medium uppercase m-0 p-0">
                        {cartitem?.name}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          {cartitem?.productSize} Quantity -1
                        </p>
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          Rs.{cartitem?.price}
                        </p>
                      </div>

                      <div
                        className="flex items-center justify-end w-full cursor-pointer group"
                        onClick={() => removeGiftPackFromcart(cartitem?.id)}
                      >
                        <TrashIcon className="w-5 h-5 text-primary group-hover:text-red-600" />
                        <p className="font-['WorkSons'] text-primary text-sm hover:underline pl-1 group-hover:text-red-600">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              {/* Gift Cards */}
              {Cart &&
                Cart?.giftCards.map((cartitem, index) => (
                  <div
                    className="flex items-center justify-start w-full px-2 py-3 my-1 bg-secondary/50"
                    key={index}
                  >
                    <div>
                      <Image
                        alt="Product Image"
                        src={"/assets/image/product/bp3.png"}
                        // src={cartitem?.images}
                        height={70}
                        width={70}
                        layout={"intrinsic"}
                      />
                    </div>
                    <div className="w-full pl-4 ">
                      <p className="font-['WorkSons'] text-primary text-base font-medium uppercase m-0 p-0">
                        {cartitem?.card}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          {cartitem?.price} Quantity -{cartitem?.qty}
                        </p>
                        <p className="font-['WorkSons'] text-primary text-sm m-0 p-0 mt-2">
                          Rs.{cartitem?.price}
                        </p>
                      </div>

                      <div
                        className="flex items-center justify-end w-full cursor-pointer group"
                        onClick={() => removeGiftCardFromcart(cartitem?.id)}
                      >
                        <TrashIcon className="w-5 h-5 text-primary group-hover:text-red-600" />
                        <p className="font-['WorkSons'] text-primary text-sm hover:underline pl-1 group-hover:text-red-600">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
            <div className="flex items-center justify-between mt-6">
              <p className="font-['WorkSons'] text-primary text-base font-bold uppercase">
                Total
              </p>
              <p className="font-['WorkSons'] text-primary text-base font-bold uppercase">
                Rs.{Cart && Cart?.total}
              </p>
            </div>
            <div className="flex items-center justify-center mb-6 bt-5">
              <Link href={"/shoppingbag"}>
                <button className="bg-primary text-base font-['WorkSons'] font-medium text-white cursor-pointer w-1/2 h-12 uppercase">
                  View Bag
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartIcon;
