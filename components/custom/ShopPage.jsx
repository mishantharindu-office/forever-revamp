"use client";

import React, { useEffect, useState } from "react";
import BreadcrumbSection from "@/components/custom/BreadcrumbSection";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FaChevronDown,
  FaFilter,
  FaSearch,
  FaThLarge,
  FaThList,
} from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Item from "@/components/custom/product/Item";
import { generatePriceRanges } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { PaginationDemo } from "@/components/custom/PaginationSection";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import { useToast } from "@/hooks/use-toast";

const tags = ["Badge", "Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"];

function ShopPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId =
    searchParams.get("category") && searchParams.get("id")?.toString();
  const subCategoryId = searchParams.get("id")?.toString();
  const brandId =
    searchParams.get("brand") && searchParams.get("id")?.toString();

  const [isAsc, setIsAsc] = useState(false);
  const [sordBy, setSordBy] = useState("id");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [priceRange, setPriceRange] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [items, setItems] = useState([]);
  const [filterToggle, setFilterToggle] = useState(false);
  const [itemsLoading, setItemsLoading] = useState(false);
  const [componentsLoading, setComponentsLoading] = useState(false);
  const [filterItems, setFilterItems] = useState({
    startPrice: 1,
    endPrice: 0,
    categories: categoryId ? [categoryId] : [],
    brands: brandId ? [brandId] : [],
    ratingList: 0,
    tags: [],
    sortBy: "id",
  });
  const [filterComponents, setFilterComponents] = useState({
    categories: [],
    prices: [],
    sizes: [],
    filters: [],
    tags: [],
  });
  const [openCategories, setOpenCategories] = useState(
    categoryId ? [categoryId] : []
  );
  const [selectedBrands, setSelectedBrands] = useState(
    brandId ? [brandId] : []
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/item/components`,
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
        setPriceRange(generatePriceRanges(0, data?.data?.maxPrice, 1000));
        setSelectedPrice([0, data?.data?.maxPrice]);
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
      Toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const onFilter = async (page) => {
    filterItems.categories = openCategories;
    filterItems.brands = selectedBrands;
    filterItems.tags = [];
    filterItems.startPrice = selectedPrice[0] === 0 ? 1 : selectedPrice[0];
    filterItems.endPrice = selectedPrice[1];
    filterItems.ratingList = 0;
    filterItems.sortBy = sordBy;
    console.log("filterItems", filterItems);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/item/filter?page=${
          page ? page - 1 : 0
        }&size=${itemsPerPage}&order=${isAsc ? "1" : "0"}&status=1`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filterItems),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setItems(data?.data);
        console.log("FilteredItems", data);
      } else {
        toast({
          title: "Failed to filter",
          description: "Could not filter items. Please try again later.",
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
    fetchData();
    onFilter();
  }, [categoryId, brandId]);

  //to handle category and subcategory dropdown click
  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((name) => name !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((name) => name !== brandId)
        : [...prev, brandId]
    );
  };

  return (
    <>
      <div className="pt-20 md:px-[10%] sm:px-10">
        <BreadcrumbSection />
        <div className="flex items-center justify-center h-24">
          <p className="text-5xl font-semibold uppercase text-primary font-primary">
            Shop
          </p>
        </div>
        <div className="hidden w-full grid-cols-1 h-fit md:grid sm:grid-cols-4">
          <div className="flex w-full flex-col pt-5 px-5">
            <Section title="Categories">
              <table className="w-full my-3 text-sm font-[500] text-gray-500 uppercase font-primary">
                <tbody>
                  {filterComponents?.categories?.map((category) => (
                    <React.Fragment key={category.id}>
                      <tr
                        className={`w-full flex flex-col cursor-pointer hover:bg-slate-100 hover:rounded-md p-1${
                          openCategories.includes(category.id)
                            ? " bg-slate-100 rounded-md"
                            : ""
                        }`}
                      >
                        <td className="py-1 flex w-full justify-between items-center">
                          <div
                            className="flex gap-2"
                            onClick={() => toggleCategory(category.id)}
                          >
                            <Checkbox id={category.id} />
                            {category.name}
                          </div>
                          {category.subCategories.length > 0 && (
                            <FaChevronDown
                              className={`w-3 h-3 transition-transform duration-300 ${
                                openCategories.includes(category.id)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </td>
                      </tr>
                      {openCategories.includes(category.id) &&
                        category.subCategories.length > 0 && (
                          <tr className="bg-slate-100 rounded-md flex">
                            <td className="w-auto py-1 pl-10">
                              <ul>
                                {category.subCategories.map((subCategory) => (
                                  <li key={subCategory.name} className="py-1">
                                    {subCategory.name}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section title="Brands">
              <table className="w-full my-3 text-sm font-[500] text-gray-500 uppercase font-primary">
                <tbody>
                  {filterComponents?.brands?.map((brand) => (
                    <tr
                      key={brand.id}
                      className={`w-full flex flex-col cursor-pointer hover:bg-slate-100 hover:rounded-md p-1 ${
                        selectedBrands.includes(brand.id) ? "bg-slate-100" : ""
                      }`}
                    >
                      <td className="py-1">
                        <div
                          className="flex gap-2"
                          onClick={() => toggleBrand(brand.id)}
                        >
                          <Checkbox id={brand.id} />
                          {brand.name}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section title="Price">
              <ul className="w-full my-3 p-1 text-sm font-[500] text-gray-500 font-primary flex flex-col space-y-2">
                {priceRange?.map((price, index) => (
                  <li
                    key={index}
                    className={`w-full flex flex-col cursor-pointer hover:bg-slate-100 rounded-md p-1 ${
                      selectedPrice[0] === price[0] &&
                      selectedPrice[1] === price[1]
                        ? "bg-slate-100"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedPrice(price);
                    }}
                  >
                    {index === 0
                      ? "All"
                      : `Rs. ${price[0]}.00 - Rs. ${price[1]}.00`}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Tags">
              <div className="flex flex-wrap gap-2 my-3">
                {tags.map((tag, index) => (
                  <Badge key={index} className={`${"px-4 cursor-pointer"}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </Section>

            <Button
              className="flex items-center justify-center w-full"
              onClick={() => {
                onFilter();
              }}
            >
              <div className="flex ">
                <FaFilter className="w-5 h-5 mr-3 text-white" />
                <p>Filter</p>
              </div>
            </Button>
          </div>

          <div className="col-span-3">
            <div className="flex justify-around px-3">
              <div className="w-full my-5">
                <p className="text-base font-semibold font-primary text-primary">
                  Showing {items?.count === 0 ? 0 : `1 -${items?.count}`} of{" "}
                  {items?.count} results
                </p>
              </div>
              <div className="flex items-center justify-end w-full gap-3 my-5">
                <div>
                  <FaThLarge className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <FaThList className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Sort By Popularity</SelectItem>
                      <SelectItem value="light">
                        Sort By avarage rating
                      </SelectItem>
                      <SelectItem value="light">Sort By latest</SelectItem>
                      <SelectItem value="light">
                        Sort By price: low to high
                      </SelectItem>
                      <SelectItem value="light">
                        Sort By price:high to low
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="text" placeholder="Search" className="w-full" />
                </div>
              </div>
            </div>
            <div className="grid flex-1 w-full grid-cols-1 col-span-12 gap-3 sm:col-span-7 sm:grid-cols-4">
              {items?.list &&
                items?.list.map((item, index) => {
                  return <Item item={item} key={index} />;
                })}
            </div>
            {items?.count > 0 && (
              <PaginationDemo
                className="flex bottom-0"
                totalItems={items?.count}
                itemsPerPage={itemsPerPage}
                onPageChange={(page) => onFilter(page)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;

function Section({ title, children }) {
  return (
    <div className=" mb-6">
      <p className="mb-2 text-xl font-semibold font-primary text-primary">
        {title}
      </p>
      {children}
    </div>
  );
}
