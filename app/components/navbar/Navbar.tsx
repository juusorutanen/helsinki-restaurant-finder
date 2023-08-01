'use client'
import styles from '../../../styles/components/Navbar.module.scss'
import Container from '../Container';

import UserMenu from './UserMenu';
import Categories from './Categories';
import Image from '../navbar/Logo';
import { SafeUser } from '@/app/types';
import Search from '../SearchInput';
import Heading from '../Heading';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    
    return (
        <div className ={styles.navbar}>
            <div className={styles.navbarBorder}>
            <Container>
                <div className={styles.navbarContainer}>
                <Image/>
                <UserMenu currentUser={currentUser}/>
                </div>
            </Container>
            </div>
            <div className={styles.heroText}>
                <h1>Find your favorite restaurants from Helsinki</h1>
            </div>
            <Search/>
            <Categories/>
        </div>
    )
}

export default Navbar;