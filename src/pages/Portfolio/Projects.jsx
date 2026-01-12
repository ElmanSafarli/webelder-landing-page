import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import { Navbar, Footer } from "../../widgets";
import { portfolioData } from "../../constants";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
          <div className="projects-list">
            {portfolioData.map((project, index) => (
              <div
                key={project.id || index}
                className={`project-item`}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.images.template} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
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
                      />
                    </div>

                    <div className="thumbnails">
                      {modalImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`thumb-${i}`}
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
  .projects-list {
    padding: 96px 0;
    margin: 0 auto;
    max-width: 1120px;
    display: grid;
    gap: 12px;
  }

  .project-item {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 6px;
    height: 294px;
    background: #343434;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.12);

    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .project-item:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.18);
  }

  .project-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .project-item:hover img {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    top: 26px;
    left: 18px;
    padding: 8px 14px;
    border-radius: 20px;

    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);

    h3 {
      color: var(--white);
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
    }
  }

  .project-item:nth-child(4n + 2) {
    grid-column: 2 / 3; /* правая колонка */
  }
  .project-item:nth-child(4n + 1) {
    grid-column: 1 / 2; /* левая колонка */
  }

  .project-item:nth-child(4n + 3) {
    grid-column: 1 / 2; /* левая колонка (30%) */
  }
  .project-item:nth-child(4n + 4) {
    grid-column: 2 / 3; /* правая колонка (70%) */
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
    min-width: 600px;
    min-height: min(720px, 90vh);
    width: 70vw;
    overflow-y: auto;
    transition: all 0.3s ease;

    @media screen and (max-width: 1020px) {
      width: 90vw;
    }

    .project-content {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 36px;
      padding: 0 30px;

      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
    }

    .modal-header {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 32px;
        font-weight: 500;
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
        }

        p:last-child {
          color: var(--black);
          font-weight: 400;
          font-size: 16px;
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
