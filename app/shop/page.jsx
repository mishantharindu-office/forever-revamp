import ShopPage from "@/components/custom/ShopPage";

export async function generateMetadata({ searchParams }) {
  const metaType = searchParams.meta;
  const id = searchParams.id;

  let metaData = {
    title: "Shop",
    description: "Discover the latest products and brands.",
    slug: "/shop",
  };

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/item/metadata?meta=${metaType}&id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // Prevents caching issues
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Fetched metadata:", data);

      if (data?.data) {
        metaData = {
          title: data.data.metaTitle || metaData.title,
          description: data.data.metaDescription || metaData.description,
          slug: data.data.metaSlug || metaData.slug,
        };

        console.log("Updated metaData object:", metaData);
      }
    } else {
      console.error("Error fetching metadata:", response.statusText);
    }
  } catch (error) {
    console.error("Network error fetching metadata:", error);
  }

  return {
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      url: `https://yourwebsite.com${metaData.slug}`,
      type: "website",
    },
    robots: "index, follow",
  };
}

export default async function Page({ searchParams }) {
  const categoryId = searchParams.category || "";
  const brandId = searchParams.brand || "";

  return <ShopPage categoryId={categoryId} brandId={brandId} />;
}
