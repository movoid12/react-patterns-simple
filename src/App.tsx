/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContactForm from "./components/contact-form/contact-form";
import ThemedTabs from "./components/themed-tabs";
import Modal from "./components/modal";
import CurrencyConverter from "./components/currency-converter";
import HoverMe from "./components/hover-me";

export default function App() {
  console.log("App started");

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <Swiper navigation spaceBetween={30} modules={[Navigation]}>
          <SwiperSlide>
            {/* Compund Patter */}
            <ContactForm />
          </SwiperSlide>
          <SwiperSlide>
            {/* Composition Pattern */}
            <ThemedTabs />
          </SwiperSlide>
          <SwiperSlide>
            {/* Portal Pattern */}
            <Modal />
          </SwiperSlide>
          <SwiperSlide>
            {/* Hover Pattern */}
            <HoverMe />
          </SwiperSlide>
          <SwiperSlide>
            {/* Render Props Pattern */}
            <CurrencyConverter />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
