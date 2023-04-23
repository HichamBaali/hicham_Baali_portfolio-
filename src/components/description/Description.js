import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SliderButton } from "@typeform/embed-react";
// import { TikTok } from "react-tiktok";
import ReactPlayer from "react-player/youtube";
import logo from "../../../public/img/logo/1.webp";
import Image from "next/image";

const Description = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying);
  // useEffect(() => {
  //   setIsPlaying(true);
  // });

  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="relative text-rigt flex flex-col justify-center items-center mx-auto  w-[80%] h-screen sm:flex-row ">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="sm:w-[170%]  "
        >
          {/* <img
            // layout="fill"
            className="rounded-2xl"
            src={avatar}
            alt="avatar"
          /> */}
          {/* <TikTok url="https://www.tiktok.com/@drhichambaali/video/7125020598518009094" /> */}
          <div className="hidden md:block">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width={400}
              height={500}
              loop={true}
              controls={true}
              playing={isPlaying}
              onReady={() => setIsPlaying(true)}
            />
          </div>
          <div className="md:hidden m-auto">
            <ReactPlayer
              url="https://www.youtu.be/ysz5S6PUM-U"
              width={400}
              // height={500}
              loop={true}
              controls={true}
              playing={isPlaying}
              onReady={() => setIsPlaying(true)}
            />
          </div>
          {/* <video
            className="rounded-2xl"
            autoPlay
            muted
            controls
            width="300"
            height="300"
            src="/video/TIKTOK.mp4"
          /> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center items-end"
        >
          <h1 className="relative right-0 text-right text-3xl font-bold text-gray-700  ">
            <span className='content-[""] absolute w-[100%] h-[40%] bg-red-400 left-0 bottom-0 -z-50 inline-block'></span>{" "}
            أكاديمية سبيك ايزي
          </h1>
          <br />
          <h2 className="relative text-right text-xl font-semibold text-gray-700">
            English Course
            <br />
            Learn English, be more confident, start now with our amazing team of
            teachers
          </h2>
          <p className="text-right text-lg font-normal p-0">
            سجل الآن لتعلم الانجليزية من الصفر هاذي فرصتك باش تتعلم الانجليزية
            وتزيد من ثقتك في نفسك 😎😎 👈المستوى الأول بحجم ساعي قدره 60 ساعة.
            👈الدورة مكثفة جدا، يعني الدراسة كل يوم ما عدا الجمعة والسبت بمعدل 5
            حصص في الاسبوع 📆 👈مدة الحصة 120 دقيقة🕒 👈التوقيت مسائي من 20:00
            الى 22:00 او من 22:00 الى 00:00 ⏰ 👈منهجية تعتمد على المحادثة
            والتطبيق والتفاعل من أجل نتيجة جيدة🚀 اضغط على الرابط وسجل الان
            واستفد من تخفيض الصيف
          </p>
          <SliderButton
            id="r5WXdauh"
            size={30}
            className="dizme_tm_button self-center w-auto font-bold text-xl"
          >
            <a className="anchor">
              <span>تسجيل</span>
            </a>
          </SliderButton>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className=" absolute top-0 hidden"
        data-wow-duration="1s"
      >
        <img src="img/brushes/about/1.png" alt="image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 -z-10 left-96"
        data-wow-duration="1s"
      >
        <img src="img/brushes/about/2.png" alt="image" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 0.7 }}
        transition={{ duration: 1.5 }}
        className="absolute top-2/4 -right-16 overflow-hidden"
        data-wow-duration="1s"
      >
        <img src="img/brushes/news/2.png" alt="image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-72 md:top-0 md:right-1/2 -z-20"
        data-wow-duration="1s"
      >
        <Image
          height={200}
          width={200}
          src="/img/brushes/portfolio/1.png"
          alt="image"
        />
      </motion.div>
      <motion.div
        className="absolute top-6 right-32 -z-20 hidden"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          // layout="fill"
          height="80px"
          width="200px"
          src={logo}
          alt="image"
        />
      </motion.div>
    </section>
  );
};

export default Description;
