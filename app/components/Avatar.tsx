'use client'
import styles from '../../styles/components/Avatar.module.scss'
import Image from "next/image";

const Avatar = () => {
    return (
        <Image
        className={styles.avatar}
        alt="Avatar"
        src="/images/placeholder.jpg"
        width="30"
        height="30"
        />
    )
}

export default Avatar;