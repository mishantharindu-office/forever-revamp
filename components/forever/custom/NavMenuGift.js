import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavMenuGift({ name, url, id }) {
  const [Megamenu, setMegamenu] = useState([]);
  const [Visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  return (
    <div
      className="z-[9] overflow-visible"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ul className="flex">
        <li className="hoverable hover:text-teal-600">
          <Link href={url}>
            <p className="relative text-sm font-semibold uppercase cursor-pointer text-primary font-['WorkSons'] p-0 m-0 inline-block hover:text-subtext">
              {name}
            </p>
          </Link>
          <div
            className={
              Visible
                ? "p-6 mb-16 shadow-xl  sm:px-28 bg-secondary  sm:mb-1 mega-menu-hover"
                : "p-6 mb-16 shadow-xl  sm:px-28 bg-secondary mega-menu sm:mb-1"
            }
          >
            <div className="container flex flex-wrap justify-between w-full">
              <ul className="px-4 pt-6 pb-6 ">
                <div className={"border border-b-2 border-b-primary mb-3 pb-1"}>
                  <h3 className="mb-2 text-base font-medium text-primary text-bold font-[Recoleta]">
                    By Category
                  </h3>
                </div>
                {Megamenu &&
                  Megamenu.types?.map((item, index) => {
                    if (item.productTypeCategoryId == id) {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setVisible(false);
                          }}
                        >
                          <Link href={"/product/producttype/" + item?.id}>
                            <p className="block p-1 text-primary hover:text-slate-900 font-['WorkSons'] cursor-pointer">
                              {item.type}
                            </p>
                          </Link>
                        </li>
                      );
                    }
                  })}
              </ul>
              <ul className="px-4 pt-6 pb-6 ">
                <div className={"border border-b-2 border-b-primary mb-3 pb-1"}>
                  <h3 className="mb-2 text-base font-medium text-primary text-bold font-[Recoleta]">
                    Gift Cards
                  </h3>
                </div>
                <li
                  key={0}
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  <Link href="/giftcard">
                    <a
                      href=""
                      className="block p-1 text-primary hover:text-teal-700 font-['WorkSons']"
                    >
                      All Gift Cards
                    </a>
                  </Link>
                </li>
                {Megamenu &&
                  Megamenu.skinTypes?.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setVisible(false);
                      }}
                    >
                      <a
                        href="#"
                        className="block p-1 text-primary hover:text-teal-700 font-['WorkSons']"
                      >
                        {item.skinType}
                      </a>
                    </li>
                  ))}
              </ul>
              {/* <ul className="px-4 pt-6 pb-6 ">
                <div className={"border border-b-2 border-b-primary mb-3 pb-1"}>
                  <h3 className="mb-2 text-base font-medium text-primary text-bold font-[Recoleta]">
                    By Product Range
                  </h3>
                </div>
                {Megamenu &&
                  Megamenu.ranges?.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="block p-1 text-primary hover:text-teal-700 font-['WorkSons']"
                      >
                        {item.range}
                      </a>
                    </li>
                  ))}
              </ul>
              <ul className="px-4 pt-6 pb-6">
                <div className={"border border-b-2 border-b-primary mb-3 pb-1"}>
                  <h3 className="mb-2 text-base font-medium text-primary text-bold font-[Recoleta]">
                    By Brand
                  </h3>
                </div>
                {Megamenu &&
                  Megamenu.brands?.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="block p-1 text-primary hover:text-teal-700 font-['WorkSons']"
                      >
                        {item.brand}
                      </a>
                    </li>
                  ))}
              </ul> */}

              {/* <ul className="px-4 pt-6 pb-6 border-gray-600 lg:pt-3">
                <h3 className="mb-2 text-base font-medium text-primary text-bold font-[Recoleta]">
                  Endor
                </h3>
                <li className="pt-3">
                  <Image
                    src={"/assets/image/product/bp2.png"}
                    width={150}
                    height={150}
                    alt={""}
                  />
                </li>
              </ul> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavMenuGift;
