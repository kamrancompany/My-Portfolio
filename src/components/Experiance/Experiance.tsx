import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import img1011 from "../../assets/1011.jpg";
import alright from "../../assets/alright.png";
import linkedin from "../../assets/linkedin.svg";
export function Experiance() {
  return (
    <Container id="experiance">
      <div>
        <h2>Previous Experiance</h2>
      </div>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div>
                <img
                  src={img1011}
                  style={{
                    width: "10rem",
                    height: "8rem",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="project-links">
                <a
                  href="https://www.linkedin.com/company/1011technologies/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Visit site"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>1011 Technologies</h3>
              <p style={{ marginTop: "1rem" }}>
                I joined 1011 Technologies as a dynamic MERN stack developer in
                December 2023, where I continue to excel today. Throughout my
                tenure, I've spearheaded a multitude of projects, with a primary
                emphasis on crafting innovative solutions using React and Node
                API technologies. My contributions have consistently elevated
                the company's standards and positioned us at the forefront of
                technological innovation.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div>
                <img
                  src={alright}
                  style={{
                    width: "10rem",
                    height: "8rem",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="project-links">
                <a
                  href="https://www.linkedin.com/company/alright-tech/?originalSubdomain=pk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Visit site"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AL RIGHT Tech</h3>
              <p style={{ marginTop: "1rem" }}>
                I embarked on my journey with Al Right Tech software house in
                May 2023 as a proficient MERN stack developer, culminating my
                tenure in December 2023. During my tenure, I spearheaded
                numerous projects, with a predominant focus on React and Node
                API development, contributing significantly to the company's
                technological prowess.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
