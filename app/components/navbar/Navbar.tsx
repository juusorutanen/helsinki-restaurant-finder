import styles from '../../../styles/components/Navbar.module.scss'
import Container from '../Container';
import Search from './Search';
import UserMenu from './UserMenu';
import Image from '../navbar/Logo';

const Navbar = () => {
    return (
        <div className ={styles.navbar}>
            <div className={styles.navbarBorder}>
            <Container>
                <div className={styles.navbarContainer}>
                <Image/>
                <Search/>
                <UserMenu/>
                </div>
            </Container>
            </div>
        </div>
    )
}

export default Navbar;