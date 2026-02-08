import { motion } from 'framer-motion';
import { FaCode, FaMicrochip, FaBrain, FaDatabase } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "AI & ML",
            icon: <FaBrain />,
            skills: ["TensorFlow", "PyTorch", "Deep Learning", "Computer Vision", "NLP", "LLMs", "RAG"]
        },
        {
            title: "Web & Programming",
            icon: <FaCode />,
            skills: ["Python", "C++", "JavaScript", "FastAPI", "React.js", "Java", "C"]
        },
        {
            title: "Embedded Systems",
            icon: <FaMicrochip />,
            skills: ["ESP32", "Arduino", "ESP32-CAM", "ADXL345", "Hardware Interfacing", "IOT"]
        },
        {
            title: "Tools & Database",
            icon: <FaDatabase />,
            skills: ["Docker", "SQL", "Git", "PostgreSQL", "MongoDB"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="section container skills-section">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <h2 className="heading">Technical Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} variants={itemVariants} className="skill-card glass-card">
                            <div className="skill-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
export default Skills;
