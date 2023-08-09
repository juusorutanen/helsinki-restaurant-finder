'use client'
import styles from '../../../styles/components/Navbar.module.scss'
import Container from '../Container';
import UserMenu from './UserMenu';
import Categories from './Categories';
import Image from '../navbar/Logo';
import { SafeUser } from '@/app/types';
import SearchBar from '../SearchBar';
import { useState,useEffect } from 'react';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser

    
}) => {

    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <div className={`${styles.navbar} ${show ? styles.show : ''}`}>
            <div className={styles.navbarBorder}>
            <Container>
                <div className={styles.navbarContainer}>
                <Image/>
                <UserMenu currentUser={currentUser}/>
                </div>
            </Container>
            </div>
            <div className={styles.heroText}>
                <h1>Find your <span>favorite</span> restaurants from Helsinki</h1>
                <h2>All in one place</h2>
            </div>
            <SearchBar/>
            <Categories/>
        </div>
    )
}

export default Navbar;