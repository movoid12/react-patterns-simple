/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import ContactForm from "./components/contact-form/contact-form";
import ThemedTabs from "./components/themed-tabs/themed-tabs";

export default function App() {
  console.log("App started");

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <Swiper navigation spaceBetween={30} modules={[Navigation]}>
          <SwiperSlide>
            <div className="w-full h-full  p-12">
              <ContactForm />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-12 w-full h-full content-center self-center">
              <ThemedTabs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-32 w-full h-full content-center self-center">
              <h1 className="text-2xl text-black ">Slide 3</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-32 w-full h-full content-center self-center">
              <h1 className="text-2xl text-black ">Slide 4</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
