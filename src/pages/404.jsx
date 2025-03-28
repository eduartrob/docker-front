import { Link } from 'react-router-dom';

import styles from '../assets/404.module.css';
export default function NotFound() {
    return (
        <section className={styles['section-404']}>
            <div className={styles['container-404']}>
                <h1>404</h1>
                <p className={styles['notFound']}>Not Found</p>
                <p className={styles['notFound-text']}>¿Estas perdido? Intenta regresar al <a href="/">inicio</a>.</p>
            </div>
        </section>
    )
}