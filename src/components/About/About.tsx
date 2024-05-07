import React, { useState } from "react";
import "../About/about.css";
import kamran from "../../assets/kamran.jpg";
// import myImg from "../../assets/myImg.jpg";
import myImg from "../../assets/profile.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { skills } from "../../constants/skills";
export function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const handleMouseEnter = (skill: string) => {
    setHoveredSkill(skill);
  };
  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };
  return (
    <div className="about-main" id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p className="about-para">
            Welcome to the Digital Playground! I'm Kamran, your digital
            architect ready to craft immersive online & onsite experiences. With
            a mastery of{" "}
            <span className="skill-span">HTML, CSS, and JavaScript,</span> I
            weave pixel-perfect designs that come alive with the power of{" "}
            <span className="skill-span">React, Next.js, and TypeScript.</span>{" "}
            Whether it's building dynamic interfaces or architecting robust
            backend solutions with{" "}
            <span className="skill-span">
              Node.js, Express.js, and MongoDB,
            </span>{" "}
            I'm equipped to bring your visions to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p className="about-para">
            From remote collaborations to onsite collaborations, I seamlessly
            blend innovation with functionality to sculpt your unique online
            identity. Let's embark on a journey where creativity converges with
            cutting-edge technology, elevating your digital presence to new
            heights. Join me as we turn your online dreams into captivating
            realities, one line of code at a time.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p className="about-para">
            Ready to Transform Your Online Presence? Whether you're envisioning
            a sleek, brand-new website or seeking to elevate your current one
            with a jaw-dropping makeover, I'm your trusted partner in bringing
            your digital vision to life. Let's collaborate and infuse vitality
            into your website aspirations! Reach out today, and let's embark on
            this exhilarating journey together towards onsite excellence and
            beyond!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {skills.map((data, index) => (
            <div key={index} className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                {hoveredSkill === data.hoverSkills ? (
                  <div className="card" onMouseLeave={() => handleMouseLeave()}>
                    <img
                      src={data.img}
                      alt={data.heading}
                      className="skill-img"
                    />
                    <h5 style={{ color: data.backGround }}>{data.heading}</h5>
                    <div className="load-bar">
                      <div
                        className="progress"
                        style={{ background: data.backGround }}
                      />
                    </div>
                    <h5 style={{ color: data.backGround }}>{data.rating}</h5>
                  </div>
                ) : (
                  <img
                    src={data.img}
                    alt={data.heading}
                    onMouseEnter={() => handleMouseEnter(data.hoverSkills)}
                    className="skillsImg"
                  />
                )}
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={myImg} alt="kamran arshad" className="DP" />
        </ScrollAnimation>
      </div>
    </div>
  );
}
