'use client'

import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";
import styles from "../../styles/components/HeartButton.module.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface HeartButtonProps {
    placeId: string;
    currentUser?: SafeUser| null; 
}


const HeartButton:React.FC<HeartButtonProps> = ({
    placeId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        placeId,
        currentUser
    });

    return (
        <div onClick={toggleFavorite}
            className={styles.heart}>
            <AiOutlineHeart 
                className={styles.heartIcons}
                fill="white"
                size={28}/>
            <AiFillHeart className={styles.heartIcons}
                size={28}
                style={hasFavorited ? {fill:"red"} : {fill: "none"}}
                />
        </div>
      );
}
 
export default HeartButton;