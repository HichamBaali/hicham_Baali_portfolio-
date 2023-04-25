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
    img: "/img/slider/avatar.webp",
    skills: [
      {
        name: "Scientific_Research",
        icon: "/img/logo/2.webp",
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
                <Image
                  layout="fill"
                  src="/img/slider/avatar.webp"
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
                          {/* {parse(skill.icon)} */}
                          <Image
                            height={200}
                            width={200}
                            src={skill.icon}
                            alt="icon"
                          />
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
