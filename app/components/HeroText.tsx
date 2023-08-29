'use client';

import styles from '../../styles/components/Navbar.module.scss';
import { usePathname } from "next/navigation";


const HeroText = () => {


    const pathname = usePathname();
    const isMainPage = pathname === '/';
   
    if (!isMainPage) {
        return null;
    }
    return (
        <div className={styles.heroText}>
                <h1>Find your <span>favorite</span> restaurants from Helsinki</h1>
                <h2>All in one place</h2>
            </div>
    )

}

export default HeroText;