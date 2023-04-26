import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import Image from "next/image";

const Skills = ({ dark }) => {
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

  // useEffect(() => {
  //   async function fetchdata() {
  //     setData(await fatchData("/static/info.json"));
  //   }
  //   fetchdata();
  // }, []);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Teaching is Life</span>
                <h3>I Develop my Skill set Regularly to Keep Me up to date.</h3>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right relative">
              <Image
                layout="responsive"
                objectFit="cover"
                height={4096}
                width={4096}
                src="/img/skills/1.webp"
                alt="image"
              />
              <div className="absolute top-0 right-[70%]">
                <Image
                  height={200}
                  width={200}
                  src="/img/brushes/portfolio/1.png"
                  alt="image"
                  c
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
