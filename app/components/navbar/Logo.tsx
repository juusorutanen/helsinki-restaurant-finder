'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from '../../../styles/components/Navbar.module.scss'


const Logo = () => {
    const router = useRouter();

    return (
        <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className={styles.logo}
        width="150"
        height="100"
        src="/images/tohlogo2.png"
        />

    )

}

export default Logo;