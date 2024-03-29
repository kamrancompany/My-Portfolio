import React, { useState } from "react";
import { Container } from "./styles";
import kamran from "../../assets/kamran.jpg";
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
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p className="about-para">
            Welcome to the Digital Playground! I'm Kamran, your go-to maestro of
            web development magic. With a powerhouse toolkit boasting{" "}
            <span className="skill-span">
              HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js,
              Express.js, Mongo db, ReduxToolkit{" "}
            </span>{" "}
            and more, I'm geared up to transform your online dreams into
            captivating realities. Let's sculpt your unique online identity,
            blending innovation with seamless functionality. Elevate your
            digital presence with me at the helm, where creativity meets
            cutting-edge technology.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p className="about-para">
            Ready to Transform Your Online Presence? Whether it's crafting a
            brand-new website or giving your current one a stunning makeover,
            I'm here to turn your vision into a digital masterpiece. Let's
            collaborate and breathe life into your website dreams! Get in touch
            today, and let's embark on this exciting journey together towards
            online success!
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
                      style={{
                        height: "40px",
                        width: "80px",
                        marginTop: "5px",
                      }}
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
                  />
                )}
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={kamran} alt="kamran arshad" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
