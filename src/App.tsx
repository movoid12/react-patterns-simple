/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ContactForm from "./components/contact-form/contact-form";

export default function App() {
  console.log("App started");

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <Swiper
          spaceBetween={50}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          on={{
            slideChange: () => console.log("slide changed"),
          }}
        >
          <SwiperSlide>
            <div className=" bg-slate-200 p-12">
              <h1 className="text-2xl text-black ">Slide 1</h1>
              <ContactForm />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-32 w-full h-full content-center self-center">
              <h1 className="text-2xl text-black ">Slide 2</h1>
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
