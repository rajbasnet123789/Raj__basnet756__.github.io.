import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "SeismoSense — Early Earthquake Detection",
            date: "Jan 2025 – Apr 2025",
            description: "Engineered ESP32-based sensor nodes for real-time vibration monitoring. Architected a lightweight Deep Learning classifier with 0.02 MSE. Achieved sub-2-second alert latency.",
            tags: ["ESP32", "FastAPI", "Deep Learning", "Signal Processing"],
            link: "https://www.researchsquare.com/article/rs-7479899/v1",
            github: "https://github.com/rajbasnet123789" // Assuming link based on profile
        },
        {
            title: "Bus Management System",
            date: "Jun 2025 – Aug 2025",
            description: "Developed a vision-based on-vehicle monitoring system integrating head detection algorithms for automated passenger counting. Attained 95% counting accuracy.",
            tags: ["FastAPI", "Computer Vision", "YOLO", "Deep Learning"],
            link: "https://drive.google.com/file/d/1J-cbhJobc9L4c4fYYy6l0RF6s2NdN6Xq/view?usp=drivesdk",
            github: "https://github.com/rajbasnet123789"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="section container projects-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="heading">Featured Projects</h2>

                <div className="slider-container">
                    <button className="slider-btn prev-btn" onClick={prevSlide}>
                        <FaChevronLeft />
                    </button>

                    <div className="slider-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="project-card glass-card"
                            >
                                <div className="project-content">
                                    <h3>{projects[currentIndex].title}</h3>
                                    <p className="project-date">{projects[currentIndex].date}</p>
                                    <p className="project-desc">{projects[currentIndex].description}</p>

                                    <div className="project-tags">
                                        {projects[currentIndex].tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer" className="btn btn-outline small-btn">
                                            <FaGithub /> GitHub
                                        </a>
                                        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer" className="btn btn-primary small-btn">
                                            <FaExternalLinkAlt /> Demo / Paper
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="slider-btn next-btn" onClick={nextSlide}>
                        <FaChevronRight />
                    </button>
                </div>

                <div className="slider-dots">
                    {projects.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>

            </motion.div>
        </section>
    );
};
export default Projects;
