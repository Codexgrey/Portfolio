import React, { useEffect, useContext } from 'react'
import "./caseStudyModal.css";
import { ThemeContext } from '../../context';

const CaseStudyModal = ({ project, onClose }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // close on Escape, lock background scroll while open (only when a project is actually shown)
    useEffect(() => {
        if (!project) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    if (!project) return null;
    const { title, img, repo, caseStudy } = project;

    return (
        <div className="cs-overlay" onClick={onClose}>
            <div
                className="cs-modal"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: darkMode ? "#222" : "#fff",
                    color: darkMode ? "#fff" : "#111",
                }}
            >
                <button type="button" className="cs-close" onClick={onClose} aria-label="Close case study">
                    &times;
                </button>

                <div className="cs-scroll">
                    <img src={img} alt={title} className="cs-img" />

                    <div className="cs-body">
                        <h2 className="cs-title">{title}</h2>

                        <div className="cs-section">
                            <h4>Problem</h4>
                            <p>{caseStudy.problem}</p>
                        </div>

                        <div className="cs-section">
                            <h4>My Contribution</h4>
                            <p>{caseStudy.contribution}</p>
                        </div>

                        <div className="cs-section">
                            <h4>Tech Stack</h4>
                            <div className="cs-tags">
                                {caseStudy.stack.map((tech) => (
                                    <span className="cs-tag" key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="cs-section">
                            <h4>Outcome</h4>
                            <p>{caseStudy.outcome}</p>
                        </div>

                        <div className="cs-actions">
                            <a href={repo} target="_blank" rel="noreferrer" className="cs-btn cs-btn-primary">View on GitHub</a>
                            {caseStudy.live && (
                                <a href={caseStudy.live} target="_blank" rel="noreferrer" className="cs-btn cs-btn-primary">View Live</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyModal
