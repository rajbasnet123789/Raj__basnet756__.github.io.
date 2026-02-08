import { motion } from 'framer-motion';
import { FaFileAlt, FaTrophy, FaCertificate } from 'react-icons/fa';
import '../styles/Research.css';

const Research = () => {
    const papers = [
        {
            title: "A Physics-Informed Deep Learning and Probabilistic Inference Framework for Real-Time Single-Station Earthquake Detection",
            status: "Research Square (Preprint)",
            role: "Second Author",
            link: "https://www.researchsquare.com/article/rs-7479899/v1"
        },
        {
            title: "A Novel Approach for Adaptive Spatial Suitability Index with Hybrid ML-DL for Renewable Energy Site Selection",
            status: "IEEE ICCCA 2025",
            role: "Third Author",
            link: "https://ieeexplore.ieee.org/document/11325167"
        },
        {
            title: "A Holistic AI-Driven Predictive Maintenance Framework for Power Converters Equipped with Fault Diagnosis",
            status: "IEEE",
            role: "Third Author",
            link: "https://ieeexplore.ieee.org/document/11325161"
        }
    ];

    const achievements = [
        "National Hackathon Finalist: Top 20 in Grape-E-Thon and Top 4 in Hack-a-Holic.",
        "Developed and deployed Bus Management System and PBL Management System.",
        "Research Advisor, IEEE Club: Mentoring undergraduate students."
    ];

    const certifications = [
        "Supervised Machine Learning – Stanford University (Coursera)",
        "AWS Certified Cloud Practitioner Essentials",
        "Google Cloud Computing Foundations – NPTEL/Swayam"
    ];

    return (
        <section id="research" className="section container research-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="heading">Research & Achievements</h2>

                <div className="research-grid">
                    <div className="papers-column">
                        <h3 className="sub-heading"><FaFileAlt /> Publications</h3>
                        {papers.map((paper, index) => (
                            <div key={index} className="paper-card glass-card">
                                <h4>{paper.title}</h4>
                                <div className="paper-meta">
                                    <span className="paper-status">{paper.status}</span>
                                    <span className="paper-role">{paper.role}</span>
                                </div>
                                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="read-link">Read Paper &rarr;</a>
                            </div>
                        ))}
                    </div>

                    <div className="extras-column">
                        <div className="achievements-box glass-card">
                            <h3 className="sub-heading"><FaTrophy /> Achievements</h3>
                            <ul className="list-items">
                                {achievements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="certifications-box glass-card">
                            <h3 className="sub-heading"><FaCertificate /> Certifications</h3>
                            <ul className="list-items">
                                {certifications.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default Research;
