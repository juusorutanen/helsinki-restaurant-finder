'use client'
import styles from '../../../styles/components/Navbar.module.scss'
import Container from '../Container';
import Search from './Search';
import UserMenu from './UserMenu';
import Categories from './Categories';
import Image from '../navbar/Logo';
import { SafeUser } from '@/app/types';

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
                <Search/>
                <UserMenu currentUser={currentUser}/>
                </div>
            </Container>
            </div>
            <Categories/>
        </div>
    )
}

export default Navbar;