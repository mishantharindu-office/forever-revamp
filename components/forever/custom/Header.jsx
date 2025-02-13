"use client"

import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  SearchIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Navitem from "./navitem";
import LangDropDown from "./LangDropDown";
import NavMenu from "./NavMenu";
import SearchIco from "./SearchIcon";
import CartIcon from "./CartIcon";
import WishListIcon from "./WishListIcon";
import { useEffect, useState } from "react";
import AccountIcon from "./AccountIcon";
import NavMenuGift from "./NavMenuGift";
import MobileNavItem from "./MobileNavItem";

function Header() {
  const [Megamenu, setMegamenu] = useState({});
  const [ShowMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/product/details", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Private-Network": true,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          },
        })
          .then(
            async (res) => await res.json()
            // res.json()
          )
          .then((data) => {
            console.log("Megamenu", data);
            setMegamenu(data.data);
            // setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className="z-50 px-[30px] sm:px-[130px] pb-2 overflow-visible">
      <div className="flex sm:flex-row flex-col justify-between mx-auto pt-5 w-full">
        <div className="flex-1 w-1/3"></div>
        <div className="flex flex-1 justify-center items-center w-full sm:w-1/3">
          <Image
            className="w-44 cursor-pointer"
            src="/assets/image/logo/logo.png"
            alt={"foreaver"}
            height={50}
            width={100}
            objectFit={"contain"}
          ></Image>
        </div>
        <div className="flex justify-between items-center py-5 sm:py-0 w-full sm:w-1/3">
          <div className="sm:hidden py-4 w-full">
            <div
              className="group hover:bg-primary px-3 py-2 border border-primary rounded-sm w-fit cursor-pointer"
              onClick={() => {
                setShowMobileNav(!ShowMobileNav);
              }}
            >
              <MenuIcon className="group-hover:text-white h-6 text-slate-800" />
            </div>
          </div>
          <div className="flex flex-1 justify-center sm:justify-end items-center mt-4 w-full">
            <SearchIco />
            <AccountIcon Icon={UserIcon} />
            {/* <WishListIcon Icon={HeartIcon} /> */}
            {/* <CartIcon Icon={ShoppingBagIcon} /> */}
          </div>
        </div>
      </div>

      <div
        className={
          ShowMobileNav
            ? "fixed inset-0 z-[101] h-screen bg-white overflow-y-scroll flex flex-col"
            : "hidden"
        }
      >
        <div className="px-2 py-4 w-full">
          <XIcon
            className="ml-3 h-8 text-slate-800 hover:text-red-800 cursor-pointer"
            onClick={() => {
              setShowMobileNav(!ShowMobileNav);
            }}
          />
        </div>
        <MobileNavItem
          text={"face"}
          url={"/product/categoryview/1"}
          isfirst={true}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"body"}
          url={"/product/categoryview/2"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"hair"}
          url={"/product/categoryview/3"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"baby"}
          url={"/product/categoryview/4"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"health care"}
          url={"/product/categoryview/5"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"safe care"}
          url={"/product/categoryview/6"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"men"}
          url={"/product/categoryview/7"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"Gift"}
          url={"/gift"}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <div className="h-5"></div>
        <MobileNavItem
          text={"join us"}
          url={""}
          isfirst={true}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"tips & advice"}
          url={""}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
        <MobileNavItem
          text={"about us"}
          url={""}
          isfirst={false}
          setShowNav={setShowMobileNav}
        />
      </div>
      {/* <nav className="hidden sm:flex sm:flex-row flex-col justify-between gap-10 sm:gap-0 mt-10 sm:mt-2 overflow-visible">
        <div className="flex justify-between space-x-5 bg-white overflow-visible text-gray-900">
          <NavMenu
            name={"face"}
            url={"/product/categoryview/1"}
            Megamenu={Megamenu}
            id={1}
          />
          <NavMenu
            name={"body"}
            url={"/product/categoryview/2"}
            Megamenu={Megamenu}
            id={2}
          />
          <NavMenu
            name={"hair"}
            url={"/product/categoryview/3"}
            Megamenu={Megamenu}
            id={3}
          />
          <NavMenu
            name={"baby"}
            url={"/product/categoryview/4"}
            Megamenu={Megamenu}
            id={4}
          />
          <NavMenu
            name={"health care"}
            url={"/product/categoryview/5"}
            Megamenu={Megamenu}
            id={5}
          />
          <NavMenu
            name={"safe care"}
            url={"/product/categoryview/6"}
            Megamenu={Megamenu}
            id={6}
          />
          <NavMenu name={"men"} url={"/product/categoryview/7"} />
          <NavMenuGift name={"gifts"} url={"/gift"} />
        </div>
        <div className="flex justify-between sm:space-x-6 pt-1 text-sm">
          <Navitem text={"join us"} url={"#"} />
          <Navitem text={"tips & advice"} url={"/tips"} />
          <Navitem text={"about us"} url={"/about/aboutus"} />
          <div className={"z-auto"}>
            <LangDropDown />
          </div>
        </div>
      </nav> */}
    </header>
  );
}

export default Header;
