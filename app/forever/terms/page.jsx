// components/TermsAndConditions.js
import React from 'react';

const TermsAndConditions = () => {
  return (
    <main>
      <div className="bg-gray-50">
        <div className="bg-lavender h-screen sm:h-[560px]">
          <div className="px-[30px] sm:px-[130px] pt-10 pl-10">
            <p className="font-['WorkSons'] text-bredcrumb text-sm">
              Home / Terms and Conditions
            </p>
          </div>
          <div className="flex justify-center items-center pb-10 h-full">
            <h1 className="font-['recoleta'] font-bold text-primary text-5xl uppercase">
              Terms and Conditions
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-lavender px-[30px] sm:px-[130px] pt-10 pb-16 pl-10 min-h-screen">
        <p>
          Welcome to 4ever Skin Naturals Online Store (the “site”). The site is owned and operated by 4ever Skin Naturals (PVT) LTD.
        </p>
        <p>
          Throughout the site, the terms “<strong>we</strong>”, “<strong>us</strong>” and “<strong>our</strong>” refer to 4ever. 4ever offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
        </p>
        <p>
          Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
        </p>
        <p>
          Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
        </p>
        <ol>
          <li>
            <h3 className="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              Online store terms
            </h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p>
              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>
          </li>
          <li>
            <h3 className="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              Accuracy, Completeness &amp; Timeliness of information
            </h3>
            <p>
              The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
            </p>
            <p>
              This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
            </p>
          </li>
          <li>
            <h3 className="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              Modification to the product, service &amp; prices
            </h3>
            <p>Prices for our products are subject to change without notice.</p>
            <p>
              We reserve the right at any time to modify or discontinue the Products/ Service (or any part or content thereof) without notice at any time.
            </p>
            <p>
              We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
};

export default TermsAndConditions;
