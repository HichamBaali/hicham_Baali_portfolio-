import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";
import React, { useEffect, useState } from "react";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // useEffect(() => {
  //   const storageDarkModeStatus = JSON.parse(
  //     localStorage.getItem("isDarkMode")
  //   );
  //   storageDarkModeStatus
  //     ? setIsDarkMode(storageDarkModeStatus)
  //     : setIsDarkMode(false);
  //   console.log("topleve is dark", isDarkMode);
  // }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Layout
      dark={isDarkMode ? true : false}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <Head>
        <title>Dizme | Home</title>
      </Head>

      <Home isDarkMode={isDarkMode} dark={isDarkMode ? true : false} />
      {/* HERO */}
      {/* PROCESS */}
      {/* <Process dark={isDarkMode ? true : false} /> */}
      {/* /PROCESS */}
      {/* ABOUT */}
      <About dark={isDarkMode ? true : false} />
      {/* /ABOUT */}
      {/* SKILLS */}
      <Skills dark={isDarkMode ? true : false} />
      {/* /SKILLS */}
      {/* COURSES */}
      <News />
      {/* COURSES */}
      {/* PORTFOLIO */}
      <Portfolio dark={isDarkMode ? true : false} />
      {/* /PORTFOLIO */}

      {/* SERVICES */}
      {/* <Service dark={isDarkMode ? true : false} /> */}
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      {/* <Testimonial dark={isDarkMode ? true : false} /> */}
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      {/* <Partners dark={isDarkMode ? true : false} /> */}
      {/* /PARTNERS */}
      {/* NEWS */}

      {/* <Newsletter /> */}
      <Contact />
    </Layout>
  );
};
export default Index;
