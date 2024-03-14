
import styles from '@/styles/section.module.css';

export default function Section(props: any) {
    return <section className={styles.section}>
        <div className={styles.background}>
            <div className={styles.imageContainer}>
                <img src="/background.png" />
            </div>
        </div>
        <div className="relative">
            <div className="container mx-auto">
                {props.children}
            </div>
        </div>
    </section>
}