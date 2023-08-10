'use client';


import { useRouter } from "next/navigation";
import styles from '../../styles/components/Footer.module.scss';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>2023 Helsinki Restaurant Finder | All Rights Reserved</p>
        </div>
    )

}

export default Footer;