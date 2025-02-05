/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FQA() {
  return (
    <>
      {/* FAQ Title Section */}
      <div className="relative flex items-center justify-center h-1/4 w-full bg-white">
        <div className="text-center py-10">
          <p className="text-4xl font-semibold mb-0 leading-snug break-words text-black">
            Frequently Asked Questions
          </p>
        </div>
      </div>

      <div className="relative w-full sm:w-4/5 md:w-3/5 h-auto mx-auto group overflow-hidden">
        {/* Image Hover Section */}
        <div className="mx-2">
          <div className="relative">
            <img
              src="/images/banner-mt-22.jpg" // Replace with the correct image URL
              alt="Uploaded Image"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Rotated white line on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 01 */}
      <section>
        <div className="relative w-full md:w-full lg:w-3/5 h-auto mx-auto group my-3">
          <div className="flex flex-col md:flex-col lg:flex-row justify-center px-5 py-5">
            {/* Left Column */}
            <div className="w-full lg:w-1/4 pr-0 lg:pr-8">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-black sm:py-4">
                Orders & Shipping
              </h2>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-3/4 mt-4 lg:mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="mt-5" value="item-1">
                  <AccordionTrigger className="text-lg text-left py-0">
                    How did my package ship?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-2">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why does my USPS tracking number state 1-Day, 2-Day, 3-Day
                    Delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-3">
                  <AccordionTrigger className="text-lg text-left py-0">
                    How long will my package take to arrive?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-4">
                  <AccordionTrigger className="text-lg text-left py-0">
                    What are business days?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-5">
                  <AccordionTrigger className="text-lg text-left py-0">
                    How do I know my package has shipped?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-6">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why are certain products unavailable to ship
                    Internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-7">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why is my tracking number not updating?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section>
        <div className="relative w-full md:w-full lg:w-3/5 h-auto mx-auto group my-3">
          <div className="flex flex-col md:flex-col lg:flex-row justify-center px-5 py-5">
            {/* Left Column */}
            <div className="w-full lg:w-1/4 pr-0 lg:pr-8">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-black sm:py-4">
                Returns & Exchanges
              </h2>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-3/4 mt-4 lg:mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="mt-5" value="item-1">
                  <AccordionTrigger className="text-lg text-left py-0">
                    How do I know my package has shipped?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-2">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why are certain products unavailable to ship to
                    Internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-3">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why is my tracking number not updating?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section>
        <div className="relative w-full md:w-full lg:w-3/5 h-auto mx-auto group my-3">
          <div className="flex flex-col md:flex-col lg:flex-row justify-center px-5 py-5">
            {/* Left Column */}
            <div className="w-full lg:w-1/4 pr-0 lg:pr-8">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-black sm:py-4">
                Discounts
              </h2>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-3/4 mt-4 lg:mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="mt-5" value="item-1">
                  <AccordionTrigger className="text-lg text-left py-0">
                    How do I know my package has shipped?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-2">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why are certain products unavailable to ship to
                    Internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-10" value="item-3">
                  <AccordionTrigger className="text-lg text-left py-0">
                    Why is my tracking number not updating?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pt-5">
                    <p>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                    </p>
                    <br />
                    <p>
                      Say hello to flawless, long-lasting foundation that comes
                      in 7 melt-into-your-skin shades. This lightweight,
                      innovative formula creates a smooth, natural matte finish
                      that won’t settle into lines. It’s the perfect fit for
                      your skin. 1 fl. oz.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FQA;
