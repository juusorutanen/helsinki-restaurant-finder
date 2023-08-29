'use client'
import styles from '../../../styles/components/UserMenu.module.scss'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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
                <div onClick={() => currentUser ? router.push('/favorites') : loginModal.onOpen()}
                className={styles.favorites}>
                    <BiHeart size={30} />Favorites
                </div>
                <div className={styles.menu}>
                    <AiOutlineMenu onClick={toggleOpen} size={30}/>
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
                    onClick={() => {
                    router.push('/favorites');
                    toggleOpen();
                    }}
                    label="My favorites"
                     />
                    <MenuItem
                    onClick={() => signOut()}
                    label="Log out"/>
                    <div className={styles.loginClose}>
                        <AiOutlineClose onClick={toggleOpen} size={30}/>
                    </div>
                    </>

                    ) : (
                    <>
                    <MenuItem
                    onClick={() => {
                    loginModal.onOpen();
                    toggleOpen();
                    }}
                    label="Login"
                    />
                    <MenuItem
                    onClick={() => {
                    registerModal.onOpen();
                    toggleOpen();
                      }}
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