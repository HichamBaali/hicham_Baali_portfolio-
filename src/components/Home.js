import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import Image from "next/image";
import DarkModeToggle from "react-dark-mode-toggle";

// import { Widget } from "@typeform/embed-react";

const Home = ({ dark, isDarkMode }) => {
  // const [data, setData] = useState({});
  const data = {
    name: "Hicham Baali",
    address: "Algeria",
    bio: "I'm motivated English teacher, and I'm very passionate and dedicated to my work.",
    mainSkill: "Creative English teacher",
    img: "img/slider/avatar.webp",
    skills: [
      {
        name: "Scientific_Research",
        icon: `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"  style=" width: 150%; height: 150%;">
        <title>2</title>
        <defs>
          <image  width="282" height="269" id="img1" href="data:image/png;base64,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"/>
        </defs>
        <style>
        </style>
        <use id="Background" href="#img1" x="30" y="30"/>
      </svg>`,
        color: "rgb(247, 80, 35)",
        value: 90,
      },
      {
        name: "Teaching_Skills",
        color: "rgb(28, 190, 89)",
        value: 95,
      },
      {
        name: "Soft_Skills",
        color: "rgb(128, 103, 240)",
        value: 88,
      },
    ],
    social: [
      {
        name: "facebook",
        icon: "icon-facebook-1",
        url: "https://www.facebook.com/hicham.baali.921?mibextid=ZbWKwL",
      },
      {
        name: "twitter",
        icon: "icon-twitter-1",
        url: "https://twitter.com/HichamBaaLi?t=5pD_MQZG-YKoaXCbjjN42Q&s=09",
      },
      {
        name: "linkedin",
        icon: "icon-linkedin-1",
        url: "https://www.linkedin.com/in/hicham-baali/",
      },
      {
        name: "instagram",
        icon: "icon-instagram-1",
        url: "https://www.instagram.com/hicham__baali/",
      },
    ],
    contact: {
      address: "Msila, Algeria",
      email: "hi.baali@lagh-univ.dz",
      phn: "+213 665 010 330",
    },
  };

  const [image, setImage] = useState("");
  // useEffect(() => {
  //   async function fetchdata() {
  //     // You can await here
  //     setData(await fatchData("/static/info.json"));
  //     // ...
  //   }
  //   fetchdata();
  // }, []);
  useEffect(() => {
    if (isDarkMode) {
      setImage("img/slider/2.jpg");
    } else {
      setImage("img/slider/1.jpg");
    }
  }, [isDarkMode]);
  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        {/* <div
          className="background"
          // data-img-url={`img/slider/${isDarkMode ? 2 : 1}.jpg`}
          data-img-url={isDarkMode ? `img/slider/2.jpg` : `img/slider/1.jpg`}
          // style={{
          //   backgroundImage: isDarkMode
          //     ? `img/slider/2.jpg`
          //     : `img/slider/1.jpg`,
          // }}
          style={{ backgroundImage: `${data-img-url}` }}
        /> */}
        <img
          src={image}
          style={{
            zIndex: 0,
            position: "absolute",
            height: " 100%",
            width: " 100%",
          }}
          alt="hero background"
        />

        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{data && data.name ? data.name : "hicham baali"}</h3>
              </div>
              <div className="job">
                <p>
                  A <span className="greenText">{data && data.mainSkill}</span>{" "}
                  From <span className="purpleText">{data.address}</span>
                </p>
              </div>
              <div className="text">
                <p>{data.bio}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) => (
                        <li key={i}>
                          <a href={social.url}>
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.webp"}
                  alt="image"
                />
                {data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                        >
                          {parse(skill.icon)}
                          {/* <Image
                            layout="fill"
                            objectFit="cover"
                            // height={200}
                            // width={200}
                            // src={skill.icon}
                            src="/img/logo/dark.png"
                            alt="icon"
                            // loader={}
                          /> */}
                        </span>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="dizme_tm_down">
          <a className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
