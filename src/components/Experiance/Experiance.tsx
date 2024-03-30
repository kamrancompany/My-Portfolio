import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
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
              height: "33rem",
              borderRadius: "12px",
              backgroundColor: "#2b2b2b",
              padding: "2rem",
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
                  href="https://kameleon.co.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src={externalLink} alt="Visit site" /> */}
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Kameleon - Cloth Selling Site</h3>
              <p>
                This website sells men's cloth products and helps men look their
                best. It is easy to find what you need, whether it's cloth
                shirts, pants, or accessories. The site is useful for men who
                want to look their best and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div
            className="project"
            style={{
              width: "33rem",
              height: "33rem",
              borderRadius: "12px",
              backgroundColor: "#2b2b2b",
              padding: "2rem",
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
                  href="https://madewithluv.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <img src={externalLink} alt="Visit site" /> */}
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate
                their homes. It is easy to find what you need, whether it's
                furniture or decorations. The site is useful for people who want
                to make their homes look nice and need some help.
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

        <ScrollAnimation animateIn="flipInX">
          <div
            className="project"
            style={{
              width: "33rem",
              height: "33rem",
              borderRadius: "12px",
              backgroundColor: "#2b2b2b",
              padding: "2rem",
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