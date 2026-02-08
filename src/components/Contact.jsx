import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="contact-content"
                >
                    <h2 className="heading text-center">Get In Touch</h2>
                    <p className="contact-text">
                        I am currently open to new opportunities and collaborations.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-grid">
                        <a href="mailto:rajbasnet2027@gmail.com" className="contact-card glass-card">
                            <FaEnvelope className="contact-icon" />
                            <h3>Email Me</h3>
                            <span>rajbasnet2027@gmail.com</span>
                        </a>

                        <a href="tel:+919863707102" className="contact-card glass-card">
                            <FaPhone className="contact-icon" />
                            <h3>Call Me</h3>
                            <span>+91-9863707102</span>
                        </a>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/rajbasnet123789" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/raj-basnet-49934631a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Raj Basnet. All Rights Reserved.</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
export default Contact;
