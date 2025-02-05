"use client";

import * as React from "react";
import Link from "next/link";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineStar,
  HiOutlineShoppingCart,
  HiUser,
  HiMiniArrowRightOnRectangle,
  HiBanknotes,
  HiBars3,
} from "react-icons/hi2";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CaseUpper } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { useCartStore } from "@/context";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Nav() {
  const [navFixed, setNavFixed] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();
  const [cart, setCart] = useState();

  const cartRefresh = useCartStore((state) => state.cartRefresh);
  const setCartRefresh = useCartStore((state) => state.setCartRefresh);

  const [price, setPrice] = useState({
    total: 0,
    subtotal: 0,
  });

  const [filterComponents, setFilterComponents] = useState({
    categories: [],
    prices: [],
    sizes: [],
    filters: [],
    tags: [],
  });

  const fetchCartData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/cart/user/items?userId=${session?.user?.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        //console.log("data", data?.data);
        setCart(data?.data?.items);
        setPrice({
          total: data?.data?.total,
          subtotal: data?.data?.total,
        });
        setCartCount(data?.data?.items?.length);
      } else {
        console.log("Error", data);
        /* toast({
          title: "Failed to fetch cart",
          description: "Could not fetch cart. Please try again later.",
          variant: "destructive",
        }); */
      }
    } catch (error) {
      console.log("Error", error);
      /* toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      }); */
    }
  };

  const fetchMegaMenuData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/item/components`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setFilterComponents(data?.data);
        console.log("Components", data?.data);
      } else {
        toast({
          title: "Failed to fetch filter components",
          description:
            "Could not fetch filter components. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchMegaMenuData();
    if (session) {
      fetchCartData();
    } else {
      console.log("localCart");
    }
  }, [session, cartRefresh]);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  });

  const handleSignOut = async () => {
    try {
      setCartRefresh();
      await signOut({ redirect: false });
      router.push("/");
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  return (
    <header
      className={`top-0 z-50  py-2 transition-all duration-200 delay-75 sm:block ${
        navFixed
          ? "shadow bg-white fixed left-0 right-0"
          : "pt-4 md:pt-8 bg-gradient-to-b from-darkgray/20 to-transparent absolute left-0 right-0"
      }`}
    >
      <nav className="flex justify-between px-4 md:px-12 h-14">
        <div className="absolute lg:hidden left-0 right-0 flex items-center justify-center h-14">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/image/logo-black.png"
              width="358"
              height="52"
              className="w-auto h-4 md:h-6"
              alt="/image/logo-black.png"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center lg:hidden">
          <HiBars3 className="w-6 h-6 cursor-pointer " />
        </div>

        <div className="hidden lg:flex justify-center items-center ">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/image/logo-black.png"
              width="358"
              height="52"
              className="w-auto h-6"
              alt="/image/logo-black2.png"
            />
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex static items-center justify-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/#" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    navigationMenuTriggerStyle() + " uppercase bg-transparent"
                  }
                >
                  home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase bg-transparent">
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mx-2 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute left-[50%] translate-x-[-50%] w-screen bg-white shadow-lg z-50">
                <div className="flex w-screen item-center justify-center gap-4 p-4">
                  <div className="">
                    <h3 className="mb-2 text-lg font-semibold border-b pb-2">
                      Categories
                    </h3>
                    <ul className="grid grid-cols-5 gap-3 p-4">
                      {filterComponents.categories.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={{
                              pathname: "/shop",
                              query: {
                                category: category.name,
                                id: category.id,
                                meta: "category",
                              },
                            }}
                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {category.name}
                          </Link>

                          {category.subCategories?.length > 0 && (
                            <ul className="pl-4 mt-1 space-y-1">
                              {category.subCategories.map((sub) => (
                                <li key={sub.id}>
                                  <Link
                                    //href={`/shop?subcategory=${sub.name}&id=${sub.id}`}
                                    href={{
                                      pathname: "/shop",
                                      query: {
                                        subcategory: sub.name,
                                        id: sub.id,
                                      },
                                    }}
                                    className="block text-xs text-gray-500 hover:text-gray-700"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex h-full border"></div>

                  <div className="">
                    <h3 className="mb-2 text-lg font-semibold border-b pb-2">
                      Brands
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {filterComponents?.brands?.map((brand) => (
                        <li key={brand.id}>
                          <Link
                            href={{
                              pathname: "/shop",
                              query: {
                                brand: brand.name,
                                id: brand.id,
                                meta: "brand",
                              },
                            }}
                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {brand.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    navigationMenuTriggerStyle() + " uppercase bg-transparent"
                  }
                >
                  shop all
                </NavigationMenuLink>
              </Link>
              {/* <NavigationMenuTrigger className="uppercase bg-transparent">
                <Link href="/shop" legacyBehavior passHref>
                  Shop All
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent> */}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    navigationMenuTriggerStyle() + " uppercase bg-transparent"
                  }
                >
                  About Glowing
                </NavigationMenuLink>
              </Link>
              {/* <NavigationMenuTrigger className="uppercase bg-transparent">
                About Glowing
              </NavigationMenuTrigger>
              <NavigationMenuContent className="item-center justify-center mx-2 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute left-[50%] translate-x-[-50%] w-screen bg-white shadow-lg z-50">
                <ul className="grid grid-cols-2 gap-3 p-4 items-center justify-center w-screen">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-center space-x-0 lg:space-x-5">
          <NavigationMenu>
            <NavigationMenuList className="gap-3 lg:gap-0">
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <HiOutlineMagnifyingGlass className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-red-500 mx-4 my-2" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex">
                {session ? (
                  <NavigationMenuTrigger className="bg-transparent">
                    {session?.user?.image ? (
                      <Image
                        src={session?.user?.image}
                        width="50"
                        height="50"
                        className="w-full h-full rounded-full" // Added 'rounded-full' for full rounding
                        alt={session?.user?.name}
                        style={{ objectFit: "cover" }} // Ensures the image covers the area without distortion
                      />
                    ) : (
                      <HiOutlineUser className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-red-500" />
                    )}
                  </NavigationMenuTrigger>
                ) : (
                  <HiOutlineUser
                    className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-red-500 mx-4 my-2"
                    onClick={() => router.push("/auth/signin")}
                  />
                )}

                {session && (
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[300px]  lg:w-[300px] ">
                      <li onClick={() => router.push("/profile")}>
                        <NavigationMenuLink asChild>
                          <a
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                            )}
                          >
                            <div className="flex items-center justify-start space-x-3">
                              <HiUser className="w-4 h-4" />
                              <div className="text-sm font-medium leading-none">
                                My Profile
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li onClick={() => router.push("/order")}>
                        <NavigationMenuLink asChild>
                          <a
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                            )}
                          >
                            <div className="flex items-center justify-start space-x-3">
                              <HiBanknotes className="w-4 h-4" />
                              <div className="text-sm font-medium leading-none">
                                Orders
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li onClick={handleSignOut} className="cursor-pointer">
                        <NavigationMenuLink asChild>
                          <a
                            className={cn(
                              "block select-none rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="flex items-center space-x-3">
                              <HiMiniArrowRightOnRectangle className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                Sign out
                              </span>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden xl:flex">
                <NavigationMenuTrigger className="uppercase bg-transparent">
                  <HiOutlineStar className="w-6 h-6 cursor-pointer hover:text-red-500" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[300px]  lg:w-[300px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {cartCount > 0 ? (
                  <div className="relative">
                    <NavigationMenuTrigger className="uppercase bg-transparent">
                      <HiOutlineShoppingCart className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-red-500" />
                      <span className="absolute bottom-4 right-[24px] bg-red-500 text-white text-[8px] w-[18px] h-[18px] rounded-full item-center justify-center">
                        {cartCount}
                      </span>
                    </NavigationMenuTrigger>
                  </div>
                ) : (
                  <HiOutlineShoppingCart className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-red-500 mx-4 my-2" />
                )}
                {cart && cart.length > 0 && (
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] lg:w-[300px]">
                      {cart.map((i, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between text-sm w-full ${
                            i.isOutOfStock ? "line-through" : ""
                          }`}
                        >
                          <li className="text-gray-700 w-2/3 flex gap-1">
                            <Image
                              src={i.images[0].image}
                              width={50}
                              height={50}
                              alt="product image"
                            />
                            {i.item}({i.variantSKU}) x {i.quantity}
                          </li>
                          <div className="flex  w-1/3 items-end justify-end">
                            <span className="text-sm  w-full text-right font-semibold">
                              Rs. {i.total}.00
                            </span>
                          </div>
                        </div>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between px-4">
                      <p>Total</p>
                      <p className="font-semibold">Rs. {price.total}.00</p>
                    </div>
                    <button
                      className="w-full py-3 mt-2 bg-black text-white text-lg font-semibold hover:bg-gray-800"
                      onClick={() => {
                        router.push("/cart");
                      }}
                    >
                      Check the Cart
                    </button>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
