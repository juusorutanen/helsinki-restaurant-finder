'use client'
import styles from '../../../styles/components/UserMenu.module.scss'
import Avatar from '../Avatar';
import { AiOutlineHeart,AiOutlineMenu } from 'react-icons/ai';

const UserMenu = () => {
    return (
        <div className={styles.relative}>
            <div className={styles.flex}>
                <div className={styles.userMenuButton}>
                <div className={styles.favorites}>
                    <AiOutlineHeart size={30}/>
                </div>
                <div className={styles.menu}>
                    <AiOutlineMenu size={30}/>
                </div>
                <div>
                    <Avatar/>
                </div>
                </div>
            </div>
        </div>

    )
}

export default UserMenu;