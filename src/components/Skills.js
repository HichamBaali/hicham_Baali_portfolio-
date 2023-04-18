import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import Image from "next/image";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchdata() {
      setData(await fatchData("/static/info.json"));
    }
    fetchdata();
  }, []);
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
            <div className="right">
              <Image
                height={600}
                width={600}
                src={`/img/skills/${dark ? 2 : 1}.png`}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
