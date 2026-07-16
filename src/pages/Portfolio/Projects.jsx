import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import { Navbar, Footer } from "../../widgets";
import { portfolioData } from "../../constants";

import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const modalImages = selectedProject
    ? Object.entries(selectedProject.images)
        .filter(([key, value]) => key !== "template" && value)
        .map(([, value]) => value)
    : [];

  useEffect(() => {
    if (selectedProject) {
      setActiveImage(null);
    }
  }, [selectedProject]);

  return (
    <>
      <Navbar />
      <StyleMain>
        <div className="projects">
          <header className="projects-header">
            <span>Selected work</span>
            <h1>Projects built for real businesses</h1>
            <p>
              A selection of digital products shaped around clear business
              goals, thoughtful design and reliable development.
            </p>
          </header>

          <div className="projects-list">
            {portfolioData.map((project, index) => (
              <button
                type="button"
                key={project.id || index}
                className="project-item"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.images.template} alt="" loading="lazy" decoding="async" />
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="project-summary">
                  <div>
                    <p>{project.subtitle}</p>
                    <h2>{project.title}</h2>
                  </div>
                  <span className="project-action" aria-hidden="true">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
                <div className="project-skills" aria-hidden="true">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {selectedProject && (
            <Modal onClick={() => setSelectedProject(null)}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>

                  <button
                    className="modal-close"
                    onClick={() => setSelectedProject(null)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                <div className="project-content">
                  <div className="project-info">
                    <div className="project-info-item">
                      <p>Project description.</p>
                      <p>{selectedProject.description}</p>
                    </div>
                    <div className="project-info-item">
                      <p>Skills and deliverables</p>
                      <ul>
                        {selectedProject.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="project-img">
                    <div className="main-img">
                      <img
                        src={activeImage || modalImages[0]}
                        alt={selectedProject.title}
                        decoding="async"
                      />
                    </div>

                    <div className="thumbnails">
                      {modalImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${selectedProject.title} preview ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                          className={`thumb ${
                            activeImage === img ? "active" : ""
                          }`}
                          onClick={() => setActiveImage(img)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject.links && (
                  <div className="links">
                    {selectedProject.links.map((l, i) => (
                      <a key={i} href={l.link} target="_blank" rel="noreferrer">
                        {l.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Modal>
          )}
        </div>
        <Footer />
      </StyleMain>
    </>
  );
};

const StyleMain = styled.main`
  .projects {
    max-width: 1120px;
    margin: 0 auto;
    padding: 88px 0 112px;

    @media (max-width: 1160px) {
      padding-right: 20px;
      padding-left: 20px;
    }

    @media (max-width: 768px) {
      padding-top: 64px;
      padding-bottom: 80px;
    }
  }

  .projects-header {
    max-width: 720px;
    margin-bottom: 56px;

    > span {
      display: block;
      margin-bottom: 14px;
      color: var(--accent);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }

    h1 {
      max-width: 650px;
      margin-bottom: 18px;
      color: var(--black);
      font-size: 48px;
      font-weight: 600;
      line-height: 1.08;
    }

    p {
      max-width: 620px;
      color: #626262;
      font-size: 18px;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      margin-bottom: 36px;

      h1 {
        font-size: 38px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 32px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .projects-list {
    display: grid;
    gap: 36px 24px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }

  .project-item {
    min-width: 0;
    padding: 0;
    overflow: hidden;
    text-align: left;
    appearance: none;
    background: var(--white);
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    cursor: pointer;
    font: inherit;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: transform 0.35s ease, box-shadow 0.35s ease,
      border-color 0.35s ease;

    &:hover,
    &:focus-visible {
      border-color: #d5d5d5;
      transform: translateY(-6px);
      box-shadow: 0 20px 44px rgba(0, 0, 0, 0.12);
    }

    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 4px;
    }
  }

  .project-image {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #eeeeee;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
  }

  .project-item:hover .project-image img,
  .project-item:focus-visible .project-image img {
    transform: scale(1.045);
  }

  .project-index {
    position: absolute;
    top: 16px;
    right: 16px;
    display: grid;
    width: 38px;
    height: 38px;
    place-items: center;
    color: var(--white);
    font-size: 12px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.66);
    border-radius: 50%;
    backdrop-filter: blur(8px);
  }

  .project-summary {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding: 24px 24px 16px;

    p {
      margin-bottom: 7px;
      color: #777777;
      font-size: 13px;
      font-weight: 500;
    }

    h2 {
      color: var(--black);
      font-size: 23px;
      font-weight: 600;
      line-height: 1.25;
    }
  }

  .project-action {
    display: grid;
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
    place-items: center;
    color: var(--black);
    border: 1px solid #dedede;
    border-radius: 50%;
    transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }

  .project-item:hover .project-action,
  .project-item:focus-visible .project-action {
    color: var(--white);
    background: var(--black);
    transform: translateX(3px);
  }

  .project-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 24px 24px;

    span {
      padding: 6px 10px;
      color: #555555;
      font-size: 12px;
      font-weight: 500;
      background: #f5f5f5;
      border-radius: 4px;
    }
  }

  @media (max-width: 480px) {
    .project-summary {
      padding: 20px 18px 14px;

      h2 {
        font-size: 20px;
      }
    }

    .project-skills {
      padding: 0 18px 20px;
    }

    .project-action {
      width: 38px;
      height: 38px;
      flex-basis: 38px;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background: var(--white);
    border-radius: 10px;

    width: 70vw;
    max-width: 1100px;

    height: 90vh;
    width: 70vw;
    overflow-y: auto;
    transition: all 0.3s ease;

    @media screen and (max-width: 1020px) {
      width: 90vw;
    }
    @media (max-width: 768px) {
      width: 95vw;
    }

    .project-content {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 36px;
      padding: 0 30px;

      @media (max-width: 1024px) {
        gap: 24px;
      }

      @media screen and (max-width: 820px) {
        flex-direction: column;
      }

      @media (max-width: 480px) {
        gap: 0;
        padding: 0 16px;
      }
    }

    .modal-header {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 480px) {
        padding: 20px 16px;
      }

      h2 {
        font-size: 32px;
        font-weight: 500;

        @media (max-width: 480px) {
          font-size: 22px;
          width: 70%;
        }
      }

      .modal-close {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;

        @media (max-width: 480px) {
          width: 40px;
          height: 40px;
        }

        svg {
          @media (max-width: 480px) {
            font-size: 12px;
          }
        }
      }
    }
    .project-info {
      max-width: 354px;
      width: 100%;
      transition: all 0.3s ease;

      @media screen and (max-width: 1020px) {
        max-width: 300px;
      }

      @media screen and (max-width: 820px) {
        max-width: 100%;
      }

      .project-info-item {
        margin-bottom: 36px;

        p:first-child {
          color: var(--gray);
          font-weight: 400;
          font-size: 16px;
          margin: 0 0 20px;

          @media (max-width: 480px) {
            margin: 0 0 12px;
          }
        }

        p:last-child {
          color: var(--black);
          font-weight: 400;
          font-size: 16px;

          @media (max-width: 480px) {
            font-size: 14px;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          list-style-type: none;
          li {
            font-weight: 400;
            font-size: 14px;
            color: var(--gray);
            padding: 8px 14px;
            background: #333333;
            border-radius: 24px;

            @media (max-width: 480px) {
              font-size: 12px;
            }
          }
        }
      }
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }

    .main-img {
      overflow: hidden;
      position: relative;
      border-radius: 8px;
      margin-bottom: 12px;
      width: 100%;
      height: 400px;

      @media (max-width: 768px) {
        height: 300px;
      }

      @media (max-width: 480px) {
        height: 220px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .thumbnails {
      display: flex;
      gap: 8px;
    }

    .thumb {
      width: 80px;
      height: 60px;
      object-fit: cover;
      border-radius: 4px;
      cursor: pointer;
      opacity: 0.7;
      transition: 0.2s;

      @media (max-width: 480px) {
        width: 60px;
        height: 45px;
      }
    }

    .thumb:hover,
    .thumb.active {
      opacity: 1;
      border: 2px solid #007bff;
    }

    .links {
      padding: 24px 30px 30px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 10px 20px;
        border-radius: 24px;

        font-size: 14px;
        font-weight: 500;
        color: var(--black);
        text-decoration: none;

        background: #f3f3f3;
        border: 1px solid #e0e0e0;

        transition: all 0.25s ease;

        &:hover {
          background: #333333;
          color: var(--white);
          border-color: #333333;
        }
      }
    }
  }
`;

export default Projects;
