"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"; // Import your existing dropdown menu components

function CategoryDropdown({ filterComponents }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full text-left p-2 rounded-md">
        Categories
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {filterComponents?.categories?.map((category) => (
          <DropdownMenuSub key={category.name}>
            <DropdownMenuSubTrigger className="w-full">
              {category.name}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-56">
              {category.subcategories?.map((subcategory) => (
                <DropdownMenuItem key={subcategory.name}>
                  {subcategory.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CategoryDropdown;
