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
      <div
        className="projects"
        style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}
      >
        <ScrollAnimation animateIn="flipInX">
          <div
            className="project"
            style={{
              width: "33rem",
              textAlign: "justify",
            }}
          >
            <header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: ".5rem",
                }}
              >
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
              </div>
            </header>

            <div className="body">
              <h3>1011 Technologies</h3>
              <p style={{ marginTop: "1rem" }}>
                "I joined 1011 Technologies as a dynamic MERN stack developer in
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
          <div
            className="project"
            style={{
              width: "33rem",
              borderRadius: "12px",
              textAlign: "justify",
              padding: "2rem",
              color: "white",
            }}
          >
            <header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: ".5rem",
                }}
              >
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
        <ScrollAnimation animateIn="flipInX">
          <div
            className="project"
            style={{
              width: "33rem",
              height: "33rem",
              borderRadius: "12px",
              padding: "2rem",
              color: "white",
            }}
          >
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://justmedicalbooks.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src={externalLink} alt="Visit site" /> */}
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with
                medical students. Medical students use it to buy books and
                acquire knowledge. The site has all kinds of medical books in
                one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
