import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaTelegramPlane, FaBehance, FaFigma } from 'react-icons/fa'

import styles from './styles.module.scss'


export default function SocialButtons() {
    return (
        <div className={styles.groupButtons}>
            <a href="https://www.facebook.com/jbjessebrisola">
                <FaFacebookF size={24} className={styles.icon} />
            </a>

            <a href="https://github.com/JesseAraujo">
                <FaGithub size={24} className={styles.icon} />
            </a>

            <a href="https://www.linkedin.com/in/jesse-brisola-de-araujo/">
                <FaLinkedinIn size={24} className={styles.icon} />
            </a>

            <a href="https://www.instagram.com/jbjessebrisola/">
                <FaInstagram size={24} className={styles.icon} />
            </a>

            <a href="https://www.figma.com/files/drafts?fuid=806300600490718021">
                <FaFigma size={24} className={styles.icon} />
            </a>

            <a href="https://www.behance.net/jessebr">
                <FaBehance size={24} className={styles.icon} />
            </a>

            <a href="https://wa.me/5514996247077?text=Olá">
                <FaWhatsapp size={24} className={styles.icon} />
            </a>

            <a href="#">
                <FaTelegramPlane size={24} className={styles.icon} />
            </a>

        </div>
    )
}