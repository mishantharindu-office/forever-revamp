"use client"

import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchIco() {
  const [ShowSearch, setShowSearch] = useState(false);
  const [SearchText, setSearchText] = useState("");
  const router = useRouter();

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      router.push("/search/productsearch?value=" + SearchText);
    }
  }

  let className =
    "w-full px-1 text-gray-800 bg-transparent outline-none placeholder:text-gray-600 text-sm peer max-w-[350px] p-1 mt-2 border-b-2 border-primary transition-all duration-100 delay-200 hidden";
  if (ShowSearch) {
    className =
      "w-full px-1 text-gray-800 bg-transparent outline-none placeholder:text-gray-600 text-sm peer max-w-[350px] p-1 mt-2 border-b-2 border-primary transition-all duration-100 delay-200 ";
  } else {
    className =
      "w-full px-1 text-gray-800 bg-transparent outline-none placeholder:text-gray-600 text-sm peer max-w-[350px] p-1 mt-2 border-b-2 border-primary transition-all duration-100 delay-200 hidden";
  }

  function showSearchInput() {
    setShowSearch(!ShowSearch);
    // console.log("search", ShowSearch);

    // console.log("Class", className);
  }

  return (
    <div className={"flex justify-center items-center"}>
      <SearchIcon
        className="h-6 mx-4 cursor-pointer text-primary "
        onClick={showSearchInput}
      />
      <input
        type={"search"}
        value={SearchText}
        onChange={({ target }) => {
          setSearchText(target.value);
        }}
        onKeyDown={(event) => handleKeyPress(event)}
        placeholder="Type here to Search ..."
        className={className}
      ></input>
    </div>
  );
}

export default SearchIco;
