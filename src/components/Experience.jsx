import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Developer Intern",
            company: "Garvish Marketing Pvt. Ltd.",
            type: "Remote",
            date: "May 2025 – Jul 2025",
            points: [
                "Architected a GPS-GSM vehicle tracking solution utilizing ESP32 microcontrollers and MQTT-based communication protocols.",
                "Optimized system reliability by reducing packet loss by 40% through the implementation of localized buffering and offline caching mechanisms."
            ]
        }
    ];

    return (
        <section id="experience" className="section container experience-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="heading">Professional Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item glass-card"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="exp-header">
                                    <h3>{exp.title}</h3>
                                    <div className="exp-meta">
                                        <span className="exp-company"><FaBriefcase /> {exp.company}</span>
                                        <span className="exp-date"><FaCalendarAlt /> {exp.date}</span>
                                    </div>
                                </div>
                                <ul className="exp-list">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
export default Experience;
