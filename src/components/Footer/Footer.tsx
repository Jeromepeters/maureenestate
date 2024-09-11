import Link from "next/link";
import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

function Footer() {
  return (
    <footer className="mt-16 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto py-4">
        <Link href="/" className="text-tertiary-dark font-black">
          Hotelzz
        </Link>
        <h4 className="text-[40px] font-semibold py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">send</p>
            </div>
            <div className="flex items-center ">
              <BsTelephoneOutbound />
              <p className="ml-2">+234-7067009192</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageAltDetail />
              <p className="ml-2">code with jerome</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-2">Our Story</p>
            <p className="pb-2">Get in Touch</p>
            <p className="pb-2">Our Privacy Commitment</p>
            <p className="pb-2">Terms of service</p>
            <p className="pb-2">Customer Assistance</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-2">Dinning Experience</p>
            <p className="pb-2">Wellness</p>
            <p className="pb-2">Fitness</p>
            <p className="pb-2">Sports</p>
            <p className="pb-2">Events</p>
          </div>
        </div>
      </div>
      <div className="h-10 md:h-[70px] bg-[#238de2] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
}

export default Footer;
