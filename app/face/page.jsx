import BrowseCategoryItems from '@/components/forever/custom/category_page/BrowseCategoryItems'
import RelatedProducts from '@/components/forever/custom/product/RelatedProducts'
import Image from 'next/image'
import React from 'react'

function face() {
    return (
        <>
            <section className="flex lg:flex-row flex-col items-center bg-[#F6F4ED]">
                {/* Left Side - Text Content */}
                <div className="p-20 lg:pl-[5%] w-full lg:w-1/2 text-center lg:text-center">
                    <h2 className="mb-6 font-semibold text-green-900 text-3xl lg:text-4xl">
                        FACE
                    </h2>
                    <p className="text-gray-800 leading-relaxed">
                        Why You should give the best treatments for your face? your face is one of the most important possessions and plays a vital role in physical attraction.
                        We make sure, all our products comprises the goodness of all- natural herbal ingredients to deliver the best nourishing treatment that your face deserves.
                        shop & experience our natural range of face wash, cleansers, toners, vitamin filled moisturises and herbal scrub and packs according to your skin type.
                        Since our face care range covers all skin concerns you can tailor your daily routine to help preventing oiliness, dryness, acne conditions and revitalize dull
                        skin to make it look more radient. For a start, shop few of our most loved face products- cleanse, purify and brighten your skin with our Face Wash range.
                        experience a golden complexion from Gold Day & Night Creams. Say Hello to a acne-free, oil - free clear skin with Lunuwila anti-acne cream.
                        Feel the luxurious touch of foundation+ Moisturising with Gold BB+ Cream. Your age is just a number when you have our 4ever young range.
                        Put together a daily morning and night routine With these simple face care products and get a healthy and happy skin.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-end mt-10 lg:mt-0 w-full lg:w-1/2">

                    <Image
                        src="/assets/image/face.jpeg"  // Update with your actual image path
                        alt="Face Care"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <BrowseCategoryItems />
            <RelatedProducts />
        </>
    )
}

export default face