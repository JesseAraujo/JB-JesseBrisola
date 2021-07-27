import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaTelegramPlane, FaBehance, FaFigma } from 'react-icons/fa'

import styles from './styles.module.scss'


export function SocialButtons() {
    return (
        <div className={styles.groupButtons}>
            <a href="https://www.facebook.com/jbjessebrisola" target="_blank">
                <FaFacebookF size={24} className={styles.icon} />
            </a>

            <a href="https://github.com/JesseAraujo" target="_blank">
                <FaGithub size={24} className={styles.icon} />
            </a>

            <a href="https://www.linkedin.com/in/jesse-brisola-de-araujo/" target="_blank">
                <FaLinkedinIn size={24} className={styles.icon} />
            </a>

            <a href="https://www.instagram.com/jbjessebrisola/">
                <FaInstagram size={24} className={styles.icon} />
            </a>

            <a href="https://www.figma.com/files/drafts?fuid=806300600490718021" target="_blank">
                <FaFigma size={24} className={styles.icon} />
            </a>

            <a href="https://www.behance.net/jessebr" target="_blank">
                <FaBehance size={24} className={styles.icon} />
            </a>

            <a href="https://wa.me/5514996247077?text=Olá" target="_blank">
                <FaWhatsapp size={24} className={styles.icon} />
            </a>

            <a href="" target="_blank">
                <FaTelegramPlane size={24} className={styles.icon} />
            </a>

        </div>
    )
}