import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg"></div>
            <motion.div
                className="container hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span variants={itemVariants} className="hero-greeting">
                    Hello, I'm
                </motion.span>

                <motion.h1 variants={itemVariants} className="hero-name">
                    Raj Basnet
                </motion.h1>

                <motion.h2 variants={itemVariants} className="hero-title">
                    Full Stack Developer & AI Enthusiast
                </motion.h2>

                <motion.p variants={itemVariants} className="hero-description">
                    Building intelligent systems and immersive web experiences.
                    <br /> Based in Dehradun, India.
                </motion.p>

                <motion.div variants={itemVariants} className="hero-socials">
                    <a href="https://github.com/rajbasnet123789" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/raj-basnet-49934631a" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:rajbasnet2027@gmail.com" className="social-icon">
                        <FaEnvelope />
                    </a>
                    <a href="https://leetcode.com/u/Raj_Basnet/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaCode />
                    </a>
                </motion.div>

                <motion.div variants={itemVariants} className="hero-cta">
                    <Link to="projects" smooth={true} duration={500} offset={-70}>
                        <button className="btn btn-primary">View Projects</button>
                    </Link>
                    <Link to="contact" smooth={true} duration={500} offset={-70}>
                        <button className="btn btn-outline">Contact Me</button>
                    </Link>
                </motion.div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="scroll-indicator"
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};
export default Hero;
