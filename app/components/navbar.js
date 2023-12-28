import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.head}>
            <Image
                src="/etc-7046525_640.png"
                alt="logo"
                width="60"
                height="40"
                className={styles.logo}
            />
            <section className={styles.dir}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/about" className={styles.link}>
                    About
                </Link>
                <Link href="/events" className={styles.link}>
                    Events
                </Link>
                <Link href="/past-events" className={styles.link}>
                    Past Events
                </Link>
            </section>
        </nav>
    );
};

export default Navbar;
