'use client'
import styles from '../../../styles/components/UserMenu.module.scss'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { useCallback, useState } from 'react';

const UserMenu = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className={styles.relative}>
            <div className={styles.flex}>
                <div className={styles.userMenuButton}>
                <div className={styles.favorites}>
                    <BiHeart size={30}  />
                </div>
                <div className={styles.menu}>
                    <AiOutlineMenu size={30}/>
                </div>
                <div onClick={toggleOpen}>
                    <Avatar/>
                </div>
                </div>
            </div>
            {isOpen && (
                <div className={styles.loginModal}>
                <div className={styles.loginFlex}>
                    <>
                    <MenuItem
                    onClick={() => {}}
                    label="Login"/>
                    </>
                    <>
                    <MenuItem
                    onClick={() => {}}
                    label="Sign up"/>
                    </>
                </div>
                </div>
            )}
        </div>

    )
}

export default UserMenu;