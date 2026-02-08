import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section container about-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="heading">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate Computer Science undergraduate specializing in
                            <span className="highlight"> AI, Machine Learning, and Full Stack Development</span>.
                            With a strong foundation in both software engineering and embedded systems,
                            I love building solutions that bridge the gap between hardware and software.
                        </p>
                        <p>
                            My journey involves working on real-time systems, predictive maintenance using AI,
                            and creating intuitive web applications. I am always eager to learn new technologies
                            and tackle complex problems.
                        </p>
                    </div>

                    <div className="education-card glass-card">
                        <div className="edu-header">
                            <FaGraduationCap className="edu-icon" />
                            <h3>Education</h3>
                        </div>

                        <div className="edu-item">
                            <div className="edu-title-row">
                                <h4>Bachelor of Technology in Computer Science</h4>
                                <span className="edu-year">Jul 2023 – Present</span>
                            </div>
                            <div className="edu-desc-row">
                                <FaUniversity className="uni-icon" />
                                <span>Graphic Era Hill University</span>
                            </div>
                            <p className="edu-gpa">CGPA: 8.9/10 <span className="edu-status">(Expected Graduation: 2027)</span></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default About;
