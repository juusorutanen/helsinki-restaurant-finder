'use client'
import styles from '../../../styles/components/UserMenu.module.scss'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';


interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const router = useRouter();


    const [isOpen,setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <>
        <div className={styles.relativeContainer}>
            <div className={styles.flexContainer}>
                <div className={styles.userMenuButtons}>
                <div onClick={() => router.push('/favorites')}className={styles.favorites}>
                    <BiHeart size={30} />Favorites
                </div>
                <div className={styles.menu}>
                    <AiOutlineMenu size={30}/>
                </div>
                <div onClick={toggleOpen}>
                    <Avatar src={currentUser?.image}/>
                </div>
                </div>
            </div>
            {isOpen && (
                <div className={styles.loginModal}>
                <div className={styles.loginFlex}>
                    {currentUser ? (
                    <>
                    <MenuItem
                    onClick={() => {}}
                    label={`Logged in as ${currentUser.name}`}
                    />
                    <MenuItem
                    onClick={() => {}}
                    label="My favorites"/>
                    <MenuItem
                    onClick={() => signOut()}
                    label="Log out"/>
                    </>

                    ) : (
                    <>
                    <MenuItem
                    onClick={loginModal.onOpen}
                    label="Login"
                    />
                    <MenuItem
                    onClick={registerModal.onOpen}
                    label="Sign up"
                    />
                    </>
                    )}
                
                </div>
                </div>
            )}
        </div>
    </>
    )
}

export default UserMenu;