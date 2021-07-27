import Head from 'next/head'
import SocialButtons from '../SocialButtons'

import styles from './styles.module.scss'

export default function Landing() {
    return (
        <>
            <Head>
                <title>JB | Jessé Brisola</title>
            </Head>

            <div className="container">
                <div className={styles.content}>
                    <header>
                        <img src="/assets/Logo.svg" alt="Logo JB Jessé Brisola" />
                    </header>

                    <div className={styles.profile}>
                        <img src="/assets/perfil.jpg" alt="Foto Perfil Jessé Brisola" />

                        <p><span>Jessé Brisola</span> de Araujo</p>
                    </div>

                    <SocialButtons />
                </div>
            </div>
        </>
    )
}