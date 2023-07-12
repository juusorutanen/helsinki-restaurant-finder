'use client'
import styles from '../../styles/components/Avatar.module.scss'
import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
};

const Avatar:React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image
        className={styles.avatar}
        alt="Avatar"
        src={src || "/images/placeholder.jpg"}
        width="30"
        height="30"
        />
    )
}

export default Avatar;