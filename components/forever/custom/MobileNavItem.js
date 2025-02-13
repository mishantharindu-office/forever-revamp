import Link from "next/link";
import React from "react";

function MobileNavItem({ isfirst, text, url ,setShowNav}) {
  return (
    <div onClick={() => {
        setShowNav(false);
    }}>
      <Link href={url}>
        <div
          className={
            isfirst
              ? "w-full py-3 border cursor-pointer border-y-primary/40 group hover:bg-primary"
              : "w-full py-3 border cursor-pointer border-b-primary/40 group hover:bg-primary"
          }
          onClick={() => {}}
        >
          <p className="text-xl font-semibold uppercase text-primary font-['WorkSons'] text-center group-hover:text-white">
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MobileNavItem;
